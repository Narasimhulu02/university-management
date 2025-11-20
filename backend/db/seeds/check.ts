import { db } from '../index';
import { university } from '../schema';

async function check() {
  const unis = await db.select().from(university);
  console.log('Universities in database:', unis);
  process.exit(0);
}

check().catch(console.error);
