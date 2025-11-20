// Quick script to remove .returning() from all route files for MySQL compatibility
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routesDir = path.join(__dirname, '../src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.ts'));

const fixes = {
  students: { table: 'student', idField: 'studentId' },
  faculty: { table: 'faculty', idField: 'facultyId' },
  departments: { table: 'department', idField: 'departmentId' },
  universities: { table: 'university', idField: 'universityId' },
  subjects: { table: 'subject', idField: 'subjectId' },
  enrollments: { table: 'enrolledIn', idField: 'id' },
  schedules: { table: 'scheduledIn', idField: 'id' },
};

console.log('Fixing .returning() calls in route files...\n');

for (const file of files) {
  const fileName = file.replace('.ts', '');
  if (!fixes[fileName]) continue;
  
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const { table, idField } = fixes[fileName];
  
  // Already fixed if no .returning() found
  if (!content.includes('.returning()')) {
    console.log(`✅ ${file} - already fixed`);
    continue;
  }
  
  console.log(`🔧 Fixing ${file}...`);
  
  // Pattern 1: POST - insert with .returning()
  const postPattern = /const result = await db\.insert\((\w+)\)\.values\(([^)]+)\)\.returning\(\);/g;
  content = content.replace(postPattern, (match, tableName, values) => {
    return `const insertResult = await db.insert(${tableName}).values(${values});
    const insertedId = (insertResult as any).insertId ?? (insertResult as any)[0]?.insertId;
    const result = await db.select().from(${tableName}).where(eq(${tableName}.${idField}, insertedId));`;
  });
  
  // Pattern 2: PUT - update with .returning()
  const updatePattern = /const result = await db\s*\.update\((\w+)\)\s*\.set\(([^)]+)\)\s*\.where\(([^)]+)\)\s*\.returning\(\);/gs;
  content = content.replace(updatePattern, (match, tableName, setClause, whereClause) => {
    return `await db.update(${tableName}).set(${setClause}).where(${whereClause});
    const result = await db.select().from(${tableName}).where(${whereClause});`;
  });
  
  // Pattern 3: DELETE - delete with .returning()
  const deletePattern = /const result = await db\s*\.delete\((\w+)\)\s*\.where\(([^)]+)\)\s*\.returning\(\);/gs;
  content = content.replace(deletePattern, (match, tableName, whereClause) => {
    return `const result = await db.select().from(${tableName}).where(${whereClause});
    if (result.length === 0) {
      return res.status(404).json({ error: '${fileName.slice(0, -1).charAt(0).toUpperCase() + fileName.slice(1, -1)} not found' });
    }
    await db.delete(${tableName}).where(${whereClause});`;
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ ${file} fixed`);
}

console.log('\n✅ All route files fixed!');
