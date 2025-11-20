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
"[project]/university-management-system/frontend/lib/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// API configuration for frontend
__turbopack_context__.s({
    "api": (()=>api),
    "fetcher": (()=>fetcher)
});
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:4000") || 'http://localhost:4000';
const api = {
    // Base URL
    baseURL: API_BASE_URL,
    // Universities
    universities: {
        getAll: (search)=>`${API_BASE_URL}/api/universities${search ? `?search=${encodeURIComponent(search)}` : ''}`,
        getById: (id)=>`${API_BASE_URL}/api/universities/${id}`,
        create: ()=>`${API_BASE_URL}/api/universities`,
        update: (id)=>`${API_BASE_URL}/api/universities/${id}`,
        delete: (id)=>`${API_BASE_URL}/api/universities/${id}`
    },
    // Departments
    departments: {
        getAll: (universityId, search)=>{
            const params = new URLSearchParams();
            if (universityId) params.set('universityId', universityId.toString());
            if (search) params.set('search', search);
            return `${API_BASE_URL}/api/departments${params.toString() ? `?${params}` : ''}`;
        },
        getById: (id)=>`${API_BASE_URL}/api/departments/${id}`,
        create: ()=>`${API_BASE_URL}/api/departments`,
        update: (id)=>`${API_BASE_URL}/api/departments/${id}`,
        delete: (id)=>`${API_BASE_URL}/api/departments/${id}`
    },
    // Students
    students: {
        getAll: (departmentId, search, universityId)=>{
            const params = new URLSearchParams();
            if (departmentId) params.set('departmentId', departmentId.toString());
            if (search) params.set('search', search);
            if (universityId) params.set('universityId', universityId.toString());
            return `${API_BASE_URL}/api/students${params.toString() ? `?${params}` : ''}`;
        },
        getById: (id)=>`${API_BASE_URL}/api/students/${id}`,
        create: ()=>`${API_BASE_URL}/api/students`,
        update: (id)=>`${API_BASE_URL}/api/students/${id}`,
        delete: (id)=>`${API_BASE_URL}/api/students/${id}`
    },
    // Courses
    courses: {
        getAll: (departmentId, search, universityId)=>{
            const params = new URLSearchParams();
            if (departmentId) params.set('departmentId', departmentId.toString());
            if (search) params.set('search', search);
            if (universityId) params.set('universityId', universityId.toString());
            return `${API_BASE_URL}/api/courses${params.toString() ? `?${params}` : ''}`;
        },
        getById: (id)=>`${API_BASE_URL}/api/courses/${id}`,
        create: ()=>`${API_BASE_URL}/api/courses`,
        update: (id)=>`${API_BASE_URL}/api/courses/${id}`,
        delete: (id)=>`${API_BASE_URL}/api/courses/${id}`
    },
    // Faculty
    faculty: {
        getAll: (departmentId, search, universityId)=>{
            const params = new URLSearchParams();
            if (departmentId) params.set('departmentId', departmentId.toString());
            if (search) params.set('search', search);
            if (universityId) params.set('universityId', universityId.toString());
            return `${API_BASE_URL}/api/faculty${params.toString() ? `?${params}` : ''}`;
        },
        getById: (id)=>`${API_BASE_URL}/api/faculty/${id}`,
        create: ()=>`${API_BASE_URL}/api/faculty`,
        update: (id)=>`${API_BASE_URL}/api/faculty/${id}`,
        delete: (id)=>`${API_BASE_URL}/api/faculty/${id}`
    },
    // Subjects
    subjects: {
        getAll: (courseId, facultyId, search, universityId)=>{
            const params = new URLSearchParams();
            if (courseId) params.set('courseId', courseId.toString());
            if (facultyId) params.set('facultyId', facultyId.toString());
            if (search) params.set('search', search);
            if (universityId) params.set('universityId', universityId.toString());
            return `${API_BASE_URL}/api/subjects${params.toString() ? `?${params}` : ''}`;
        },
        getById: (id)=>`${API_BASE_URL}/api/subjects/${id}`,
        create: ()=>`${API_BASE_URL}/api/subjects`,
        update: (id)=>`${API_BASE_URL}/api/subjects/${id}`,
        delete: (id)=>`${API_BASE_URL}/api/subjects/${id}`
    },
    // Classrooms
    classrooms: {
        getAll: (building, search, universityId)=>{
            const params = new URLSearchParams();
            if (building) params.set('building', building);
            if (search) params.set('search', search);
            if (universityId) params.set('universityId', universityId.toString());
            return `${API_BASE_URL}/api/classrooms${params.toString() ? `?${params}` : ''}`;
        },
        getById: (id)=>`${API_BASE_URL}/api/classrooms/${id}`,
        create: ()=>`${API_BASE_URL}/api/classrooms`,
        update: (id)=>`${API_BASE_URL}/api/classrooms/${id}`,
        delete: (id)=>`${API_BASE_URL}/api/classrooms/${id}`
    },
    // Enrollments
    enrollments: {
        getAll: (studentId, courseId, universityId)=>{
            const params = new URLSearchParams();
            if (studentId) params.set('studentId', studentId.toString());
            if (courseId) params.set('courseId', courseId.toString());
            if (universityId) params.set('universityId', universityId.toString());
            return `${API_BASE_URL}/api/enrollments${params.toString() ? `?${params}` : ''}`;
        },
        getById: (id)=>`${API_BASE_URL}/api/enrollments/${id}`,
        create: ()=>`${API_BASE_URL}/api/enrollments`,
        update: (id)=>`${API_BASE_URL}/api/enrollments/${id}`,
        delete: (id)=>`${API_BASE_URL}/api/enrollments/${id}`
    },
    // Schedules
    schedules: {
        getAll: (subjectId, classroomId, day, universityId)=>{
            const params = new URLSearchParams();
            if (subjectId) params.set('subjectId', subjectId.toString());
            if (classroomId) params.set('classroomId', classroomId.toString());
            if (day) params.set('day', day);
            if (universityId) params.set('universityId', universityId.toString());
            return `${API_BASE_URL}/api/schedules${params.toString() ? `?${params}` : ''}`;
        },
        getById: (id)=>`${API_BASE_URL}/api/schedules/${id}`,
        create: ()=>`${API_BASE_URL}/api/schedules`,
        update: (id)=>`${API_BASE_URL}/api/schedules/${id}`,
        delete: (id)=>`${API_BASE_URL}/api/schedules/${id}`
    }
};
async function fetcher(url, options) {
    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
    if (!response.ok) {
        const error = await response.json().catch(()=>({
                error: 'Request failed'
            }));
        throw new Error(error.error || `HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/lib/api.ts [app-ssr] (ecmascript)");
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
            const university = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].universities.create(), {
                method: "POST",
                body: JSON.stringify({
                    name: universityData.name,
                    location: universityData.location,
                    establishedYear: universityData.establishedYear
                })
            });
            const finalUniversityId = university.universityId;
            // Map temp IDs to real IDs
            const departmentIdMap = {};
            const facultyIdMap = {};
            const studentIdMap = {};
            const courseIdMap = {};
            const subjectIdMap = {};
            const classroomIdMap = {};
            // Create departments
            for (const dept of departments){
                const department = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].departments.create(), {
                    method: "POST",
                    body: JSON.stringify({
                        name: dept.name,
                        building: dept.building,
                        universityId: finalUniversityId
                    })
                });
                departmentIdMap[dept.tempId] = department.departmentId;
            }
            // Create faculty
            for (const fac of faculty){
                const facultyMember = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].faculty.create(), {
                    method: "POST",
                    body: JSON.stringify({
                        name: fac.name,
                        designation: fac.designation,
                        email: fac.email,
                        phone: fac.phone,
                        departmentId: departmentIdMap[fac.departmentTempId]
                    })
                });
                facultyIdMap[fac.tempId] = facultyMember.facultyId;
            }
            // Create students
            for (const student of students){
                const newStudent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].students.create(), {
                    method: "POST",
                    body: JSON.stringify({
                        name: student.name,
                        email: student.email,
                        dateOfBirth: student.dateOfBirth || "2000-01-01",
                        gender: student.gender || "Other",
                        phone: student.phone,
                        address: student.address,
                        departmentId: departmentIdMap[student.departmentTempId]
                    })
                });
                studentIdMap[student.tempId] = newStudent.studentId;
            }
            // Create courses
            for (const course of courses){
                const newCourse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].courses.create(), {
                    method: "POST",
                    body: JSON.stringify({
                        courseName: course.courseName,
                        credits: course.credits,
                        semester: course.semester,
                        departmentId: departmentIdMap[course.departmentTempId]
                    })
                });
                courseIdMap[course.tempId] = newCourse.courseId;
            }
            // Create subjects
            for (const subject of subjects){
                const newSubject = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].subjects.create(), {
                    method: "POST",
                    body: JSON.stringify({
                        name: subject.name,
                        credits: subject.credits,
                        courseId: courseIdMap[subject.courseTempId],
                        facultyId: facultyIdMap[subject.facultyTempId]
                    })
                });
                subjectIdMap[subject.tempId] = newSubject.subjectId;
            }
            // Create classrooms
            for (const classroom of classrooms){
                const newClassroom = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].classrooms.create(), {
                    method: "POST",
                    body: JSON.stringify({
                        roomNumber: classroom.roomNumber,
                        building: classroom.building,
                        capacity: classroom.capacity,
                        universityId: finalUniversityId
                    })
                });
                classroomIdMap[classroom.tempId] = newClassroom.classroomId;
            }
            // Create enrollments
            for (const enrollment of enrollments){
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].enrollments.create(), {
                    method: "POST",
                    body: JSON.stringify({
                        studentId: studentIdMap[enrollment.studentTempId],
                        courseId: courseIdMap[enrollment.courseTempId],
                        grade: enrollment.grade || null
                    })
                });
            }
            // Create schedules
            for (const schedule of schedules){
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetcher"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].schedules.create(), {
                    method: "POST",
                    body: JSON.stringify({
                        subjectId: subjectIdMap[schedule.subjectTempId],
                        classroomId: classroomIdMap[schedule.classroomTempId],
                        day: schedule.day,
                        timeSlot: schedule.timeSlot
                    })
                });
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("University registered successfully!");
            router.push(`/?registered=true&universityId=${finalUniversityId}`);
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
                    "data-orchids-id": "app\\register\\university\\page.tsx:437:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:438:12",
                            "data-orchids-name": "div",
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:439:14",
                                    "data-orchids-name": "Label",
                                    children: "University ID"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:440:14",
                                    "data-orchids-name": "Input",
                                    value: universityId || "",
                                    disabled: true
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 438,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:442:12",
                            "data-orchids-name": "div",
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:443:14",
                                    "data-orchids-name": "Label",
                                    children: "University Name"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:444:14",
                                    "data-orchids-name": "Input",
                                    value: universityData.name,
                                    onChange: (e)=>setUniversityData({
                                            ...universityData,
                                            name: e.target.value
                                        }),
                                    placeholder: "e.g., Stanford University"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 442,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:450:12",
                            "data-orchids-name": "div",
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:451:14",
                                    "data-orchids-name": "Label",
                                    children: "Location"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:452:14",
                                    "data-orchids-name": "Input",
                                    value: universityData.location,
                                    onChange: (e)=>setUniversityData({
                                            ...universityData,
                                            location: e.target.value
                                        }),
                                    placeholder: "e.g., Stanford, CA"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 450,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:458:12",
                            "data-orchids-name": "div",
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:459:14",
                                    "data-orchids-name": "Label",
                                    children: "Established Year"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 459,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:460:14",
                                    "data-orchids-name": "Input",
                                    type: "number",
                                    value: universityData.establishedYear,
                                    onChange: (e)=>setUniversityData({
                                            ...universityData,
                                            establishedYear: parseInt(e.target.value)
                                        })
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
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 437,
                    columnNumber: 11
                }, this);
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:471:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:472:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:473:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Departments"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 473,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:474:14@addDepartment",
                                    "data-orchids-name": "Button",
                                    onClick: addDepartment,
                                    size: "sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:475:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 475,
                                            columnNumber: 17
                                        }, this),
                                        " Add Department"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 474,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 472,
                            columnNumber: 13
                        }, this),
                        departments.map((dept, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:479:14@departments",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:480:16@departments",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:481:18@departments",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:482:20@departments",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Department ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:483:20@departments",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeDepartment(dept.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:484:22@departments",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 481,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:487:18@departments",
                                            "data-orchids-name": "Input",
                                            placeholder: "Department Name",
                                            value: dept.name,
                                            onChange: (e)=>updateDepartment(dept.tempId, "name", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 487,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:492:18@departments",
                                            "data-orchids-name": "Input",
                                            placeholder: "Building",
                                            value: dept.building,
                                            onChange: (e)=>updateDepartment(dept.tempId, "building", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 492,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 480,
                                    columnNumber: 17
                                }, this)
                            }, dept.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 479,
                                columnNumber: 15
                            }, this)),
                        departments.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:501:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No departments added yet. Add at least one department to continue."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 501,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 471,
                    columnNumber: 11
                }, this);
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:508:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:509:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:510:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Faculty Members"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:511:14@addFaculty",
                                    "data-orchids-name": "Button",
                                    onClick: addFaculty,
                                    size: "sm",
                                    disabled: departments.length === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:512:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 17
                                        }, this),
                                        " Add Faculty"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 511,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 509,
                            columnNumber: 13
                        }, this),
                        faculty.map((fac, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:516:14@faculty",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:517:16@faculty",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:518:18@faculty",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:519:20@faculty",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Faculty ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:520:20@faculty",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeFaculty(fac.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:521:22@faculty",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 518,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:524:18@faculty",
                                            "data-orchids-name": "Input",
                                            placeholder: "Faculty Name",
                                            value: fac.name,
                                            onChange: (e)=>updateFaculty(fac.tempId, "name", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 524,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:529:18@faculty",
                                            "data-orchids-name": "Input",
                                            placeholder: "Designation",
                                            value: fac.designation,
                                            onChange: (e)=>updateFaculty(fac.tempId, "designation", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 529,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:534:18@faculty",
                                            "data-orchids-name": "Input",
                                            placeholder: "Email",
                                            type: "email",
                                            value: fac.email,
                                            onChange: (e)=>updateFaculty(fac.tempId, "email", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 534,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:540:18@faculty",
                                            "data-orchids-name": "Input",
                                            placeholder: "Phone",
                                            value: fac.phone,
                                            onChange: (e)=>updateFaculty(fac.tempId, "phone", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 540,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:545:18@faculty",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: fac.departmentTempId,
                                            onChange: (e)=>updateFaculty(fac.tempId, "departmentTempId", e.target.value),
                                            children: departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:551:22@departments",
                                                    "data-orchids-name": "option",
                                                    value: dept.tempId,
                                                    children: dept.name
                                                }, dept.tempId, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 551,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 545,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 517,
                                    columnNumber: 17
                                }, this)
                            }, fac.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 516,
                                columnNumber: 15
                            }, this)),
                        departments.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:558:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "Please add departments first."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 558,
                            columnNumber: 15
                        }, this),
                        faculty.length === 0 && departments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:561:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No faculty added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 561,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 508,
                    columnNumber: 11
                }, this);
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:568:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:569:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:570:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Students"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:571:14@addStudent",
                                    "data-orchids-name": "Button",
                                    onClick: addStudent,
                                    size: "sm",
                                    disabled: departments.length === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:572:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 572,
                                            columnNumber: 17
                                        }, this),
                                        " Add Student"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 571,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 569,
                            columnNumber: 13
                        }, this),
                        students.map((student, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:576:14@students",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:577:16@students",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:578:18@students",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:579:20@students",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Student ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:580:20@students",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeStudent(student.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:581:22@students",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 581,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 580,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 578,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:584:18@students",
                                            "data-orchids-name": "Input",
                                            placeholder: "Student Name",
                                            value: student.name,
                                            onChange: (e)=>updateStudent(student.tempId, "name", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 584,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:589:18@students",
                                            "data-orchids-name": "Input",
                                            placeholder: "Email",
                                            type: "email",
                                            value: student.email,
                                            onChange: (e)=>updateStudent(student.tempId, "email", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 589,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:595:18@students",
                                            "data-orchids-name": "Input",
                                            placeholder: "Date of Birth",
                                            type: "date",
                                            value: student.dateOfBirth,
                                            onChange: (e)=>updateStudent(student.tempId, "dateOfBirth", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 595,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:601:18@students",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: student.gender,
                                            onChange: (e)=>updateStudent(student.tempId, "gender", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:606:20@students",
                                                    "data-orchids-name": "option",
                                                    value: "Male",
                                                    children: "Male"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:607:20@students",
                                                    "data-orchids-name": "option",
                                                    value: "Female",
                                                    children: "Female"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:608:20@students",
                                                    "data-orchids-name": "option",
                                                    value: "Other",
                                                    children: "Other"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 608,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 601,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:610:18@students",
                                            "data-orchids-name": "Input",
                                            placeholder: "Address",
                                            value: student.address,
                                            onChange: (e)=>updateStudent(student.tempId, "address", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 610,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:615:18@students",
                                            "data-orchids-name": "Input",
                                            placeholder: "Phone",
                                            value: student.phone,
                                            onChange: (e)=>updateStudent(student.tempId, "phone", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 615,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:620:18@students",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: student.departmentTempId,
                                            onChange: (e)=>updateStudent(student.tempId, "departmentTempId", e.target.value),
                                            children: departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:626:22@departments",
                                                    "data-orchids-name": "option",
                                                    value: dept.tempId,
                                                    children: dept.name
                                                }, dept.tempId, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 620,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 577,
                                    columnNumber: 17
                                }, this)
                            }, student.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 576,
                                columnNumber: 15
                            }, this)),
                        departments.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:633:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "Please add departments first."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 633,
                            columnNumber: 15
                        }, this),
                        students.length === 0 && departments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:636:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No students added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 636,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 568,
                    columnNumber: 11
                }, this);
            case 4:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:643:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:644:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:645:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Courses"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 645,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:646:14@addCourse",
                                    "data-orchids-name": "Button",
                                    onClick: addCourse,
                                    size: "sm",
                                    disabled: departments.length === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:647:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 647,
                                            columnNumber: 17
                                        }, this),
                                        " Add Course"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 646,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 644,
                            columnNumber: 13
                        }, this),
                        courses.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:651:14@courses",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:652:16@courses",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:653:18@courses",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:654:20@courses",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Course ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 654,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:655:20@courses",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeCourse(course.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:656:22@courses",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 653,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:659:18@courses",
                                            "data-orchids-name": "Input",
                                            placeholder: "Course Name",
                                            value: course.courseName,
                                            onChange: (e)=>updateCourse(course.tempId, "courseName", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 659,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:664:18@courses",
                                            "data-orchids-name": "Input",
                                            placeholder: "Credits",
                                            type: "number",
                                            value: course.credits,
                                            onChange: (e)=>updateCourse(course.tempId, "credits", parseInt(e.target.value))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 664,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:670:18@courses",
                                            "data-orchids-name": "Input",
                                            placeholder: "Semester",
                                            type: "number",
                                            value: course.semester,
                                            onChange: (e)=>updateCourse(course.tempId, "semester", parseInt(e.target.value))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 670,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:676:18@courses",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: course.departmentTempId,
                                            onChange: (e)=>updateCourse(course.tempId, "departmentTempId", e.target.value),
                                            children: departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:682:22@departments",
                                                    "data-orchids-name": "option",
                                                    value: dept.tempId,
                                                    children: dept.name
                                                }, dept.tempId, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 676,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 652,
                                    columnNumber: 17
                                }, this)
                            }, course.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 651,
                                columnNumber: 15
                            }, this)),
                        departments.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:689:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "Please add departments first."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 689,
                            columnNumber: 15
                        }, this),
                        courses.length === 0 && departments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:692:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No courses added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 692,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 643,
                    columnNumber: 11
                }, this);
            case 5:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:699:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:700:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:701:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Subjects"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 701,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:702:14@addSubject",
                                    "data-orchids-name": "Button",
                                    onClick: addSubject,
                                    size: "sm",
                                    disabled: courses.length === 0 || faculty.length === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:703:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 703,
                                            columnNumber: 17
                                        }, this),
                                        " Add Subject"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 702,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 700,
                            columnNumber: 13
                        }, this),
                        subjects.map((subject, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:707:14@subjects",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:708:16@subjects",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:709:18@subjects",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:710:20@subjects",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Subject ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:711:20@subjects",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeSubject(subject.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:712:22@subjects",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 712,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 711,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 709,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:715:18@subjects",
                                            "data-orchids-name": "Input",
                                            placeholder: "Subject Name",
                                            value: subject.name,
                                            onChange: (e)=>updateSubject(subject.tempId, "name", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 715,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:720:18@subjects",
                                            "data-orchids-name": "Input",
                                            placeholder: "Credits",
                                            type: "number",
                                            value: subject.credits,
                                            onChange: (e)=>updateSubject(subject.tempId, "credits", parseInt(e.target.value))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 720,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:726:18@subjects",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: subject.courseTempId,
                                            onChange: (e)=>updateSubject(subject.tempId, "courseTempId", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:731:20@subjects",
                                                    "data-orchids-name": "option",
                                                    value: "",
                                                    children: "Select Course"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 731,
                                                    columnNumber: 21
                                                }, this),
                                                courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:733:22@courses",
                                                        "data-orchids-name": "option",
                                                        value: course.tempId,
                                                        children: course.courseName
                                                    }, course.tempId, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 733,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 726,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:736:18@subjects",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: subject.facultyTempId,
                                            onChange: (e)=>updateSubject(subject.tempId, "facultyTempId", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:741:20@subjects",
                                                    "data-orchids-name": "option",
                                                    value: "",
                                                    children: "Select Faculty"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 741,
                                                    columnNumber: 21
                                                }, this),
                                                faculty.map((fac)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:743:22@faculty",
                                                        "data-orchids-name": "option",
                                                        value: fac.tempId,
                                                        children: fac.name
                                                    }, fac.tempId, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 736,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 708,
                                    columnNumber: 17
                                }, this)
                            }, subject.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 707,
                                columnNumber: 15
                            }, this)),
                        (courses.length === 0 || faculty.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:750:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "Please add courses and faculty first."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 750,
                            columnNumber: 15
                        }, this),
                        subjects.length === 0 && courses.length > 0 && faculty.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:753:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No subjects added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 753,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 699,
                    columnNumber: 11
                }, this);
            case 6:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:760:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:761:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:762:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Classrooms"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 762,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:763:14@addClassroom",
                                    "data-orchids-name": "Button",
                                    onClick: addClassroom,
                                    size: "sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:764:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 764,
                                            columnNumber: 17
                                        }, this),
                                        " Add Classroom"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 763,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 761,
                            columnNumber: 13
                        }, this),
                        classrooms.map((classroom, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:768:14@classrooms",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:769:16@classrooms",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:770:18@classrooms",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:771:20@classrooms",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Classroom ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:772:20@classrooms",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeClassroom(classroom.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:773:22@classrooms",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 773,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 772,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 770,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:776:18@classrooms",
                                            "data-orchids-name": "Input",
                                            placeholder: "Room Number",
                                            value: classroom.roomNumber,
                                            onChange: (e)=>updateClassroom(classroom.tempId, "roomNumber", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 776,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:781:18@classrooms",
                                            "data-orchids-name": "Input",
                                            placeholder: "Building",
                                            value: classroom.building,
                                            onChange: (e)=>updateClassroom(classroom.tempId, "building", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 781,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:786:18@classrooms",
                                            "data-orchids-name": "Input",
                                            placeholder: "Capacity",
                                            type: "number",
                                            value: classroom.capacity,
                                            onChange: (e)=>updateClassroom(classroom.tempId, "capacity", parseInt(e.target.value))
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 786,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 769,
                                    columnNumber: 17
                                }, this)
                            }, classroom.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 768,
                                columnNumber: 15
                            }, this)),
                        classrooms.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:796:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No classrooms added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 796,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 760,
                    columnNumber: 11
                }, this);
            case 7:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:803:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:804:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:805:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Enrollments"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 805,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:806:14@addEnrollment",
                                    "data-orchids-name": "Button",
                                    onClick: addEnrollment,
                                    size: "sm",
                                    disabled: students.length === 0 || courses.length === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:807:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 807,
                                            columnNumber: 17
                                        }, this),
                                        " Add Enrollment"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 806,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 804,
                            columnNumber: 13
                        }, this),
                        enrollments.map((enrollment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:811:14@enrollments",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:812:16@enrollments",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:813:18@enrollments",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:814:20@enrollments",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Enrollment ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 814,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:815:20@enrollments",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeEnrollment(enrollment.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:816:22@enrollments",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 816,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 815,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 813,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:819:18@enrollments",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: enrollment.studentTempId,
                                            onChange: (e)=>updateEnrollment(enrollment.tempId, "studentTempId", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:824:20@enrollments",
                                                    "data-orchids-name": "option",
                                                    value: "",
                                                    children: "Select Student"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 824,
                                                    columnNumber: 21
                                                }, this),
                                                students.map((student)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:826:22@students",
                                                        "data-orchids-name": "option",
                                                        value: student.tempId,
                                                        children: student.name
                                                    }, student.tempId, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 826,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 819,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:829:18@enrollments",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: enrollment.courseTempId,
                                            onChange: (e)=>updateEnrollment(enrollment.tempId, "courseTempId", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:834:20@enrollments",
                                                    "data-orchids-name": "option",
                                                    value: "",
                                                    children: "Select Course"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 834,
                                                    columnNumber: 21
                                                }, this),
                                                courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:836:22@courses",
                                                        "data-orchids-name": "option",
                                                        value: course.tempId,
                                                        children: course.courseName
                                                    }, course.tempId, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 836,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 829,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:839:18@enrollments",
                                            "data-orchids-name": "Input",
                                            placeholder: "Grade (optional)",
                                            value: enrollment.grade,
                                            onChange: (e)=>updateEnrollment(enrollment.tempId, "grade", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 839,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 812,
                                    columnNumber: 17
                                }, this)
                            }, enrollment.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 811,
                                columnNumber: 15
                            }, this)),
                        (students.length === 0 || courses.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:848:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "Please add students and courses first."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 848,
                            columnNumber: 15
                        }, this),
                        enrollments.length === 0 && students.length > 0 && courses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:851:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No enrollments added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 851,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 803,
                    columnNumber: 11
                }, this);
            case 8:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:858:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:859:12",
                            "data-orchids-name": "div",
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:860:14",
                                    "data-orchids-name": "h3",
                                    className: "text-lg font-semibold",
                                    children: "Schedules"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 860,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\register\\university\\page.tsx:861:14@addSchedule",
                                    "data-orchids-name": "Button",
                                    onClick: addSchedule,
                                    size: "sm",
                                    disabled: subjects.length === 0 || classrooms.length === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:862:16",
                                            "data-orchids-name": "Plus",
                                            className: "w-4 h-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 862,
                                            columnNumber: 17
                                        }, this),
                                        " Add Schedule"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 861,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 859,
                            columnNumber: 13
                        }, this),
                        schedules.map((schedule, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "app\\register\\university\\page.tsx:866:14@schedules",
                                "data-orchids-name": "Card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    "data-map-index": index,
                                    "data-orchids-id": "app\\register\\university\\page.tsx:867:16@schedules",
                                    "data-orchids-name": "CardContent",
                                    className: "pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:868:18@schedules",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:869:20@schedules",
                                                    "data-orchids-name": "span",
                                                    className: "font-medium",
                                                    children: [
                                                        "Schedule ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 869,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:870:20@schedules",
                                                    "data-orchids-name": "Button",
                                                    onClick: ()=>removeSchedule(schedule.tempId),
                                                    size: "sm",
                                                    variant: "destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:871:22@schedules",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 871,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 870,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 868,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:874:18@schedules",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: schedule.subjectTempId,
                                            onChange: (e)=>updateSchedule(schedule.tempId, "subjectTempId", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:879:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "",
                                                    children: "Select Subject"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 879,
                                                    columnNumber: 21
                                                }, this),
                                                subjects.map((subject)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:881:22@subjects",
                                                        "data-orchids-name": "option",
                                                        value: subject.tempId,
                                                        children: subject.name
                                                    }, subject.tempId, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 881,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 874,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:884:18@schedules",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: schedule.classroomTempId,
                                            onChange: (e)=>updateSchedule(schedule.tempId, "classroomTempId", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:889:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "",
                                                    children: "Select Classroom"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 21
                                                }, this),
                                                classrooms.map((classroom)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:891:22@classrooms",
                                                        "data-orchids-name": "option",
                                                        value: classroom.tempId,
                                                        children: [
                                                            classroom.roomNumber,
                                                            " - ",
                                                            classroom.building
                                                        ]
                                                    }, classroom.tempId, true, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 884,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:896:18@schedules",
                                            "data-orchids-name": "select",
                                            className: "w-full p-2 border rounded-md",
                                            value: schedule.day,
                                            onChange: (e)=>updateSchedule(schedule.tempId, "day", e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:901:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "Monday",
                                                    children: "Monday"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 901,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:902:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "Tuesday",
                                                    children: "Tuesday"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 902,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:903:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "Wednesday",
                                                    children: "Wednesday"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 903,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:904:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "Thursday",
                                                    children: "Thursday"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 904,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:905:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "Friday",
                                                    children: "Friday"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 905,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "app\\register\\university\\page.tsx:906:20@schedules",
                                                    "data-orchids-name": "option",
                                                    value: "Saturday",
                                                    children: "Saturday"
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                    lineNumber: 906,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 896,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "app\\register\\university\\page.tsx:908:18@schedules",
                                            "data-orchids-name": "Input",
                                            placeholder: "Time Slot (e.g., 09:00-10:00)",
                                            value: schedule.timeSlot,
                                            onChange: (e)=>updateSchedule(schedule.tempId, "timeSlot", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 908,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                    lineNumber: 867,
                                    columnNumber: 17
                                }, this)
                            }, schedule.tempId, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 866,
                                columnNumber: 15
                            }, this)),
                        (subjects.length === 0 || classrooms.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:917:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "Please add subjects and classrooms first."
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 917,
                            columnNumber: 15
                        }, this),
                        schedules.length === 0 && subjects.length > 0 && classrooms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:920:14",
                            "data-orchids-name": "p",
                            className: "text-center text-muted-foreground py-8",
                            children: "No schedules added yet. (Optional)"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 920,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 858,
                    columnNumber: 11
                }, this);
            case 9:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "app\\register\\university\\page.tsx:927:10",
                    "data-orchids-name": "div",
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            "data-orchids-id": "app\\register\\university\\page.tsx:928:12",
                            "data-orchids-name": "h3",
                            className: "text-lg font-semibold mb-4",
                            children: "Review Your Registration"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 928,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            "data-orchids-id": "app\\register\\university\\page.tsx:929:12",
                            "data-orchids-name": "Card",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "app\\register\\university\\page.tsx:930:14",
                                "data-orchids-name": "CardContent",
                                className: "pt-6 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:931:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:931:21",
                                                "data-orchids-name": "strong",
                                                children: "University:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 931,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            universityData.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 931,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:932:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:932:21",
                                                "data-orchids-name": "strong",
                                                children: "Location:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 932,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            universityData.location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 932,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:933:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:933:21",
                                                "data-orchids-name": "strong",
                                                children: "Established:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 933,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            universityData.establishedYear
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 933,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:934:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:934:21",
                                                "data-orchids-name": "strong",
                                                children: "Departments:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 934,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            departments.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 934,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:935:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:935:21",
                                                "data-orchids-name": "strong",
                                                children: "Faculty:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 935,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            faculty.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 935,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:936:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:936:21",
                                                "data-orchids-name": "strong",
                                                children: "Students:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 936,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            students.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 936,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:937:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:937:21",
                                                "data-orchids-name": "strong",
                                                children: "Courses:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 937,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            courses.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 937,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:938:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:938:21",
                                                "data-orchids-name": "strong",
                                                children: "Subjects:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 938,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            subjects.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 938,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:939:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:939:21",
                                                "data-orchids-name": "strong",
                                                children: "Classrooms:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 939,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            classrooms.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 939,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:940:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:940:21",
                                                "data-orchids-name": "strong",
                                                children: "Enrollments:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 940,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            enrollments.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 940,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:941:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:941:21",
                                                "data-orchids-name": "strong",
                                                children: "Schedules:"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 941,
                                                columnNumber: 104
                                            }, this),
                                            " ",
                                            schedules.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 941,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 930,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                            lineNumber: 929,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                    lineNumber: 927,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "app\\register\\university\\page.tsx:953:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-purple-950 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "app\\register\\university\\page.tsx:954:6",
            "data-orchids-name": "div",
            className: "max-w-4xl mx-auto py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                "data-orchids-id": "app\\register\\university\\page.tsx:955:8",
                "data-orchids-name": "Card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        "data-orchids-id": "app\\register\\university\\page.tsx:956:10",
                        "data-orchids-name": "CardHeader",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "app\\register\\university\\page.tsx:957:12",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:958:14",
                                        "data-orchids-name": "div",
                                        className: "w-12 h-12 rounded-full bg-primary flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:959:16",
                                            "data-orchids-name": "GraduationCap",
                                            className: "w-6 h-6 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 959,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 958,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:961:14",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:962:16",
                                                "data-orchids-name": "CardTitle",
                                                className: "text-2xl",
                                                children: "Register New University"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 962,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:963:16",
                                                "data-orchids-name": "CardDescription",
                                                children: "Set up your university with all necessary details"
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 963,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 961,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 957,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "app\\register\\university\\page.tsx:968:12",
                                "data-orchids-name": "div",
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:969:14",
                                        "data-orchids-name": "div",
                                        className: "flex items-center justify-between mb-2",
                                        children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "app\\register\\university\\page.tsx:971:18@steps",
                                                "data-orchids-name": "div",
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:972:20@steps",
                                                        "data-orchids-name": "div",
                                                        className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${index < currentStep ? "bg-primary text-white" : index === currentStep ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`,
                                                        children: index < currentStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            "data-map-index": index,
                                                            "data-orchids-id": "app\\register\\university\\page.tsx:977:45@steps",
                                                            "data-orchids-name": "Check",
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                            lineNumber: 977,
                                                            columnNumber: 46
                                                        }, this) : index + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 972,
                                                        columnNumber: 21
                                                    }, this),
                                                    index < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "app\\register\\university\\page.tsx:980:22@steps",
                                                        "data-orchids-name": "div",
                                                        className: `w-8 h-1 ${index < currentStep ? "bg-primary" : "bg-muted"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                        lineNumber: 980,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 971,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 969,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:985:14",
                                        "data-orchids-name": "div",
                                        className: "text-sm text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:986:16",
                                                "data-orchids-name": "div",
                                                className: "font-medium",
                                                children: steps[currentStep].title
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 986,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "app\\register\\university\\page.tsx:987:16",
                                                "data-orchids-name": "div",
                                                className: "text-muted-foreground",
                                                children: steps[currentStep].description
                                            }, void 0, false, {
                                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                                lineNumber: 987,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 985,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 968,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                        lineNumber: 956,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        "data-orchids-id": "app\\register\\university\\page.tsx:992:10",
                        "data-orchids-name": "CardContent",
                        className: "min-h-[400px]",
                        children: renderStepContent()
                    }, void 0, false, {
                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                        lineNumber: 992,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "app\\register\\university\\page.tsx:996:10",
                        "data-orchids-name": "div",
                        className: "p-6 border-t flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "app\\register\\university\\page.tsx:997:12",
                                "data-orchids-name": "Button",
                                variant: "outline",
                                onClick: ()=>setCurrentStep(Math.max(0, currentStep - 1)),
                                disabled: currentStep === 0 || isLoading,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:1002:14",
                                        "data-orchids-name": "ChevronLeft",
                                        className: "w-4 h-4 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 1002,
                                        columnNumber: 15
                                    }, this),
                                    " Previous"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 997,
                                columnNumber: 13
                            }, this),
                            currentStep < steps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "app\\register\\university\\page.tsx:1006:14",
                                "data-orchids-name": "Button",
                                onClick: ()=>setCurrentStep(currentStep + 1),
                                disabled: !canProceedToNext() || isLoading,
                                children: [
                                    "Next ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        "data-orchids-id": "app\\register\\university\\page.tsx:1010:21",
                                        "data-orchids-name": "ChevronRight",
                                        className: "w-4 h-4 ml-1"
                                    }, void 0, false, {
                                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                        lineNumber: 1010,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 1006,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "app\\register\\university\\page.tsx:1013:14@handleSubmit",
                                "data-orchids-name": "Button",
                                onClick: handleSubmit,
                                disabled: isLoading,
                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            "data-orchids-id": "app\\register\\university\\page.tsx:1016:20",
                                            "data-orchids-name": "Loader2",
                                            className: "mr-2 h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                            lineNumber: 1016,
                                            columnNumber: 21
                                        }, this),
                                        "Registering..."
                                    ]
                                }, void 0, true) : "Complete Registration"
                            }, void 0, false, {
                                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                                lineNumber: 1013,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                        lineNumber: 996,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
                lineNumber: 955,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
            lineNumber: 954,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/app/register/university/page.tsx",
        lineNumber: 953,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=university-management-system_frontend_6f6f6045._.js.map