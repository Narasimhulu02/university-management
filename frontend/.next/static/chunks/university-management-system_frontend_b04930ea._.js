(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/university-management-system/frontend/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/university-management-system/frontend/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-orchids-id": "components\\ui\\button.tsx:51:4",
        "data-orchids-name": "Comp",
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/university-management-system/frontend/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        "data-orchids-id": "components\\ui\\input.tsx:7:4",
        "data-orchids-name": "input",
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/university-management-system/frontend/components/ui/label.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "components\\ui\\label.tsx:13:4",
        "data-orchids-name": "LabelPrimitive.Root",
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/university-management-system/frontend/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:7:4",
        "data-orchids-name": "div",
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:20:4",
        "data-orchids-name": "div",
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:33:4",
        "data-orchids-name": "div",
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:43:4",
        "data-orchids-name": "div",
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:53:4",
        "data-orchids-name": "div",
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:66:4",
        "data-orchids-name": "div",
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\card.tsx:76:4",
        "data-orchids-name": "div",
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/university-management-system/frontend/components/ui/dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "components\\ui\\dialog.tsx:12:9",
        "data-orchids-name": "DialogPrimitive.Root",
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-orchids-id": "components\\ui\\dialog.tsx:18:9",
        "data-orchids-name": "DialogPrimitive.Trigger",
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-orchids-id": "components\\ui\\dialog.tsx:24:9",
        "data-orchids-name": "DialogPrimitive.Portal",
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-orchids-id": "components\\ui\\dialog.tsx:30:9",
        "data-orchids-name": "DialogPrimitive.Close",
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-orchids-id": "components\\ui\\dialog.tsx:38:4",
        "data-orchids-name": "DialogPrimitive.Overlay",
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-orchids-id": "components\\ui\\dialog.tsx:58:4",
        "data-orchids-name": "DialogPortal",
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {
                "data-orchids-id": "components\\ui\\dialog.tsx:59:6",
                "data-orchids-name": "DialogOverlay"
            }, void 0, false, {
                fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-orchids-id": "components\\ui\\dialog.tsx:60:6",
                "data-orchids-name": "DialogPrimitive.Content",
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-orchids-id": "components\\ui\\dialog.tsx:70:10",
                        "data-orchids-name": "DialogPrimitive.Close",
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                "data-orchids-id": "components\\ui\\dialog.tsx:74:12",
                                "data-orchids-name": "XIcon"
                            }, void 0, false, {
                                fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "components\\ui\\dialog.tsx:75:12",
                                "data-orchids-name": "span",
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\dialog.tsx:85:4",
        "data-orchids-name": "div",
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "components\\ui\\dialog.tsx:95:4",
        "data-orchids-name": "div",
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-orchids-id": "components\\ui\\dialog.tsx:111:4",
        "data-orchids-name": "DialogPrimitive.Title",
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-orchids-id": "components\\ui\\dialog.tsx:124:4",
        "data-orchids-name": "DialogPrimitive.Description",
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/university-management-system/frontend/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CoursesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/frontend/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/university-management-system/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function CoursesPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const universityId = params.university_id;
    const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchKey, setSearchKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteDialog, setDeleteDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        courseId: null
    });
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        courseName: "",
        credits: "",
        semester: "",
        departmentId: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoursesPage.useEffect": ()=>{
            const storedUniversityId = localStorage.getItem("university_id");
            if (!storedUniversityId || storedUniversityId !== universityId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unauthorized. Please login again.");
                router.push("/");
                return;
            }
            fetchCourses();
        }
    }["CoursesPage.useEffect"], [
        universityId,
        router
    ]);
    const fetchCourses = async ()=>{
        try {
            setIsLoading(true);
            const response = await fetch(`/api/courses?universityId=${universityId}&limit=100`);
            const data = await response.json();
            setCourses(data || []);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load courses");
        } finally{
            setIsLoading(false);
        }
    };
    const handleSearch = async ()=>{
        if (!searchKey.trim()) {
            fetchCourses();
            return;
        }
        try {
            setIsLoading(true);
            const response = await fetch(`/api/courses?universityId=${universityId}&search=${searchKey}&limit=100`);
            const data = await response.json();
            setCourses(data || []);
            __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Found ${data?.length || 0} course(s)`);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Search failed");
        } finally{
            setIsLoading(false);
        }
    };
    const handleAdd = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch("/api/course", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    courseName: formData.courseName,
                    credits: parseInt(formData.credits),
                    semester: parseInt(formData.semester),
                    departmentId: parseInt(formData.departmentId)
                })
            });
            if (response.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Course added successfully");
                setShowAddForm(false);
                setFormData({
                    courseName: "",
                    credits: "",
                    semester: "",
                    departmentId: ""
                });
                fetchCourses();
            } else {
                const data = await response.json();
                __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data.error || "Failed to add course");
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to add course");
        }
    };
    const handleDelete = async (courseId)=>{
        setDeleteDialog({
            open: true,
            courseId
        });
    };
    const confirmDelete = async ()=>{
        if (!deleteDialog.courseId) return;
        try {
            const response = await fetch(`/api/course?id=${deleteDialog.courseId}`, {
                method: "DELETE"
            });
            const data = await response.json();
            if (response.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Course deleted successfully");
                fetchCourses();
            } else {
                // Display the specific error message from the API
                __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data.error || "Failed to delete course");
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete course");
        } finally{
            setDeleteDialog({
                open: false,
                courseId: null
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:140:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:141:6",
                "data-orchids-name": "div",
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:142:8",
                        "data-orchids-name": "div",
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:143:10",
                            "data-orchids-name": "Link",
                            href: `/admin/${universityId}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:144:12",
                                "data-orchids-name": "Button",
                                variant: "ghost",
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:145:14",
                                        "data-orchids-name": "ArrowLeft",
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    "Back to Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:151:8",
                        "data-orchids-name": "Card",
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:152:10",
                                "data-orchids-name": "CardHeader",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:153:12",
                                        "data-orchids-name": "CardTitle",
                                        children: "Course Management"
                                    }, void 0, false, {
                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:154:12",
                                        "data-orchids-name": "CardDescription",
                                        children: "Add, search, and delete course records"
                                    }, void 0, false, {
                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:156:10",
                                "data-orchids-name": "CardContent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:157:12",
                                        "data-orchids-name": "div",
                                        className: "flex gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:158:14",
                                                "data-orchids-name": "div",
                                                className: "flex-1 flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:159:16",
                                                        "data-orchids-name": "Input",
                                                        placeholder: "Search by Course ID...",
                                                        value: searchKey,
                                                        onChange: (e)=>setSearchKey(e.target.value),
                                                        onKeyDown: (e)=>e.key === "Enter" && handleSearch()
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:165:16@handleSearch",
                                                        "data-orchids-name": "Button",
                                                        onClick: handleSearch,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:166:18",
                                                                "data-orchids-name": "Search",
                                                                className: "w-4 h-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Search"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:170:14",
                                                "data-orchids-name": "Button",
                                                onClick: ()=>setShowAddForm(!showAddForm),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:171:16",
                                                        "data-orchids-name": "Plus",
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Add Course"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:177:14@handleAdd",
                                        "data-orchids-name": "form",
                                        onSubmit: handleAdd,
                                        className: "border rounded-lg p-4 mb-4 space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:178:16",
                                                "data-orchids-name": "div",
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:179:18",
                                                        "data-orchids-name": "div",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:180:20",
                                                                "data-orchids-name": "Label",
                                                                children: "Course Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:181:20",
                                                                "data-orchids-name": "Input",
                                                                required: true,
                                                                value: formData.courseName,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        courseName: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:187:18",
                                                        "data-orchids-name": "div",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:188:20",
                                                                "data-orchids-name": "Label",
                                                                children: "Credits"
                                                            }, void 0, false, {
                                                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:189:20",
                                                                "data-orchids-name": "Input",
                                                                required: true,
                                                                type: "number",
                                                                value: formData.credits,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        credits: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:196:18",
                                                        "data-orchids-name": "div",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:197:20",
                                                                "data-orchids-name": "Label",
                                                                children: "Semester"
                                                            }, void 0, false, {
                                                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:198:20",
                                                                "data-orchids-name": "Input",
                                                                required: true,
                                                                type: "number",
                                                                value: formData.semester,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        semester: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:205:18",
                                                        "data-orchids-name": "div",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:206:20",
                                                                "data-orchids-name": "Label",
                                                                children: "Department ID"
                                                            }, void 0, false, {
                                                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:207:20",
                                                                "data-orchids-name": "Input",
                                                                required: true,
                                                                type: "number",
                                                                value: formData.departmentId,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        departmentId: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:215:16",
                                                "data-orchids-name": "div",
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:216:18",
                                                        "data-orchids-name": "Button",
                                                        type: "submit",
                                                        children: "Add Course"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:217:18",
                                                        "data-orchids-name": "Button",
                                                        type: "button",
                                                        variant: "outline",
                                                        onClick: ()=>setShowAddForm(false),
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:227:10",
                        "data-orchids-name": "div",
                        className: "flex justify-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:228:12",
                            "data-orchids-name": "Loader2",
                            className: "w-8 h-8 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:231:10",
                        "data-orchids-name": "div",
                        className: "grid gap-4",
                        children: [
                            courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:233:14@courses",
                                    "data-orchids-name": "Card",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:234:16@courses",
                                        "data-orchids-name": "CardContent",
                                        className: "pt-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:235:18@courses",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:236:20@courses",
                                                    "data-orchids-name": "div",
                                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:237:22@courses",
                                                            "data-orchids-name": "div",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:238:24@courses",
                                                                    "data-orchids-name": "p",
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "Course ID"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                    lineNumber: 238,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:239:24@courses",
                                                                    "data-orchids-name": "p",
                                                                    className: "font-semibold",
                                                                    children: course.courseId
                                                                }, void 0, false, {
                                                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:241:22@courses",
                                                            "data-orchids-name": "div",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:242:24@courses",
                                                                    "data-orchids-name": "p",
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "Course Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:243:24@courses",
                                                                    "data-orchids-name": "p",
                                                                    className: "font-semibold",
                                                                    children: course.courseName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:245:22@courses",
                                                            "data-orchids-name": "div",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:246:24@courses",
                                                                    "data-orchids-name": "p",
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "Credits"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:247:24@courses",
                                                                    "data-orchids-name": "p",
                                                                    className: "font-semibold",
                                                                    children: course.credits
                                                                }, void 0, false, {
                                                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:249:22@courses",
                                                            "data-orchids-name": "div",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:250:24@courses",
                                                                    "data-orchids-name": "p",
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "Semester"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:251:24@courses",
                                                                    "data-orchids-name": "p",
                                                                    className: "font-semibold",
                                                                    children: course.semester
                                                                }, void 0, false, {
                                                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:253:22@courses",
                                                            "data-orchids-name": "div",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:254:24@courses",
                                                                    "data-orchids-name": "p",
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "Department ID"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:255:24@courses",
                                                                    "data-orchids-name": "p",
                                                                    className: "font-semibold",
                                                                    children: course.departmentId
                                                                }, void 0, false, {
                                                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:258:20@courses",
                                                    "data-orchids-name": "Button",
                                                    variant: "destructive",
                                                    size: "sm",
                                                    onClick: ()=>handleDelete(course.courseId),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:263:22@courses",
                                                        "data-orchids-name": "Trash2",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this)
                                }, course.courseId, false, {
                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this)),
                            courses.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:270:14",
                                "data-orchids-name": "p",
                                className: "text-center text-muted-foreground py-8",
                                children: "No courses found"
                            }, void 0, false, {
                                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                lineNumber: 270,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:276:6",
                "data-orchids-name": "Dialog",
                open: deleteDialog.open,
                onOpenChange: (open)=>setDeleteDialog({
                        open,
                        courseId: null
                    }),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:277:8",
                    "data-orchids-name": "DialogContent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:278:10",
                            "data-orchids-name": "DialogHeader",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:279:12",
                                    "data-orchids-name": "DialogTitle",
                                    children: "Delete Course"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:280:12",
                                    "data-orchids-name": "DialogDescription",
                                    children: [
                                        "Are you sure you want to delete course ID ",
                                        deleteDialog.courseId,
                                        "? This action cannot be undone."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:284:10",
                            "data-orchids-name": "DialogFooter",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:285:12",
                                    "data-orchids-name": "Button",
                                    variant: "outline",
                                    onClick: ()=>setDeleteDialog({
                                            open: false,
                                            courseId: null
                                        }),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "app\\admin\\[university_id]\\courses\\page.tsx:288:12@confirmDelete",
                                    "data-orchids-name": "Button",
                                    variant: "destructive",
                                    onClick: confirmDelete,
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/university-management-system/frontend/app/admin/[university_id]/courses/page.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s(CoursesPage, "ph2n03wB5niURPvCMo+8MqETB68=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$university$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CoursesPage;
var _c;
__turbopack_context__.k.register(_c, "CoursesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=university-management-system_frontend_b04930ea._.js.map