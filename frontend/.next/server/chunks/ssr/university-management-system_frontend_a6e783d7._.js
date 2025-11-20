module.exports = {

"[project]/university-management-system/frontend/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/university-management-system/frontend/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-orchids-id": "components\\ui\\button.tsx:51:4",
        "data-orchids-name": "Comp",
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/university-management-system/frontend/components/ui/input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        "data-orchids-id": "components\\ui\\input.tsx:7:4",
        "data-orchids-name": "input",
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/university-management-system/frontend/components/ui/label.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "components\\ui\\label.tsx:13:4",
        "data-orchids-name": "LabelPrimitive.Root",
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/university-management-system/frontend/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:7:4",
        "data-orchids-name": "div",
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:20:4",
        "data-orchids-name": "div",
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:33:4",
        "data-orchids-name": "div",
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:43:4",
        "data-orchids-name": "div",
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:53:4",
        "data-orchids-name": "div",
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:66:4",
        "data-orchids-name": "div",
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:76:4",
        "data-orchids-name": "div",
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/university-management-system/frontend/app/register/university/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UniversityRegisterPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function UniversityRegisterPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const universityId = searchParams.get("id");
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // University Data
    const [universityData, setUniversityData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        location: "",
        establishedYear: new Date().getFullYear()
    });
    // Entity Arrays
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [faculty, setFaculty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subjects, setSubjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [classrooms, setClassrooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [enrollments, setEnrollments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [schedules, setSchedules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const steps = [
        {
            title: "University Info",
            description: "Basic university details"
        },
        {
            title: "Departments",
            description: "Add departments"
        },
        {
            title: "Faculty",
            description: "Add faculty members"
        },
        {
            title: "Students",
            description: "Add students"
        },
        {
            title: "Courses",
            description: "Add courses"
        },
        {
            title: "Subjects",
            description: "Add subjects"
        },
        {
            title: "Classrooms",
            description: "Add classrooms"
        },
        {
            title: "Enrollments",
            description: "Enroll students in courses"
        },
        {
            title: "Schedules",
            description: "Schedule subjects in classrooms"
        },
        {
            title: "Review",
            description: "Review and submit"
        }
    ];
    const generateTempId = ()=>`temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    // Add functions for each entity
    const addDepartment = ()=>{
        setDepartments([
            ...departments,
            {
                tempId: generateTempId(),
                name: "",
                building: ""
            }
        ]);
    };
    const removeDepartment = (tempId)=>{
        setDepartments(departments.filter((d)=>d.tempId !== tempId));
    };
    const updateDepartment = (tempId, field, value)=>{
        setDepartments(departments.map((d)=>d.tempId === tempId ? {
                ...d,
                [field]: value
            } : d));
    };
    const addFaculty = ()=>{
        setFaculty([
            ...faculty,
            {
                tempId: generateTempId(),
                name: "",
                designation: "",
                email: "",
                phone: "",
                departmentTempId: departments[0]?.tempId || ""
            }
        ]);
    };
    const removeFaculty = (tempId)=>{
        setFaculty(faculty.filter((f)=>f.tempId !== tempId));
    };
    const updateFaculty = (tempId, field, value)=>{
        setFaculty(faculty.map((f)=>f.tempId === tempId ? {
                ...f,
                [field]: value
            } : f));
    };
    const addStudent = ()=>{
        setStudents([
            ...students,
            {
                tempId: generateTempId(),
                name: "",
                email: "",
                dateOfBirth: "",
                gender: "Male",
                address: "",
                phone: "",
                departmentTempId: departments[0]?.tempId || ""
            }
        ]);
    };
    const removeStudent = (tempId)=>{
        setStudents(students.filter((s)=>s.tempId !== tempId));
    };
    const updateStudent = (tempId, field, value)=>{
        setStudents(students.map((s)=>s.tempId === tempId ? {
                ...s,
                [field]: value
            } : s));
    };
    const addCourse = ()=>{
        setCourses([
            ...courses,
            {
                tempId: generateTempId(),
                courseName: "",
                credits: 3,
                semester: 1,
                departmentTempId: departments[0]?.tempId || ""
            }
        ]);
    };
    const removeCourse = (tempId)=>{
        setCourses(courses.filter((c)=>c.tempId !== tempId));
    };
    const updateCourse = (tempId, field, value)=>{
        setCourses(courses.map((c)=>c.tempId === tempId ? {
                ...c,
                [field]: value
            } : c));
    };
    const addSubject = ()=>{
        setSubjects([
            ...subjects,
            {
                tempId: generateTempId(),
                name: "",
                credits: 3,
                courseTempId: courses[0]?.tempId || "",
                facultyTempId: faculty[0]?.tempId || ""
            }
        ]);
    };
    const removeSubject = (tempId)=>{
        setSubjects(subjects.filter((s)=>s.tempId !== tempId));
    };
    const updateSubject = (tempId, field, value)=>{
        setSubjects(subjects.map((s)=>s.tempId === tempId ? {
                ...s,
                [field]: value
            } : s));
    };
    const addClassroom = ()=>{
        setClassrooms([
            ...classrooms,
            {
                tempId: generateTempId(),
                roomNumber: "",
                building: "",
                capacity: 30
            }
        ]);
    };
    const removeClassroom = (tempId)=>{
        setClassrooms(classrooms.filter((c)=>c.tempId !== tempId));
    };
    const updateClassroom = (tempId, field, value)=>{
        setClassrooms(classrooms.map((c)=>c.tempId === tempId ? {
                ...c,
                [field]: value
            } : c));
    };
    const addEnrollment = ()=>{
        setEnrollments([
            ...enrollments,
            {
                tempId: generateTempId(),
                studentTempId: students[0]?.tempId || "",
                courseTempId: courses[0]?.tempId || "",
                grade: ""
            }
        ]);
    };
    const removeEnrollment = (tempId)=>{
        setEnrollments(enrollments.filter((e)=>e.tempId !== tempId));
    };
    const updateEnrollment = (tempId, field, value)=>{
        setEnrollments(enrollments.map((e)=>e.tempId === tempId ? {
                ...e,
                [field]: value
            } : e));
    };
    const addSchedule = ()=>{
        setSchedules([
            ...schedules,
            {
                tempId: generateTempId(),
                subjectTempId: subjects[0]?.tempId || "",
                classroomTempId: classrooms[0]?.tempId || "",
                day: "Monday",
                timeSlot: "09:00-10:00"
            }
        ]);
    };
    const removeSchedule = (tempId)=>{
        setSchedules(schedules.filter((s)=>s.tempId !== tempId));
    };
    const updateSchedule = (tempId, field, value)=>{
        setSchedules(schedules.map((s)=>s.tempId === tempId ? {
                ...s,
                [field]: value
            } : s));
    };
    const canProceedToNext = ()=>{
        switch(currentStep){
            case 0:
                return universityData.name && universityData.location && universityData.establishedYear;
            case 1:
                return departments.length > 0 && departments.every((d)=>d.name && d.building);
            case 2:
                return true; // Faculty is optional
            case 3:
                return true; // Students are optional
            case 4:
                return true; // Courses are optional
            case 5:
                return subjects.length === 0 || courses.length > 0 && faculty.length > 0;
            case 6:
                return true; // Classrooms are optional
            case 7:
                return enrollments.length === 0 || students.length > 0 && courses.length > 0;
            case 8:
                return schedules.length === 0 || subjects.length > 0 && classrooms.length > 0;
            default:
                return true;
        }
    };
    const handleSubmit = async ()=>{
        if (!universityId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("University ID is required");
            return;
        }
        setIsLoading(true);
        try {
            // Create university
            const universityResponse = await fetch("/api/university", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    university_id: parseInt(universityId),
                    ...universityData,
                    established_year: universityData.establishedYear
                })
            });
            if (!universityResponse.ok) {
                throw new Error("Failed to create university");
            }
            const universityResult = await universityResponse.json();
            const finalUniversityId = universityResult.university_id;
            // Map temp IDs to real IDs
            const departmentIdMap = {};
            const facultyIdMap = {};
            const studentIdMap = {};
            const courseIdMap = {};
            const subjectIdMap = {};
            const classroomIdMap = {};
            // Create departments
            for (const dept of departments){
                const response = await fetch("/api/department", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: dept.name,
                        building: dept.building,
                        university_id: finalUniversityId
                    })
                });
                const result = await response.json();
                departmentIdMap[dept.tempId] = result.department_id;
            }
            // Create faculty
            for (const fac of faculty){
                const response = await fetch("/api/faculty", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: fac.name,
                        designation: fac.designation,
                        email: fac.email,
                        phone: fac.phone,
                        department_id: departmentIdMap[fac.departmentTempId]
                    })
                });
                const result = await response.json();
                facultyIdMap[fac.tempId] = result.faculty_id;
            }
            // Create students
            for (const student of students){
                const studentId = `STU${finalUniversityId}${String(students.indexOf(student) + 1).padStart(4, '0')}`;
                const response = await fetch("/api/student", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        studentId: studentId,
                        name: student.name,
                        email: student.email,
                        phoneNumber: student.phone,
                        address: student.address,
                        departmentId: departmentIdMap[student.departmentTempId],
                        universityId: finalUniversityId
                    })
                });
                const result = await response.json();
                studentIdMap[student.tempId] = result.student_id;
            }
            // Create courses
            for (const course of courses){
                const response = await fetch("/api/course", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        course_name: course.courseName,
                        credits: course.credits,
                        semester: course.semester,
                        department_id: departmentIdMap[course.departmentTempId]
                    })
                });
                const result = await response.json();
                courseIdMap[course.tempId] = result.course_id;
            }
            // Create subjects
            for (const subject of subjects){
                const response = await fetch("/api/subject", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: subject.name,
                        credits: subject.credits,
                        course_id: courseIdMap[subject.courseTempId],
                        faculty_id: facultyIdMap[subject.facultyTempId]
                    })
                });
                const result = await response.json();
                subjectIdMap[subject.tempId] = result.subject_id;
            }
            // Create classrooms
            for (const classroom of classrooms){
                const response = await fetch("/api/classroom", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        room_number: classroom.roomNumber,
                        building: classroom.building,
                        capacity: classroom.capacity
                    })
                });
                const result = await response.json();
                classroomIdMap[classroom.tempId] = result.classroom_id;
            }
            // Create enrollments
            for (const enrollment of enrollments){
                await fetch("/api/enrolled-in", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        student_id: studentIdMap[enrollment.studentTempId],
                        course_id: courseIdMap[enrollment.courseTempId],
                        grade: enrollment.grade || null
                    })
                });
            }
            // Create schedules
            for (const schedule of schedules){
                await fetch("/api/scheduled-in", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        subject_id: subjectIdMap[schedule.subjectTempId],
                        classroom_id: classroomIdMap[schedule.classroomTempId],
                        day: schedule.day,
                        time_slot: schedule.timeSlot
                    })
                });
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("University registered successfully!");
            router.push(`/?registered=true&universityId=${universityId}`);
        } catch (error) {
            console.error("Registration error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to register university. Please try again.");
            setIsLoading(false);
        }
    };
    const renderStepContent = ()=>{
        switch(currentStep){
            case 0:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:457:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:458:12",
                            "data-orchids-name": "div",
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:459:14",
                                    "data-orchids-name": "Label",
                                    children: "University ID"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 459,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:460:14",
                                    "data-orchids-name": "Input",
                                    value: universityId || "",
                                    disabled: true
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 460,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 458,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:462:12",
                            "data-orchids-name": "div",
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:463:14",
                                    "data-orchids-name": "Label",
                                    children: "University Name"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:464:14",
                                    "data-orchids-name": "Input",
                                    value: universityData.name,
                                    onChange: (e)=>setUniversityData({
                                            ...universityData,
                                            name: e.target.value
                                        }),
                                    placeholder: "e.g., Stanford University"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 464,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 462,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:470:12",
                            "data-orchids-name": "div",
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:471:14",
                                    "data-orchids-name": "Label",
                                    children: "Location"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:472:14",
                                    "data-orchids-name": "Input",
                                    value: universityData.location,
                                    onChange: (e)=>setUniversityData({
                                            ...universityData,
                                            location: e.target.value
                                        }),
                                    placeholder: "e.g., Stanford, CA"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 470,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:478:12",
                            "data-orchids-name": "div",
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:479:14",
                                    "data-orchids-name": "Label",
                                    children: "Established Year"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 479,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:480:14",
                                    "data-orchids-name": "Input",
                                    type: "number",
                                    value: universityData.establishedYear,
                                    onChange: (e)=>setUniversityData({
                                            ...universityData,
                                            establishedYear: parseInt(e.target.value)
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 480,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 478,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 457,
                    columnNumber: 11
                }, this);
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:491:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:492:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:493:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Departments"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 493,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:494:14@addDepartment",
                                    "data-orchids-name": "Button",
                                    onClick: addDepartment,
                                    size: "sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:495:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 495,
                                            columnNumber: 17
                                        }, this),
                                        " Add Department"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 494,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 492,
                            columnNumber: 13
                        }, this),
                        departments.map((dept, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:499:14@departments",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:500:16@departments",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:501:18@departments",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:502:20@departments",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Department ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 502,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:503:20@departments",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeDepartment(dept.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:504:22@departments",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 501,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:507:18@departments",
                                            "data-orchids-name": "Input",
                                            placeholder: "Department Name",
                                            value: dept.name,
                                            onChange: (e)=>updateDepartment(dept.tempId, "name", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:512:18@departments",
                                            "data-orchids-name": "Input",
                                            placeholder: "Building",
                                            value: dept.building,
                                            onChange: (e)=>updateDepartment(dept.tempId, "building", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 500,
                                    columnNumber: 17
                                }, this)
                            }, dept.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 499,
                                columnNumber: 15
                            }, this)),
                        departments.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:521:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No departments added yet. Add at least one department to continue."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 521,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 491,
                    columnNumber: 11
                }, this);
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:528:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:529:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:530:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Faculty Members"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 530,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:531:14@addFaculty",
                                    "data-orchids-name": "Button",
                                    onClick: addFaculty,
                                    size: "sm",
                                    disabled: departments.length === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:532:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 532,
                                            columnNumber: 17
                                        }, this),
                                        " Add Faculty"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 531,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 529,
                            columnNumber: 13
                        }, this),
                        faculty.map((fac, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:536:14@faculty",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:537:16@faculty",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:538:18@faculty",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:539:20@faculty",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Faculty ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:540:20@faculty",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeFaculty(fac.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:541:22@faculty",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 538,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:544:18@faculty",
                                            "data-orchids-name": "Input",
                                            placeholder: "Faculty Name",
                                            value: fac.name,
                                            onChange: (e)=>updateFaculty(fac.tempId, "name", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 544,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:549:18@faculty",
                                            "data-orchids-name": "Input",
                                            placeholder: "Designation",
                                            value: fac.designation,
                                            onChange: (e)=>updateFaculty(fac.tempId, "designation", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 549,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:554:18@faculty",
                                            "data-orchids-name": "Input",
                                            placeholder: "Email",
                                            type: "email",
                                            value: fac.email,
                                            onChange: (e)=>updateFaculty(fac.tempId, "email", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 554,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:560:18@faculty",
                                            "data-orchids-name": "Input",
                                            placeholder: "Phone",
                                            value: fac.phone,
                                            onChange: (e)=>updateFaculty(fac.tempId, "phone", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 560,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:565:18@faculty",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: fac.departmentTempId,
                                            onChange: (e)=>updateFaculty(fac.tempId, "departmentTempId", e.target.value),
                                            children: departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:571:22@departments",
                                                    "data-orchids-name": "option",
                                                    value: dept.tempId,
                                                    children: dept.name
                                                }, dept.tempId, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 571,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 565,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 537,
                                    columnNumber: 17
                                }, this)
                            }, fac.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 536,
                                columnNumber: 15
                            }, this)),
                        departments.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:578:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "Please add departments first."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 578,
                            columnNumber: 15
                        }, this),
                        faculty.length === 0 && departments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:581:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No faculty added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 581,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 528,
                    columnNumber: 11
                }, this);
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:588:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:589:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:590:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Students"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 590,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:591:14@addStudent",
                                    "data-orchids-name": "Button",
                                    onClick: addStudent,
                                    size: "sm",
                                    disabled: departments.length === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:592:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 592,
                                            columnNumber: 17
                                        }, this),
                                        " Add Student"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 591,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 589,
                            columnNumber: 13
                        }, this),
                        students.map((student, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:596:14@students",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:597:16@students",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:598:18@students",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:599:20@students",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Student ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:600:20@students",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeStudent(student.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:601:22@students",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 600,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 598,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:604:18@students",
                                            "data-orchids-name": "Input",
                                            placeholder: "Student Name",
                                            value: student.name,
                                            onChange: (e)=>updateStudent(student.tempId, "name", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 604,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:609:18@students",
                                            "data-orchids-name": "Input",
                                            placeholder: "Email",
                                            type: "email",
                                            value: student.email,
                                            onChange: (e)=>updateStudent(student.tempId, "email", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 609,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:615:18@students",
                                            "data-orchids-name": "Input",
                                            placeholder: "Date of Birth",
                                            type: "date",
                                            value: student.dateOfBirth,
                                            onChange: (e)=>updateStudent(student.tempId, "dateOfBirth", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 615,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:621:18@students",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: student.gender,
                                            onChange: (e)=>updateStudent(student.tempId, "gender", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:626:20@students",
                                                    "data-orchids-name": "option",
                                                    value: "Male",
                                                    children: "Male"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:627:20@students",
                                                    "data-orchids-name": "option",
                                                    value: "Female",
                                                    children: "Female"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:628:20@students",
                                                    "data-orchids-name": "option",
                                                    value: "Other",
                                                    children: "Other"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 628,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 621,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:630:18@students",
                                            "data-orchids-name": "Input",
                                            placeholder: "Address",
                                            value: student.address,
                                            onChange: (e)=>updateStudent(student.tempId, "address", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 630,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:635:18@students",
                                            "data-orchids-name": "Input",
                                            placeholder: "Phone",
                                            value: student.phone,
                                            onChange: (e)=>updateStudent(student.tempId, "phone", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 635,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:640:18@students",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: student.departmentTempId,
                                            onChange: (e)=>updateStudent(student.tempId, "departmentTempId", e.target.value),
                                            children: departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:646:22@departments",
                                                    "data-orchids-name": "option",
                                                    value: dept.tempId,
                                                    children: dept.name
                                                }, dept.tempId, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 646,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 640,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 597,
                                    columnNumber: 17
                                }, this)
                            }, student.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 596,
                                columnNumber: 15
                            }, this)),
                        departments.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:653:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "Please add departments first."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 653,
                            columnNumber: 15
                        }, this),
                        students.length === 0 && departments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:656:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No students added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 656,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 588,
                    columnNumber: 11
                }, this);
            case 4:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:663:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:664:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:665:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Courses"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 665,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:666:14@addCourse",
                                    "data-orchids-name": "Button",
                                    onClick: addCourse,
                                    size: "sm",
                                    disabled: departments.length === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:667:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 667,
                                            columnNumber: 17
                                        }, this),
                                        " Add Course"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 666,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 664,
                            columnNumber: 13
                        }, this),
                        courses.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:671:14@courses",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:672:16@courses",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:673:18@courses",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:674:20@courses",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Course ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:675:20@courses",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeCourse(course.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:676:22@courses",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 676,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 673,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:679:18@courses",
                                            "data-orchids-name": "Input",
                                            placeholder: "Course Name",
                                            value: course.courseName,
                                            onChange: (e)=>updateCourse(course.tempId, "courseName", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 679,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:684:18@courses",
                                            "data-orchids-name": "Input",
                                            placeholder: "Credits",
                                            type: "number",
                                            value: course.credits,
                                            onChange: (e)=>updateCourse(course.tempId, "credits", parseInt(e.target.value))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 684,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:690:18@courses",
                                            "data-orchids-name": "Input",
                                            placeholder: "Semester",
                                            type: "number",
                                            value: course.semester,
                                            onChange: (e)=>updateCourse(course.tempId, "semester", parseInt(e.target.value))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:696:18@courses",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: course.departmentTempId,
                                            onChange: (e)=>updateCourse(course.tempId, "departmentTempId", e.target.value),
                                            children: departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:702:22@departments",
                                                    "data-orchids-name": "option",
                                                    value: dept.tempId,
                                                    children: dept.name
                                                }, dept.tempId, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 702,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 696,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 672,
                                    columnNumber: 17
                                }, this)
                            }, course.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 671,
                                columnNumber: 15
                            }, this)),
                        departments.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:709:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "Please add departments first."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 709,
                            columnNumber: 15
                        }, this),
                        courses.length === 0 && departments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:712:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No courses added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 712,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 663,
                    columnNumber: 11
                }, this);
            case 5:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:719:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:720:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:721:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Subjects"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 721,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:722:14@addSubject",
                                    "data-orchids-name": "Button",
                                    onClick: addSubject,
                                    size: "sm",
                                    disabled: courses.length === 0 || faculty.length === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:723:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 723,
                                            columnNumber: 17
                                        }, this),
                                        " Add Subject"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 722,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 720,
                            columnNumber: 13
                        }, this),
                        subjects.map((subject, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:727:14@subjects",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:728:16@subjects",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:729:18@subjects",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:730:20@subjects",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Subject ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 730,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:731:20@subjects",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeSubject(subject.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:732:22@subjects",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 731,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 729,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:735:18@subjects",
                                            "data-orchids-name": "Input",
                                            placeholder: "Subject Name",
                                            value: subject.name,
                                            onChange: (e)=>updateSubject(subject.tempId, "name", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 735,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:740:18@subjects",
                                            "data-orchids-name": "Input",
                                            placeholder: "Credits",
                                            type: "number",
                                            value: subject.credits,
                                            onChange: (e)=>updateSubject(subject.tempId, "credits", parseInt(e.target.value))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 740,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:746:18@subjects",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: subject.courseTempId,
                                            onChange: (e)=>updateSubject(subject.tempId, "courseTempId", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:751:20@subjects",
                                                    "data-orchids-name": "option",
                                                    value: "",
                                                    children: "Select Course"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 751,
                                                    columnNumber: 21
                                                }, this),
                                                courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:753:22@courses",
                                                        "data-orchids-name": "option",
                                                        value: course.tempId,
                                                        children: course.courseName
                                                    }, course.tempId, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 753,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 746,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:756:18@subjects",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: subject.facultyTempId,
                                            onChange: (e)=>updateSubject(subject.tempId, "facultyTempId", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:761:20@subjects",
                                                    "data-orchids-name": "option",
                                                    value: "",
                                                    children: "Select Faculty"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 21
                                                }, this),
                                                faculty.map((fac)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:763:22@faculty",
                                                        "data-orchids-name": "option",
                                                        value: fac.tempId,
                                                        children: fac.name
                                                    }, fac.tempId, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 763,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 756,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 728,
                                    columnNumber: 17
                                }, this)
                            }, subject.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 727,
                                columnNumber: 15
                            }, this)),
                        (courses.length === 0 || faculty.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:770:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "Please add courses and faculty first."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 770,
                            columnNumber: 15
                        }, this),
                        subjects.length === 0 && courses.length > 0 && faculty.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:773:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No subjects added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 773,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 719,
                    columnNumber: 11
                }, this);
            case 6:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:780:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:781:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:782:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Classrooms"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 782,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:783:14@addClassroom",
                                    "data-orchids-name": "Button",
                                    onClick: addClassroom,
                                    size: "sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:784:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 784,
                                            columnNumber: 17
                                        }, this),
                                        " Add Classroom"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 783,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 781,
                            columnNumber: 13
                        }, this),
                        classrooms.map((classroom, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:788:14@classrooms",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:789:16@classrooms",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:790:18@classrooms",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:791:20@classrooms",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Classroom ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 791,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:792:20@classrooms",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeClassroom(classroom.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:793:22@classrooms",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 793,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 792,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 790,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:796:18@classrooms",
                                            "data-orchids-name": "Input",
                                            placeholder: "Room Number",
                                            value: classroom.roomNumber,
                                            onChange: (e)=>updateClassroom(classroom.tempId, "roomNumber", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 796,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:801:18@classrooms",
                                            "data-orchids-name": "Input",
                                            placeholder: "Building",
                                            value: classroom.building,
                                            onChange: (e)=>updateClassroom(classroom.tempId, "building", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 801,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:806:18@classrooms",
                                            "data-orchids-name": "Input",
                                            placeholder: "Capacity",
                                            type: "number",
                                            value: classroom.capacity,
                                            onChange: (e)=>updateClassroom(classroom.tempId, "capacity", parseInt(e.target.value))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 806,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 789,
                                    columnNumber: 17
                                }, this)
                            }, classroom.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 788,
                                columnNumber: 15
                            }, this)),
                        classrooms.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:816:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No classrooms added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 816,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 780,
                    columnNumber: 11
                }, this);
            case 7:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:823:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:824:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:825:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Enrollments"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 825,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:826:14@addEnrollment",
                                    "data-orchids-name": "Button",
                                    onClick: addEnrollment,
                                    size: "sm",
                                    disabled: students.length === 0 || courses.length === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:827:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 827,
                                            columnNumber: 17
                                        }, this),
                                        " Add Enrollment"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 826,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 824,
                            columnNumber: 13
                        }, this),
                        enrollments.map((enrollment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:831:14@enrollments",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:832:16@enrollments",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:833:18@enrollments",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:834:20@enrollments",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Enrollment ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 834,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:835:20@enrollments",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeEnrollment(enrollment.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:836:22@enrollments",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 836,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 835,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 833,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:839:18@enrollments",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: enrollment.studentTempId,
                                            onChange: (e)=>updateEnrollment(enrollment.tempId, "studentTempId", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:844:20@enrollments",
                                                    "data-orchids-name": "option",
                                                    value: "",
                                                    children: "Select Student"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 844,
                                                    columnNumber: 21
                                                }, this),
                                                students.map((student)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:846:22@students",
                                                        "data-orchids-name": "option",
                                                        value: student.tempId,
                                                        children: student.name
                                                    }, student.tempId, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 846,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 839,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:849:18@enrollments",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: enrollment.courseTempId,
                                            onChange: (e)=>updateEnrollment(enrollment.tempId, "courseTempId", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:854:20@enrollments",
                                                    "data-orchids-name": "option",
                                                    value: "",
                                                    children: "Select Course"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 854,
                                                    columnNumber: 21
                                                }, this),
                                                courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:856:22@courses",
                                                        "data-orchids-name": "option",
                                                        value: course.tempId,
                                                        children: course.courseName
                                                    }, course.tempId, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 849,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:859:18@enrollments",
                                            "data-orchids-name": "Input",
                                            placeholder: "Grade (optional)",
                                            value: enrollment.grade,
                                            onChange: (e)=>updateEnrollment(enrollment.tempId, "grade", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 859,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 832,
                                    columnNumber: 17
                                }, this)
                            }, enrollment.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 831,
                                columnNumber: 15
                            }, this)),
                        (students.length === 0 || courses.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:868:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "Please add students and courses first."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 868,
                            columnNumber: 15
                        }, this),
                        enrollments.length === 0 && students.length > 0 && courses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:871:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No enrollments added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 871,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 823,
                    columnNumber: 11
                }, this);
            case 8:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:878:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:879:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:880:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Schedules"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 880,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:881:14@addSchedule",
                                    "data-orchids-name": "Button",
                                    onClick: addSchedule,
                                    size: "sm",
                                    disabled: subjects.length === 0 || classrooms.length === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:882:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 882,
                                            columnNumber: 17
                                        }, this),
                                        " Add Schedule"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 881,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 879,
                            columnNumber: 13
                        }, this),
                        schedules.map((schedule, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:886:14@schedules",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:887:16@schedules",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:888:18@schedules",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:889:20@schedules",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Schedule ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:890:20@schedules",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeSchedule(schedule.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:891:22@schedules",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 890,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 888,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:894:18@schedules",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: schedule.subjectTempId,
                                            onChange: (e)=>updateSchedule(schedule.tempId, "subjectTempId", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:899:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "",
                                                    children: "Select Subject"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 899,
                                                    columnNumber: 21
                                                }, this),
                                                subjects.map((subject)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:901:22@subjects",
                                                        "data-orchids-name": "option",
                                                        value: subject.tempId,
                                                        children: subject.name
                                                    }, subject.tempId, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 901,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 894,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:904:18@schedules",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: schedule.classroomTempId,
                                            onChange: (e)=>updateSchedule(schedule.tempId, "classroomTempId", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:909:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "",
                                                    children: "Select Classroom"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 909,
                                                    columnNumber: 21
                                                }, this),
                                                classrooms.map((classroom)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:911:22@classrooms",
                                                        "data-orchids-name": "option",
                                                        value: classroom.tempId,
                                                        children: [
                                                            classroom.roomNumber,
                                                            " - ",
                                                            classroom.building
                                                        ]
                                                    }, classroom.tempId, true, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 911,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 904,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:916:18@schedules",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: schedule.day,
                                            onChange: (e)=>updateSchedule(schedule.tempId, "day", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:921:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "Monday",
                                                    children: "Monday"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 921,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:922:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "Tuesday",
                                                    children: "Tuesday"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 922,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:923:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "Wednesday",
                                                    children: "Wednesday"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 923,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:924:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "Thursday",
                                                    children: "Thursday"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 924,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:925:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "Friday",
                                                    children: "Friday"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 925,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:926:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "Saturday",
                                                    children: "Saturday"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 926,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 916,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:928:18@schedules",
                                            "data-orchids-name": "Input",
                                            placeholder: "Time Slot (e.g., 09:00-10:00)",
                                            value: schedule.timeSlot,
                                            onChange: (e)=>updateSchedule(schedule.tempId, "timeSlot", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 928,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 887,
                                    columnNumber: 17
                                }, this)
                            }, schedule.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 886,
                                columnNumber: 15
                            }, this)),
                        (subjects.length === 0 || classrooms.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:937:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "Please add subjects and classrooms first."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 937,
                            columnNumber: 15
                        }, this),
                        schedules.length === 0 && subjects.length > 0 && classrooms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:940:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No schedules added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 940,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 878,
                    columnNumber: 11
                }, this);
            case 9:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:947:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:948:12",
                            "data-orchids-name": "h3",
                            className: "text-lg font-semibold mb-4",
                            children: "Review Your Registration"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 948,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            "data-orchids-id": "app\\register\\university\\page.tsx:949:12",
                            "data-orchids-name": "Card",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "app\\register\\university\\page.tsx:950:14",
                                "data-orchids-name": "CardContent",
                                className: "pt-6 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:951:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:951:21",
                                                "data-orchids-name": "strong",
                                                children: "University:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 951,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            universityData.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 951,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:952:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:952:21",
                                                "data-orchids-name": "strong",
                                                children: "Location:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 952,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            universityData.location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 952,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:953:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:953:21",
                                                "data-orchids-name": "strong",
                                                children: "Established:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 953,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            universityData.establishedYear
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 953,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:954:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:954:21",
                                                "data-orchids-name": "strong",
                                                children: "Departments:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 954,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            departments.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 954,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:955:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:955:21",
                                                "data-orchids-name": "strong",
                                                children: "Faculty:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 955,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            faculty.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 955,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:956:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:956:21",
                                                "data-orchids-name": "strong",
                                                children: "Students:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 956,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            students.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 956,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:957:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:957:21",
                                                "data-orchids-name": "strong",
                                                children: "Courses:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 957,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            courses.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 957,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:958:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:958:21",
                                                "data-orchids-name": "strong",
                                                children: "Subjects:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 958,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            subjects.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 958,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:959:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:959:21",
                                                "data-orchids-name": "strong",
                                                children: "Classrooms:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 959,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            classrooms.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 959,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:960:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:960:21",
                                                "data-orchids-name": "strong",
                                                children: "Enrollments:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 960,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            enrollments.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 960,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:961:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:961:21",
                                                "data-orchids-name": "strong",
                                                children: "Schedules:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 961,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            schedules.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 961,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 950,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 949,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 947,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "app\\register\\university\\page.tsx:973:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-purple-950 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "app\\register\\university\\page.tsx:974:6",
            "data-orchids-name": "div",
            className: "max-w-4xl mx-auto py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                "data-orchids-id": "app\\register\\university\\page.tsx:975:8",
                "data-orchids-name": "Card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        "data-orchids-id": "app\\register\\university\\page.tsx:976:10",
                        "data-orchids-name": "CardHeader",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "app\\register\\university\\page.tsx:977:12",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:978:14",
                                        "data-orchids-name": "div",
                                        className: "w-12 h-12 rounded-full bg-primary flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:979:16",
                                            "data-orchids-name": "GraduationCap",
                                            className: "w-6 h-6 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 979,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 978,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:981:14",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:982:16",
                                                "data-orchids-name": "CardTitle",
                                                className: "text-2xl",
                                                children: "Register New University"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 982,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:983:16",
                                                "data-orchids-name": "CardDescription",
                                                children: "Set up your university with all necessary details"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 983,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 981,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 977,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "app\\register\\university\\page.tsx:988:12",
                                "data-orchids-name": "div",
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:989:14",
                                        "data-orchids-name": "div",
                                        className: "flex items-center justify-between mb-2",
                                        children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "app\\register\\university\\page.tsx:991:18@steps",
                                                "data-orchids-name": "div",
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:992:20@steps",
                                                        "data-orchids-name": "div",
                                                        className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${index < currentStep ? "bg-primary text-white" : index === currentStep ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`,
                                                        children: index < currentStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            "data-map-index": index,
                                                            "data-orchids-id": "app\\register\\university\\page.tsx:997:45@steps",
                                                            "data-orchids-name": "Check",
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                            lineNumber: 997,
                                                            columnNumber: 46
                                                        }, this) : index + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 992,
                                                        columnNumber: 21
                                                    }, this),
                                                    index < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:1000:22@steps",
                                                        "data-orchids-name": "div",
                                                        className: `w-8 h-1 ${index < currentStep ? "bg-primary" : "bg-muted"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 1000,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 991,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 989,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:1005:14",
                                        "data-orchids-name": "div",
                                        className: "text-sm text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:1006:16",
                                                "data-orchids-name": "div",
                                                className: "font-medium",
                                                children: steps[currentStep].title
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 1006,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:1007:16",
                                                "data-orchids-name": "div",
                                                className: "text-muted-foreground",
                                                children: steps[currentStep].description
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 1007,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 1005,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 988,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                        lineNumber: 976,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        "data-orchids-id": "app\\register\\university\\page.tsx:1012:10",
                        "data-orchids-name": "CardContent",
                        className: "min-h-[400px]",
                        children: renderStepContent()
                    }, void 0, false, {
                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                        lineNumber: 1012,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "app\\register\\university\\page.tsx:1016:10",
                        "data-orchids-name": "div",
                        className: "p-6 border-t flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "app\\register\\university\\page.tsx:1017:12",
                                "data-orchids-name": "Button",
                                variant: "outline",
                                onClick: ()=>setCurrentStep(Math.max(0, currentStep - 1)),
                                disabled: currentStep === 0 || isLoading,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:1022:14",
                                        "data-orchids-name": "ChevronLeft",
                                        className: "w-4 h-4 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 1022,
                                        columnNumber: 15
                                    }, this),
                                    " Previous"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 1017,
                                columnNumber: 13
                            }, this),
                            currentStep < steps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "app\\register\\university\\page.tsx:1026:14",
                                "data-orchids-name": "Button",
                                onClick: ()=>setCurrentStep(currentStep + 1),
                                disabled: !canProceedToNext() || isLoading,
                                children: [
                                    "Next ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:1030:21",
                                        "data-orchids-name": "ChevronRight",
                                        className: "w-4 h-4 ml-1"
                                    }, void 0, false, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 1030,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 1026,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "app\\register\\university\\page.tsx:1033:14@handleSubmit",
                                "data-orchids-name": "Button",
                                onClick: handleSubmit,
                                disabled: isLoading,
                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:1036:20",
                                            "data-orchids-name": "Loader2",
                                            className: "mr-2 h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 1036,
                                            columnNumber: 21
                                        }, this),
                                        "Registering..."
                                    ]
                                }, void 0, true) : "Complete Registration"
                            }, void 0, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 1033,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                        lineNumber: 1016,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                lineNumber: 975,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
            lineNumber: 974,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
        lineNumber: 973,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=university-management-system_frontend_a6e783d7._.js.map