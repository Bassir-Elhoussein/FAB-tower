(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/fabtower/code/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Header() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            label: 'Accueil',
            href: '/'
        },
        {
            label: 'À Propos',
            href: '/about'
        },
        {
            label: 'Produits',
            href: '/products'
        },
        {
            label: 'Contact',
            href: '/contact'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-white border-b border-border shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "container-wide flex items-center justify-between h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2 font-bold text-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-10 h-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo2.png",
                                    alt: "Fab Tower Logo",
                                    fill: true,
                                    className: "object-contain rounded-sm"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-foreground",
                                children: "FAB TOWER"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "text-foreground hover:text-primary transition-colors font-medium",
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "mailto:fabtower.contact@gmail.com",
                        className: "hidden md:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium",
                        children: "Nous Contacter"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden p-2 hover:bg-secondary rounded-md transition-colors",
                        onClick: ()=>setIsMenuOpen(!isMenuOpen),
                        "aria-label": "Toggle menu",
                        children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                            lineNumber: 62,
                            columnNumber: 27
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                            lineNumber: 62,
                            columnNumber: 45
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden bg-secondary border-t border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "container-wide py-4 flex flex-col gap-4",
                    children: [
                        navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "text-foreground hover:text-primary transition-colors font-medium py-2",
                                onClick: ()=>setIsMenuOpen(false),
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:fabtower.contact@gmail.com",
                            className: "px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium text-center",
                            children: "Nous Contacter"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/header.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Header, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
;
function Footer() {
    const currentYear = new Date().getFullYear();
    const phoneNumber = "212661573626";
    const instagramHandle = "fab_tower" // Replace with your actual Instagram handle
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-primary text-primary-foreground mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-wide pt-16 pb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-5 gap-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "flex items-center gap-2 font-bold text-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-10 h-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/logo2.png",
                                                    alt: "Fab Tower Logo",
                                                    fill: true,
                                                    className: "object-contain rounded-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                    lineNumber: 19,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                lineNumber: 18,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 17,
                                            columnNumber: 15
                                        }, this),
                                        "FAB TOWER"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm opacity-90",
                                    children: "Fournisseur premium de composants industriels et de solutions mécaniques au Maroc."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Liens Rapides"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:opacity-80 transition-opacity",
                                                children: "Accueil"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "hover:opacity-80 transition-opacity",
                                                children: "À Propos"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products",
                                                className: "hover:opacity-80 transition-opacity",
                                                children: "Produits"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "hover:opacity-80 transition-opacity",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Produits"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products#bearings",
                                                className: "hover:opacity-80 transition-opacity",
                                                children: "Roulements"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products#springs",
                                                className: "hover:opacity-80 transition-opacity",
                                                children: "Ressorts"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products#mechanical",
                                                className: "hover:opacity-80 transition-opacity",
                                                children: "Pièces Mécaniques"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products#seals",
                                                className: "hover:opacity-80 transition-opacity",
                                                children: "Joints d'Huile"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 18,
                                                    className: "flex-shrink-0 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "77 Rue Mohamed Smiha, 10ème étage, Apt N°57, Casablanca"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:+${phoneNumber}`,
                                                    className: "hover:opacity-80 transition-opacity",
                                                    children: "+212 661 573626"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:fabtower.contact@gmail.com",
                                                    className: "hover:opacity-80 transition-opacity",
                                                    children: "fabtower.contact@gmail.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Nous Suivre"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://instagram.com/${instagramHandle}`,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-center gap-3 hover:opacity-80 transition-opacity",
                                                "aria-label": "Instagram",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Instagram"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://wa.me/${phoneNumber}`,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-center gap-3 hover:opacity-80 transition-opacity",
                                                "aria-label": "WhatsApp",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        fill: "#ffffff",
                                                        width: "24px",
                                                        height: "24px",
                                                        viewBox: "0 0 32 32",
                                                        version: "1.1",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        stroke: "#ffffff",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                id: "SVGRepo_bgCarrier",
                                                                strokeWidth: "0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 152
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                id: "SVGRepo_tracerCarrier",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 198
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                id: "SVGRepo_iconCarrier",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                                        children: "whatsapp"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 22
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " "
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "WhatsApp"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-primary-foreground/20 pt-5 text-center text-sm opacity-75",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "© ",
                            currentYear,
                            " FAB TOWER. Tous droits réservés. Composants Industriels & Solutions Mécaniques."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function WhatsAppButton() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const whatsappNumber = '212661573626'; // Replace with your WhatsApp number
    const message = 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95",
                "aria-label": "Open WhatsApp chat",
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-24 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-green-500 text-white p-4 rounded-t-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg",
                                children: "Chat with Fab Tower Suport Team"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-green-100",
                                children: "We typically reply in minutes"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 text-sm mb-4",
                            children: "👋 Hi there! How can we help you today?"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: whatsappUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    className: "w-5 h-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                "Open WhatsApp"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-30",
                onClick: ()=>setIsOpen(false),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(WhatsAppButton, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = WhatsAppButton;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhoneButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PhoneButton() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const phoneNumber = '+212661573626'; // Replace with your phone number
    const phoneUrl = `tel:${phoneNumber}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "fixed bottom-28 right-6 z-40 flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95",
                "aria-label": "Call us",
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-48 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-500 text-white p-4 rounded-t-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg",
                                children: "Call us"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-blue-100",
                                children: "We're available to help"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 text-sm mb-4",
                            children: "📞 Ready to speak with our team? Give us a call!"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: phoneUrl,
                            className: "flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                    className: "w-5 h-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this),
                                "Call Now"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-30",
                onClick: ()=>setIsOpen(false),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(PhoneButton, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = PhoneButton;
var _c;
__turbopack_context__.k.register(_c, "PhoneButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmailButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function EmailButton() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const email = 'fabtower.contact@gmail.com'; // Replace with your email
    const subject = 'Inquiry from Website';
    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "fixed bottom-50 right-6 z-40 flex items-center justify-center w-14 h-14 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95",
                "aria-label": "Send us an email",
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-70 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-500 text-white p-4 rounded-t-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg",
                                children: "Email us"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-100",
                                children: "We'll get back to you soon"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 text-sm mb-4",
                            children: "✉️ Send us an email and we'll respond within 24 hours."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: emailUrl,
                            className: "flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                    className: "w-5 h-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                "Send Email"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-30",
                onClick: ()=>setIsOpen(false),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(EmailButton, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = EmailButton;
var _c;
__turbopack_context__.k.register(_c, "EmailButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/fabtower/code/lib/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "productDetails",
    ()=>productDetails,
    "products",
    ()=>products
]);
const categories = [
    {
        id: 'all',
        title: 'Tous les Produits',
        description: 'Tous les produits',
        label: 'Tous'
    },
    {
        id: 'bearings',
        title: 'Roulements',
        description: `
  <p>Découvrez une large sélection de roulements industriels de haute qualité, soigneusement choisis parmi les meilleures marques internationales de bearings. Nous proposons des produits fiables, performants et durables, adaptés aux applications mécaniques, industrielles et agricoles.</p>

  <p>Nous distribuons exclusivement des marques mondiales reconnues pour leur excellence :</p>

  <ul>
    <li><strong>SKF (Suède)</strong> : leader mondial des roulements, réputé pour sa précision, sa durabilité et ses solutions techniques avancées.</li>
    <li><strong>FAG – Schaeffler (Allemagne)</strong> : référence incontournable pour les roulements haute performance utilisés dans les environnements industriels exigeants.</li>
    <li><strong>Timken (États-Unis)</strong> : spécialiste des roulements coniques, idéal pour les charges lourdes et les conditions de fonctionnement difficiles.</li>
    <li><strong>NSK (Japon)</strong> : expert dans les roulements haute précision, offrant une fiabilité exceptionnelle et une excellente résistance aux vitesses élevées.</li>
    <li><strong>NTN (Japon)</strong> : marque reconnue pour la qualité constante de ses roulements, son large choix de modèles et son rapport qualité/prix avantageux.</li>
  </ul>

  <p>Grâce à cette sélection rigoureuse, nous garantissons à nos clients des roulements fiables, performants et parfaitement adaptés aux besoins des professionnels.</p>
`,
        label: 'Roulements',
        subcategories: [
            {
                id: 'roller-bearings',
                label: 'Roulements à rouleaux'
            },
            {
                id: 'bearing-units',
                label: 'Unité de roulements'
            },
            {
                id: 'ball-bearings',
                label: 'Roulements à billes'
            }
        ]
    },
    {
        id: 'springs',
        title: 'Ressorts',
        label: 'Ressorts',
        description: `
    <p>Notre entreprise est spécialisée dans la fabrication de ressorts industriels de haute qualité, conçus selon les normes internationales et livrés avec une certification de conformité garantissant performance, fiabilité et durabilité. Grâce à une expertise technique avancée et à un processus de production parfaitement maîtrisé, nous offrons des ressorts robustes, précis et adaptés aux applications professionnelles les plus exigeantes.</p>

    <p>Nous proposons une large gamme de ressorts industriels :</p>

    <ul>
      <li><strong>Ressorts de compression</strong> : conçus pour supporter des charges axiales avec une excellente résistance et une longue durée de vie.</li>
      <li><strong>Ressorts de traction</strong> : idéaux pour les applications nécessitant une force de rappel constante et contrôlée.</li>
      <li><strong>Ressorts de torsion</strong> : parfaits pour les mécanismes rotatifs ou nécessitant une force angulaire.</li>
      <li><strong>Ressorts sur mesure</strong> : développés selon les spécifications exactes du client pour répondre à des besoins techniques spécifiques.</li>
    </ul>

    <p>Chaque ressort est fabriqué à partir de matériaux hautement résistants, sélectionnés pour garantir une excellente stabilité mécanique et des performances optimales, même dans les environnements industriels les plus difficiles. Des contrôles stricts et des tests réguliers assurent une qualité constante et une précision maximale.</p>

    <p>Tous nos ressorts sont fournis avec une <strong>certification de conformité</strong>, attestant de leur robustesse, du respect des tolérances, du traitement thermique réalisé, ainsi que de leurs propriétés techniques. Cette transparence renforce la confiance de nos clients et garantit une qualité irréprochable.</p>

    <p>Grâce à notre savoir-faire, nous répondons aux exigences des secteurs industriels, mécaniques et agricoles en proposant des ressorts fiables, durables et parfaitement adaptés aux projets professionnels les plus exigeants.</p>
  `
    },
    {
        id: 'mechanical',
        title: 'Fabrication Mécanique',
        label: 'Fabrication mécanique',
        description: `
    <p>Spécialisés dans la fabrication mécanique de haute précision, nous proposons des solutions techniques robustes et adaptées aux exigences de l’industrie moderne. Grâce à un savoir-faire solide, un parc machines performant et un contrôle rigoureux de toutes les étapes de production, chaque composant est réalisé avec exactitude et fiabilité.</p>

    <p>Nos prestations couvrent un large éventail de services, incluant :</p>

    <ul>
      <li><strong>Tournage, fraisage, perçage et usinage de précision</strong> : pour des pièces parfaitement conformes aux spécifications techniques.</li>
      <li><strong>Fabrication et assemblage de pièces mécaniques</strong> : solutions complètes du prototype à la production en série.</li>
      <li><strong>Conception sur mesure</strong> : réalisation selon cahier des charges pour répondre à des besoins spécifiques.</li>
      <li><strong>Traitements thermiques et traitements de surface</strong> : amélioration de la résistance, de la durabilité et des performances des composants.</li>
      <li><strong>Prototypage et séries petites à moyennes</strong> : flexibilité pour répondre aux projets variés de nos clients.</li>
    </ul>

    <p>Chaque pièce bénéficie d’un suivi qualité strict, d’une vérification dimensionnelle détaillée et d’une sélection minutieuse des matériaux pour garantir résistance, durabilité et performance, même dans les environnements industriels les plus exigeants.</p>

    <p>Notre approche repose sur la fiabilité, la précision et la maîtrise technique. Nous accompagnons divers secteurs tels que la mécanique industrielle, l’agro-équipement, la transformation et les équipements techniques, tout en assurant un niveau élevé de finition et de professionnalisme.</p>

    <p>Voici quelques-uns de nos produits et solutions issus de notre expertise en fabrication mécanique de précision.</p>
  `
    },
    {
        id: 'seals',
        title: 'Arrêt d’Huile',
        label: 'Arrêt d’Huile',
        description: `
    <p>Nous proposons des Arrêt d’Huile originaux des plus grandes marques mondiales pour garantir la meilleure performance et protection de vos machines. Nos produits sont conçus pour prévenir les fuites et maintenir l’efficacité des équipements dans toutes les applications industrielles et mécaniques.</p>

    <p>Avantages de nos Arrêt d’Huile de marques mondiales :</p>
    <ul>
      <li><strong>Qualité fiable</strong> : issus des meilleures marques de l’industrie.</li>
      <li><strong>Haute résistance</strong> : adaptés à la chaleur, à la pression et à l’usure.</li>
      <li><strong>Installation facile et sécurisée</strong> : compatibles avec diverses machines et moteurs.</li>
    </ul>

    <p>Applications des Arrêt d’Huile de marques mondiales :</p>
    <ul>
      <li><strong>Moteurs et équipements industriels</strong> : protection optimale et prévention des fuites.</li>
      <li><strong>Machines agricoles et mécaniques</strong> : maintien de l’efficacité des équipements.</li>
      <li><strong>Équipements pour l’énergie et le transport</strong> : performances fiables même dans les conditions exigeantes.</li>
    </ul>

    <p>Obtenez des Arrêt d’Huile originaux de marques mondiales pour protéger vos équipements et assurer un fonctionnement optimal.</p>
  `
    },
    {
        id: 'chains',
        title: 'Chaînes de Convoyeur',
        label: 'Chaînes de convoyeur à rouleaux ',
        description: `
    <p>Nous proposons une large gamme de chaînes de convoyeurs industriels conçues pour assurer un transport efficace, sûr et durable de vos matériaux et produits. Nos chaînes sont fabriquées selon les normes industrielles les plus strictes, garantissant fiabilité, longévité et performance optimale pour tous vos systèmes de convoyage.</p>

    <p>Caractéristiques de nos chaînes de convoyeurs :</p>
    <ul>
      <li><strong>Résistance maximale</strong> : adaptées aux charges lourdes et à l’usure continue.</li>
      <li><strong>Matériaux de qualité supérieure</strong> : acier renforcé et composants durables.</li>
      <li><strong>Compatibilité universelle</strong> : pour convoyeurs standards et sur mesure.</li>
    </ul>

    <p>Applications principales :</p>
    <ul>
      <li><strong>Industrie alimentaire et agroalimentaire</strong> : transport sûr et hygiénique des produits.</li>
      <li><strong>Industrie automobile et logistique</strong> : fiabilité et performance pour la manutention et le convoyage.</li>
    </ul>

    <p>Choisissez nos chaînes de convoyeurs industriels pour optimiser votre production et garantir un transport fluide et fiable de vos marchandises.</p>
  `
    }
];
const products = [
    // Bearings with subcategory mapping
    // Bearings with correct subcategories
    {
        id: 'spherical-roller-bearing',
        name: 'Roulements à Rouleaux Sphériques',
        category: 'bearings',
        subcategory: 'roller-bearings',
        image: '/products/1-1.jpg',
        shortDescription: 'Roulements sphériques pour applications pivotantes'
    },
    {
        id: 'thrust-spherical-roller-bearing',
        name: 'Roulements à Rouleaux Sphériques de Butée',
        category: 'bearings',
        subcategory: 'roller-bearings',
        image: '/products/1-2.jpg',
        shortDescription: 'Roulements sphériques de butée haute charge'
    },
    {
        id: 'cylindrical-roller-bearing',
        name: 'Roulements à Rouleaux Cylindriques',
        category: 'bearings',
        subcategory: 'roller-bearings',
        image: '/products/1-3.jpg',
        shortDescription: 'Roulements cylindriques précis'
    },
    {
        id: 'tapered-roller-bearing',
        name: 'Roulements à Rouleaux Coniques',
        category: 'bearings',
        subcategory: 'roller-bearings',
        image: '/products/1-4.jpg',
        shortDescription: 'Roulements coniques pour charges radiales'
    },
    {
        id: 'gauge-roller-bearing',
        name: 'Roulements à Galets',
        category: 'bearings',
        subcategory: 'roller-bearings',
        image: '/products/1-5.jpg',
        shortDescription: 'Roulements à galets spécialisés'
    },
    // Bearing Unit
    {
        id: 'bearing-unit',
        name: 'Unité de Roulements',
        category: 'bearings',
        subcategory: 'bearing-units',
        image: '/products/2-1.jpg',
        shortDescription: 'Unités de roulements complètes et pré-assemblées'
    },
    // Ball Bearings
    {
        id: 'angular-contact-ball-bearing',
        name: 'Roulements à Billes à Contact Oblique',
        category: 'bearings',
        subcategory: 'ball-bearings',
        image: '/products/3-1.jpg',
        shortDescription: 'Roulements à billes contact oblique'
    },
    {
        id: 'deep-groove-ball-bearing',
        name: 'Roulements à Billes à Gorge Profonde',
        category: 'bearings',
        subcategory: 'ball-bearings',
        image: '/products/3-2.jpg',
        shortDescription: 'Roulements à gorge profonde standard'
    },
    {
        id: 'self-aligning-ball-bearing',
        name: 'Roulements à Billes Auto-Aligneurs',
        category: 'bearings',
        subcategory: 'ball-bearings',
        image: '/products/3-3.jpg',
        shortDescription: 'Roulements auto-aligneurs'
    },
    {
        id: 'spherical-plain-bearing',
        name: 'Paliers Lisses Sphériques',
        category: 'bearings',
        subcategory: 'ball-bearings',
        image: '/products/3-4.jpg',
        shortDescription: 'Paliers lisses sans friction'
    },
    {
        id: 'thrust-ball-bearing',
        name: 'Roulement à Billes de Poussée',
        category: 'bearings',
        subcategory: 'ball-bearings',
        image: '/products/3-5.jpg',
        shortDescription: 'Roulements de poussée'
    },
    // Springs
    {
        id: 'compression-spring',
        name: 'Ressorts de Compression',
        category: 'springs',
        subcategory: 'compression',
        image: '/products/4-1.jpg',
        shortDescription: 'Ressorts de compression haute performance'
    },
    {
        id: 'tension-spring',
        name: 'Ressorts de Traction',
        category: 'springs',
        subcategory: 'traction',
        image: '/products/5-1.jpg',
        shortDescription: 'Ressorts de traction pour tirage'
    },
    {
        id: 'torsion-spring',
        name: 'Ressorts de Torsion',
        category: 'springs',
        subcategory: 'torsion',
        image: '/products/6-1.jpg',
        shortDescription: 'Ressorts de torsion rotationnels'
    },
    {
        id: 'wire-formed-spring',
        name: 'Ressorts en Fil Formé',
        category: 'springs',
        subcategory: 'fil-forme',
        image: '/products/7-1.jpg',
        shortDescription: 'Ressorts en fil formé personnalisés'
    },
    // Mechanical Manufacturing
    {
        id: 'spur-gear',
        name: 'Pignon Denté',
        category: 'mechanical',
        subcategory: 'pignon-dente',
        image: '/products/8-1.jpg',
        shortDescription: 'Engrenages droits précis'
    },
    {
        id: 'helical-gear',
        name: 'Pignon Hélicoïdal',
        category: 'mechanical',
        subcategory: 'pignon-helicoidal',
        image: '/products/8-2.jpg',
        shortDescription: 'Engrenages hélicoïdaux silencieux'
    },
    {
        id: 'bevel-gear',
        name: 'Pignon Conique',
        category: 'mechanical',
        subcategory: 'pignon-conique',
        image: '/products/8-3.jpg',
        shortDescription: 'Engrenages coniques'
    },
    {
        id: 'worm-gear',
        name: 'Pignon à Vis Sans Fin',
        category: 'mechanical',
        subcategory: 'pignon-vis-sans-fin',
        image: '/products/8-4.jpg',
        shortDescription: 'Vis sans fin précises'
    },
    {
        id: 'planetary-gear',
        name: 'Pignon Planétaire',
        category: 'mechanical',
        subcategory: 'pignon-planetaire',
        image: '/products/8-5.jpg',
        shortDescription: 'Engrenages planétaires compacts'
    },
    {
        id: 'rack-and-pinion',
        name: 'Engrenage à Crémaillère et Pignon',
        category: 'mechanical',
        subcategory: 'cremaillere-pignon',
        image: '/products/8-6.jpg',
        shortDescription: 'Systèmes crémaillère-pignon'
    },
    // Oil Seals
    {
        id: 'spi-seal',
        name: 'Joint SPI (Radial Shaft Seal)',
        category: 'seals',
        subcategory: 'radial-seals',
        image: '/products/9-1.jpg',
        shortDescription: 'Joints radiaux simple lèvre standard'
    },
    {
        id: 'double-lip-seal',
        name: 'Joint à Double Lèvre',
        category: 'seals',
        subcategory: 'radial-seals',
        image: '/products/9-2.jpg',
        shortDescription: 'Joints double lèvre haute protection'
    },
    {
        id: 'springless-seal',
        name: 'Joint sans Ressort',
        category: 'seals',
        subcategory: 'radial-seals',
        image: '/products/9-3.jpg',
        shortDescription: 'Joints sans ressort haute température'
    },
    {
        id: 'ptfe-seal',
        name: 'Joint en PTFE (Téflon)',
        category: 'seals',
        subcategory: 'specialty-seals',
        image: '/products/9-4.jpg',
        shortDescription: 'Joints PTFE résistants chimiques'
    },
    {
        id: 'axial-seal',
        name: 'Joint Axial (Face Seal / Mechanical Seal)',
        category: 'seals',
        subcategory: 'mechanical-seals',
        image: '/products/9-5.jpg',
        shortDescription: 'Joints d\'étanchéité mécanique'
    },
    {
        id: 'vring-seal',
        name: 'Joint V-Ring',
        category: 'seals',
        subcategory: 'specialty-seals',
        image: '/products/9-6.jpg',
        shortDescription: 'Joints V-ring auto-nettoyants'
    },
    {
        id: 'cassette-seal',
        name: 'Joint à Cassette (Cassette Seal)',
        category: 'seals',
        subcategory: 'specialty-seals',
        image: '/products/9-7.jpg',
        shortDescription: 'Joints cassette modulables'
    },
    {
        id: 'metal-lip-seal',
        name: 'Joint à Lèvre Métallique',
        category: 'seals',
        subcategory: 'specialty-seals',
        image: '/products/9-8.jpg',
        shortDescription: 'Joints à lèvre métallique renforcée'
    },
    {
        id: 'food-grade-seal',
        name: 'Joint pour Applications Alimentaires',
        category: 'seals',
        subcategory: 'specialty-seals',
        image: '/products/9-9.jpg',
        shortDescription: 'Joints conformes aux normes alimentaires'
    },
    // Conveyor Chains
    {
        id: 'roller-conveyor-chain',
        name: 'Chaînes de Convoyeur à Rouleaux (Roller Conveyor Chains)',
        category: 'chains',
        subcategory: 'roller-chains',
        image: '/products/10-1.jpg',
        shortDescription: 'Chaînes à rouleaux standard'
    },
    {
        id: 'silent-chain',
        name: 'Chaînes Silencieuses (Silent Chains / Inverted Tooth Chains)',
        category: 'chains',
        subcategory: 'silent-chains',
        image: '/products/10-2.jpg',
        shortDescription: 'Chaînes silencieuses bruit réduit'
    },
    {
        id: 'plate-conveyor-chain',
        name: 'Chaînes de Convoyeur à Plaques (Plate Conveyor Chains)',
        category: 'chains',
        subcategory: 'plate-chains',
        image: '/products/10-3.jpg',
        shortDescription: 'Chaînes à plaques modulables'
    },
    {
        id: 'drag-conveyor-chain',
        name: 'Chaînes de Convoyeur à Raclage (Drag Conveyor Chains)',
        category: 'chains',
        subcategory: 'drag-chains',
        image: '/products/10-4.jpg',
        shortDescription: 'Chaînes à raclage pour matériaux'
    },
    {
        id: 'attachment-conveyor-chain',
        name: 'Chaînes de Convoyeur avec Attaches (Attachment Conveyor Chains)',
        category: 'chains',
        subcategory: 'attachment-chains',
        image: '/products/10-5.jpg',
        shortDescription: 'Chaînes avec attaches intégrées'
    },
    {
        id: 'pintle-chain',
        name: 'Chaînes à Maillons Articulés (Pintle Chains)',
        category: 'chains',
        subcategory: 'pintle-chains',
        image: '/products/10-6.jpg',
        shortDescription: 'Chaînes à maillons pivotants'
    },
    {
        id: 'stainless-steel-conveyor-chain',
        name: 'Chaînes de Convoyeur en Acier Inoxydable (Stainless Steel Conveyor Chains)',
        category: 'chains',
        subcategory: 'stainless-chains',
        image: '/products/10-7.jpg',
        shortDescription: 'Chaînes inoxydables résistantes'
    },
    {
        id: 'heavy-duty-conveyor-chain',
        name: 'Chaînes de Convoyeur pour Charges Lourdes (Heavy Duty Conveyor Chains)',
        category: 'chains',
        subcategory: 'heavy-duty-chains',
        image: '/products/10-8.jpg',
        shortDescription: 'Chaînes haute résistance'
    }
];
const productDetails = {
    // Roller Bearings
    'spherical-roller-bearing': {
        id: 'spherical-roller-bearing',
        name: 'Roulements à Rouleaux Sphériques',
        category: 'bearings',
        subcategory: 'roller-bearings',
        image: '/products/1-1.jpg',
        images: [
            '/products/1-1.jpg'
        ],
        shortDescription: 'Roulements sphériques pour applications pivotantes',
        description: 'Roulements sphériques premium pour installations avec désalignement',
        fullDescription: 'Nos roulements à rouleaux sphériques sont conçus pour les applications exigeant une grande flexibilité d\'orientation. Ils offrent une tolérance angulaire supérieure et une excellente durée de vie.',
        specifications: [
            'Charge dynamique: jusqu\'à 200 kN',
            'Désalignement maximal: ±3°',
            'Double rangée de rouleaux',
            'Cage laiton ou acier',
            'Certifié ISO 281'
        ],
        applications: [
            'Installations de pompage',
            'Chaînes de transmission',
            'Équipements miniers',
            'Machines agricoles',
            'Systèmes de convoyage'
        ],
        usesFor: [
            'Compensation de désalignement',
            'Applications pivotantes',
            'Charges radiales lourdes',
            'Environnements exigeants'
        ]
    },
    'thrust-spherical-roller-bearing': {
        id: 'thrust-spherical-roller-bearing',
        name: 'Roulements à Rouleaux Sphériques de Butée',
        category: 'bearings',
        subcategory: 'roller-bearings',
        image: '/products/1-2.jpg',
        images: [
            '/products/1-2.jpg'
        ],
        shortDescription: 'Roulements sphériques de butée haute charge',
        description: 'Roulements sphériques de butée pour charges élevées',
        fullDescription: 'Nos roulements à rouleaux sphériques de butée sont conçus pour supporter des charges axiales importantes tout en offrant une grande flexibilité d\'orientation.',
        specifications: [
            'Charge axiale maximale: jusqu\'à 200 kN',
            'Désalignement maximal: ±3°',
            'Double rangée de rouleaux',
            'Cage en acier',
            'Certifications ISO 9606 et ISO 281'
        ],
        applications: [
            'Axes de rotation',
            'Moteurs électriques',
            'Équipements de précision',
            'Systèmes de mouvement'
        ],
        usesFor: [
            'Transmission de puissance',
            'Support de charges',
            'Réduction de friction',
            'Applications hautes vitesses'
        ]
    },
    'cylindrical-roller-bearing': {
        id: 'cylindrical-roller-bearing',
        name: 'Roulements à Rouleaux Cylindriques',
        category: 'bearings',
        subcategory: 'roller-bearings',
        image: '/products/1-3.jpg',
        images: [
            '/products/1-3.jpg'
        ],
        shortDescription: 'Roulements cylindriques précis',
        description: 'Roulements cylindriques pour applications à charge élevée',
        fullDescription: 'Nos roulements à rouleaux cylindriques sont fabriqués avec une précision extrême et sont idéaux pour les applications nécessitant une charge radiale élevée.',
        specifications: [
            'Charge radiale maximale: jusqu\'à 100 kN',
            'Vitesse maximale: 5000 tr/min',
            'Bagues en acier au chrome',
            'Rouleaux en acier dur',
            'Certifications ISO 3051'
        ],
        applications: [
            'Axes de rotation',
            'Moteurs électriques',
            'Équipements de précision',
            'Systèmes de mouvement'
        ],
        usesFor: [
            'Transmission de puissance',
            'Support de charges',
            'Réduction de friction',
            'Applications hautes vitesses'
        ]
    },
    'tapered-roller-bearing': {
        id: 'tapered-roller-bearing',
        name: 'Roulements à Rouleaux Coniques',
        category: 'bearings',
        subcategory: 'roller-bearings',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/1-4.jpg'
        ],
        shortDescription: 'Roulements coniques pour charges radiales',
        description: 'Roulements à rouleaux coniques pour charges radiales',
        fullDescription: 'Nos roulements à rouleaux coniques sont conçus pour supporter des charges radiales importantes tout en assurant une transmission de puissance précise.',
        specifications: [
            'Charge radiale maximale: jusqu\'à 100 kN',
            'Charge axiale maximale: jusqu\'à 50 kN',
            'Bagues en acier au chrome',
            'Rouleaux en acier dur',
            'Certifications ISO 3051'
        ],
        applications: [
            'Axes de rotation',
            'Moteurs électriques',
            'Équipements de précision',
            'Systèmes de mouvement'
        ],
        usesFor: [
            'Transmission de puissance',
            'Support de charges',
            'Réduction de friction',
            'Applications hautes vitesses'
        ]
    },
    'gauge-roller-bearing': {
        id: 'gauge-roller-bearing',
        name: 'Roulements à Galets',
        category: 'bearings',
        subcategory: 'roller-bearings',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/1-5.jpg'
        ],
        shortDescription: 'Roulements à galets spécialisés',
        description: 'Roulements à galets pour applications spécifiques',
        fullDescription: 'Nos roulements à galets sont conçus pour des applications spécifiques nécessitant une charge radiale élevée et une précision exceptionnelle.',
        specifications: [
            'Charge radiale maximale: jusqu\'à 150 kN',
            'Vitesse maximale: 4000 tr/min',
            'Bagues en acier au chrome',
            'Galets en acier dur',
            'Certifications ISO 3051'
        ],
        applications: [
            'Axes de rotation',
            'Moteurs électriques',
            'Équipements de précision',
            'Systèmes de mouvement'
        ],
        usesFor: [
            'Transmission de puissance',
            'Support de charges',
            'Réduction de friction',
            'Applications hautes vitesses'
        ]
    },
    // Bearing Units
    'bearing-unit': {
        id: 'bearing-unit',
        name: 'Unité de Roulements',
        category: 'bearings',
        subcategory: 'bearing-units',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/2-1.jpg',
            '/products/2-2.jpg',
            '/products/2-3.jpg'
        ],
        shortDescription: 'Unités de roulements complètes et pré-assemblées',
        description: 'Unités de roulements pré-assemblées',
        fullDescription: 'Nos unités de roulements sont complètes et pré-assemblées, facilitant l\'installation et la maintenance.',
        specifications: [
            'Charge radiale: jusqu\'à 100 kN',
            'Charge axiale: jusqu\'à 50 kN',
            'Bagues en acier au chrome',
            'Rouleaux en acier dur',
            'Certifications ISO 9606 et ISO 3051'
        ],
        applications: [
            'Axes de rotation',
            'Moteurs électriques',
            'Équipements de précision',
            'Systèmes de mouvement'
        ],
        usesFor: [
            'Transmission de puissance',
            'Support de charges',
            'Réduction de friction',
            'Applications hautes vitesses'
        ]
    },
    // Ball Bearings
    'angular-contact-ball-bearing': {
        id: 'angular-contact-ball-bearing',
        name: 'Roulements à Billes à Contact Oblique',
        category: 'bearings',
        subcategory: 'ball-bearings',
        image: '/products/3-1.jpg',
        images: [
            '/products/3-1.jpg'
        ],
        shortDescription: 'Roulements à billes contact oblique',
        description: 'Roulements à billes contact oblique pour applications spécifiques',
        fullDescription: 'Nos roulements à billes contact oblique sont conçus pour des applications nécessitant une transmission de puissance précise dans des configurations spécifiques.',
        specifications: [
            'Charge radiale: jusqu\'à 50 kN',
            'Charge axiale: jusqu\'à 25 kN',
            'Bagues en acier au chrome',
            'Billes en acier dur',
            'Certifications ISO 9606'
        ],
        applications: [
            'Axes de rotation',
            'Moteurs électriques',
            'Équipements de précision',
            'Systèmes de mouvement'
        ],
        usesFor: [
            'Transmission de puissance',
            'Support de charges',
            'Réduction de friction',
            'Applications hautes vitesses'
        ]
    },
    'deep-groove-ball-bearing': {
        id: 'deep-groove-ball-bearing',
        name: 'Roulements à Billes à Gorge Profonde',
        category: 'bearings',
        subcategory: 'ball-bearings',
        image: '/products/3-1.jpg',
        images: [
            '/products/3-2.jpg'
        ],
        shortDescription: 'Roulements à gorge profonde standard',
        description: 'Roulements à gorge profonde pour applications à charge élevée',
        fullDescription: 'Nos roulements à gorge profonde sont fabriqués pour supporter des charges radiales importantes tout en assurant une précision et une fiabilité exceptionnelles.',
        specifications: [
            'Charge radiale maximale: jusqu\'à 100 kN',
            'Vitesse maximale: 3000 tr/min',
            'Bagues en acier au chrome',
            'Billes en acier dur',
            'Certifications ISO 9606'
        ],
        applications: [
            'Axes de rotation',
            'Moteurs électriques',
            'Équipements de précision',
            'Systèmes de mouvement'
        ],
        usesFor: [
            'Transmission de puissance',
            'Support de charges',
            'Réduction de friction',
            'Applications hautes vitesses'
        ]
    },
    'self-aligning-ball-bearing': {
        id: 'self-aligning-ball-bearing',
        name: 'Roulements à Billes Auto-Aligneurs',
        category: 'bearings',
        subcategory: 'ball-bearings',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/3-3.jpg'
        ],
        shortDescription: 'Roulements auto-aligneurs',
        description: 'Roulements à billes auto-aligneurs pour applications spécifiques',
        fullDescription: 'Nos roulements à billes auto-aligneurs sont conçus pour compenser les désalignements mineurs et assurer une transmission de puissance précise.',
        specifications: [
            'Charge radiale: jusqu\'à 50 kN',
            'Charge axiale: jusqu\'à 25 kN',
            'Bagues en acier au chrome',
            'Billes en acier dur',
            'Certifications ISO 9606'
        ],
        applications: [
            'Axes de rotation',
            'Moteurs électriques',
            'Équipements de précision',
            'Systèmes de mouvement'
        ],
        usesFor: [
            'Compensation de désalignement',
            'Transmission de puissance',
            'Support de charges',
            'Applications hautes vitesses'
        ]
    },
    'spherical-plain-bearing': {
        id: 'spherical-plain-bearing',
        name: 'Paliers Lisses Sphériques',
        category: 'bearings',
        subcategory: 'ball-bearings',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/3-4.jpg'
        ],
        shortDescription: 'Paliers lisses sans friction',
        description: 'Paliers lisses sphériques pour applications spécifiques',
        fullDescription: 'Nos paliers lisses sphériques sont conçus pour des applications nécessitant une transmission de puissance précise sans friction.',
        specifications: [
            'Charge radiale: jusqu\'à 50 kN',
            'Charge axiale: jusqu\'à 25 kN',
            'Paliers en acier dur',
            'Matériau de support en acier',
            'Certifications ISO 9606'
        ],
        applications: [
            'Axes de rotation',
            'Moteurs électriques',
            'Équipements de précision',
            'Systèmes de mouvement'
        ],
        usesFor: [
            'Transmission de puissance',
            'Support de charges',
            'Réduction de friction',
            'Applications hautes vitesses'
        ]
    },
    'thrust-ball-bearing': {
        id: 'thrust-ball-bearing',
        name: 'Roulement à Billes de Poussée',
        category: 'bearings',
        subcategory: 'ball-bearings',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/3-5.jpg'
        ],
        shortDescription: 'Roulements de poussée',
        description: 'Roulements à billes de poussée pour applications spécifiques',
        fullDescription: 'Nos roulements à billes de poussée sont conçus pour supporter des charges axiales importantes tout en assurant une transmission de puissance précise.',
        specifications: [
            'Charge axiale maximale: jusqu\'à 100 kN',
            'Bagues en acier au chrome',
            'Billes en acier dur',
            'Certifications ISO 9606'
        ],
        applications: [
            'Axes de rotation',
            'Moteurs électriques',
            'Équipements de précision',
            'Systèmes de mouvement'
        ],
        usesFor: [
            'Transmission de puissance',
            'Support de charges',
            'Réduction de friction',
            'Applications hautes vitesses'
        ]
    },
    // Springs
    'compression-spring': {
        id: 'compression-spring',
        name: 'Ressorts de Compression',
        category: 'springs',
        subcategory: 'compression',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/4-1.jpg',
            '/products/4-2.jpg',
            '/products/4-3.jpg',
            '/products/4-4.jpg',
            '/products/4-5.jpg',
            '/products/4-6.jpg',
            '/products/4-7.jpg',
            '/products/4-8.jpg',
            '/products/4-9.jpg',
            '/products/4-10.jpg',
            '/products/4-11.jpg'
        ],
        shortDescription: 'Ressorts de compression haute performance',
        description: 'Ressorts de compression robustes et fiables pour applications industrielles',
        fullDescription: 'Notre entreprise est spécialisée dans la fabrication de ressorts industriels de haute qualité, conçus selon les normes internationales et livrés avec une certification de conformité garantissant performance, fiabilité et durabilité. Grâce à une expertise technique avancée et à un processus de production parfaitement maîtrisé, nous offrons des ressorts robustes, précis et adaptés aux applications professionnelles les plus exigeantes.',
        specifications: [
            'Acier à ressort haute résistance',
            'Traitements thermiques avancés',
            'Diamètre du fil: 0.8-15mm',
            'Longueur libre variable selon besoin',
            'Tolérance H8 selon norme DIN 2194'
        ],
        applications: [
            'Suspension automobile',
            'Équipements industriels',
            'Systèmes d\'absorption d\'énergie',
            'Machines de précision',
            'Applications hautes températures'
        ],
        usesFor: [
            'Stockage d\'énergie',
            'Amortissement de chocs',
            'Support de charge',
            'Récupération élastique'
        ]
    },
    'tension-spring': {
        id: 'tension-spring',
        name: 'Ressorts de Traction',
        category: 'springs',
        subcategory: 'traction',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/5-1.jpg',
            '/products/5-2.jpg',
            '/products/5-3.jpg',
            '/products/5-4.jpg',
            '/products/5-5.jpg',
            '/products/5-6.jpg',
            '/products/5-7.jpg',
            '/products/5-8.jpg',
            '/products/5-9.jpg',
            '/products/5-10.jpg'
        ],
        shortDescription: 'Ressorts de traction pour tirage',
        description: 'Ressorts de traction haute performance',
        fullDescription: 'Les ressorts de traction conçus pour supporter les forces de tirage et d\'extension. Fabriqués en acier haute résistance avec différentes configurations de crochets.',
        specifications: [
            'Diamètre du fil: 1-12mm',
            'Force de traction variable',
            'Crochets multiples disponibles',
            'Traitement thermique certifié'
        ],
        applications: [
            'Systèmes de suspension',
            'Mécanismes d\'entraînement',
            'Équipements agricoles',
            'Portes et portails'
        ],
        usesFor: [
            'Tirage et extension',
            'Récupération de position',
            'Absorption d\'énergie'
        ]
    },
    'torsion-spring': {
        id: 'torsion-spring',
        name: 'Ressorts de Torsion',
        category: 'springs',
        subcategory: 'torsion',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/6-1.jpg',
            '/products/6-2.jpg',
            '/products/6-3.jpg',
            '/products/6-4.jpg',
            '/products/6-5.jpg',
            '/products/6-7.jpg',
            '/products/6-8.jpg',
            '/products/6-9.jpg',
            '/products/6-10.jpg',
            '/products/6-11.jpg'
        ],
        shortDescription: 'Ressorts de torsion pour forces rotationnelles',
        description: 'Ressorts de torsion robustes',
        fullDescription: 'Les ressorts de torsion offrent une force rotationnelle constante et fiable pour vos applications.',
        specifications: [
            'Moment de torsion: variable',
            'Angle de rotation: jusqu\'à 360°',
            'Acier haute résistance',
            'Brins formés selon spécifications'
        ],
        applications: [
            'Mécanismes d\'embrayage',
            'Systèmes de rembobinage',
            'Équipements d\'affichage',
            'Vannes de contrôle'
        ],
        usesFor: [
            'Transmission de couple',
            'Récupération rotationnelle',
            'Compensation angulaire'
        ]
    },
    'wire-formed-spring': {
        id: 'wire-formed-spring',
        name: 'Ressorts en Fil Formé',
        category: 'springs',
        subcategory: 'fil-forme',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/7-1.jpg',
            '/products/7-2.jpg',
            '/products/7-3.jpg',
            '/products/7-4.jpg',
            '/products/7-5.jpg',
            '/products/7-7.jpg',
            '/products/7-6.jpg'
        ],
        shortDescription: 'Ressorts en fil formé personnalisés',
        description: 'Ressorts sur mesure en fil formé',
        fullDescription: 'Ces ressorts sont formés selon vos spécifications exactes pour répondre aux besoins uniques de votre application.',
        specifications: [
            'Géométrie personnalisée',
            'Tous les diamètres de fil disponibles',
            'Finitions multiples',
            'Prototypes et production'
        ],
        applications: [
            'Applications spécialisées',
            'Prototypage rapide',
            'Production de faible volume',
            'Solutions sur mesure'
        ],
        usesFor: [
            'Configurations uniques',
            'Intégration directe',
            'Optimisation d\'espace'
        ]
    },
    // Mechanical Gears
    'spur-gear': {
        id: 'spur-gear',
        name: 'Pignon Denté',
        category: 'mechanical',
        subcategory: 'pignon-dente',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/8-1.jpg'
        ],
        shortDescription: 'Engrenages droits précis',
        description: 'Engrenages droits de haute précision',
        fullDescription: 'Nos engrenages droits sont fabriqués avec une précision extrême selon les normes DIN et ISO. Idéaux pour les applications nécessitant une transmission silencieuse et efficace.',
        specifications: [
            'Module: 0.5-20',
            'Nombre de dents: 10-200',
            'Matériaux: Acier, Bronze, Aluminium',
            'Tolérance DIN 6-8',
            'Usinage CNC haute précision'
        ],
        applications: [
            'Réducteurs',
            'Systèmes d\'entraînement',
            'Machines-outils',
            'Équipements industriels'
        ],
        usesFor: [
            'Transmission de mouvement',
            'Changement de vitesse',
            'Modifications de couple'
        ]
    },
    'helical-gear': {
        id: 'helical-gear',
        name: 'Pignon Hélicoïdal',
        category: 'mechanical',
        subcategory: 'pignon-helicoidal',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/8-2.jpg'
        ],
        shortDescription: 'Engrenages hélicoïdaux silencieux',
        description: 'Engrenages hélicoïdaux haute performance',
        fullDescription: 'Les engrenages hélicoïdaux offrent un fonctionnement plus silencieux et une transmission plus douce que les engrenages droits.',
        specifications: [
            'Angle d\'hélice: 15-45°',
            'Module: 1-20',
            'Capacité de charge: supérieure aux engrenages droits',
            'Usinage de précision'
        ],
        applications: [
            'Transmissions automobiles',
            'Réducteurs silencieux',
            'Équipements haute vitesse',
            'Boîtes de vitesses'
        ],
        usesFor: [
            'Réduction du bruit',
            'Charges élevées',
            'Haute vitesse'
        ]
    },
    'bevel-gear': {
        id: 'bevel-gear',
        name: 'Pignon Conique',
        category: 'mechanical',
        subcategory: 'pignon-conique',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/8-3.jpg'
        ],
        shortDescription: 'Engrenages coniques',
        description: 'Engrenages coniques pour applications spécifiques',
        fullDescription: 'Nos engrenages coniques sont conçus pour les applications nécessitant une transmission de puissance précise dans des configurations angulaires spécifiques.',
        specifications: [
            'Module: 0.5-20',
            'Nombre de dents: 10-200',
            'Matériaux: Acier, Bronze, Aluminium',
            'Tolérance DIN 6-8',
            'Usinage CNC haute précision'
        ],
        applications: [
            'Réducteurs',
            'Systèmes d\'entraînement',
            'Machines-outils',
            'Équipements industriels'
        ],
        usesFor: [
            'Transmission de mouvement',
            'Changement de vitesse',
            'Modifications de couple'
        ]
    },
    'worm-gear': {
        id: 'worm-gear',
        name: 'Pignon à Vis Sans Fin',
        category: 'mechanical',
        subcategory: 'pignon-vis-sans-fin',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/8-4.jpg'
        ],
        shortDescription: 'Vis sans fin précises',
        description: 'Vis sans fin pour applications spécifiques',
        fullDescription: 'Nos vis sans fin sont fabriquées avec une précision extrême et sont idéales pour les applications nécessitant une transmission de puissance précise dans des configurations angulaires spécifiques.',
        specifications: [
            'Module: 0.5-20',
            'Nombre de dents: 10-200',
            'Matériaux: Acier, Bronze, Aluminium',
            'Tolérance DIN 6-8',
            'Usinage CNC haute précision'
        ],
        applications: [
            'Réducteurs',
            'Systèmes d\'entraînement',
            'Machines-outils',
            'Équipements industriels'
        ],
        usesFor: [
            'Transmission de mouvement',
            'Changement de vitesse',
            'Modifications de couple'
        ]
    },
    'planetary-gear': {
        id: 'planetary-gear',
        name: 'Pignon Planétaire',
        category: 'mechanical',
        subcategory: 'pignon-planetaire',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/8-5.jpg'
        ],
        shortDescription: 'Engrenages planétaires compacts',
        description: 'Engrenages planétaires pour applications spécifiques',
        fullDescription: 'Nos engrenages planétaires sont conçus pour les applications nécessitant une transmission de puissance précise dans des configurations spécifiques.',
        specifications: [
            'Module: 0.5-20',
            'Nombre de dents: 10-200',
            'Matériaux: Acier, Bronze, Aluminium',
            'Tolérance DIN 6-8',
            'Usinage CNC haute précision'
        ],
        applications: [
            'Réducteurs',
            'Systèmes d\'entraînement',
            'Machines-outils',
            'Équipements industriels'
        ],
        usesFor: [
            'Transmission de mouvement',
            'Changement de vitesse',
            'Modifications de couple'
        ]
    },
    'rack-and-pinion': {
        id: 'rack-and-pinion',
        name: 'Engrenage à Crémaillère et Pignon',
        category: 'mechanical',
        subcategory: 'cremaillere-pignon',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/8-6.jpg'
        ],
        shortDescription: 'Systèmes crémaillère-pignon',
        description: 'Systèmes crémaillère-pignon pour applications spécifiques',
        fullDescription: 'Nos systèmes crémaillère-pignon sont conçus pour les applications nécessitant une transmission de puissance précise dans des configurations spécifiques.',
        specifications: [
            'Module: 0.5-20',
            'Nombre de dents: 10-200',
            'Matériaux: Acier, Bronze, Aluminium',
            'Tolérance DIN 6-8',
            'Usinage CNC haute précision'
        ],
        applications: [
            'Réducteurs',
            'Systèmes d\'entraînement',
            'Machines-outils',
            'Équipements industriels'
        ],
        usesFor: [
            'Transmission de mouvement',
            'Changement de vitesse',
            'Modifications de couple'
        ]
    },
    // Oil Seals
    'spi-seal': {
        id: 'spi-seal',
        name: 'Joint SPI (Radial Shaft Seal)',
        category: 'seals',
        subcategory: 'radial-seals',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/9-1.jpg'
        ],
        shortDescription: 'Joints radiaux simple lèvre standard',
        description: 'Joints d\'étanchéité radiaux SPI haute performance',
        fullDescription: 'Nous proposons des joints d\'huile originaux des plus grandes marques mondiales pour garantir la meilleure performance et protection de vos machines. Nos produits sont conçus pour prévenir les fuites et maintenir l\'efficacité des équipements dans toutes les applications industrielles et mécaniques.',
        specifications: [
            'Lèvre simple contact direct',
            'Matériau: NBR, FKM, PTFE',
            'Températures: -40°C à +120°C',
            'Pression: jusqu\'à 10 bar',
            'Certifications: ISO, DIN'
        ],
        applications: [
            'Moteurs électriques',
            'Réducteurs',
            'Pompes centrifuges',
            'Compresseurs',
            'Équipements industriels'
        ],
        usesFor: [
            'Prévention des fuites d\'huile',
            'Protection du roulement',
            'Maintien de l\'efficacité',
            'Durée de vie prolongée'
        ]
    },
    'double-lip-seal': {
        id: 'double-lip-seal',
        name: 'Joint à Double Lèvre',
        category: 'seals',
        subcategory: 'radial-seals',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/9-2.jpg'
        ],
        shortDescription: 'Joints double lèvre haute protection',
        description: 'Joints double lèvre protection maximale',
        fullDescription: 'Les joints double lèvre offrent une protection supérieure avec lèvre interne et externe.',
        specifications: [
            'Double lèvre radiale',
            'Chambre de fluide central',
            'Protection accrue contre la poussière',
            'Performance améliorée'
        ],
        applications: [
            'Environnements poussiéreux',
            'Applications difficiles',
            'Machines agraires',
            'Équipements miniers'
        ],
        usesFor: [
            'Double étanchéité',
            'Protection des contaminants',
            'Fiabilité accrue'
        ]
    },
    'springless-seal': {
        id: 'springless-seal',
        name: 'Joint sans Ressort',
        category: 'seals',
        subcategory: 'radial-seals',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/9-3.jpg'
        ],
        shortDescription: 'Joints sans ressort haute température',
        description: 'Joints sans ressort pour applications à haute température',
        fullDescription: 'Nos joints sans ressort sont conçus pour résister à des températures élevées tout en offrant une protection maximale contre les fuites d\'huile.',
        specifications: [
            'Matériau: NBR, FKM',
            'Températures: -40°C à +150°C',
            'Pression: jusqu\'à 8 bar',
            'Certifications: ISO, DIN'
        ],
        applications: [
            'Moteurs électriques',
            'Réducteurs',
            'Pompes centrifuges',
            'Compresseurs',
            'Équipements industriels'
        ],
        usesFor: [
            'Prévention des fuites d\'huile',
            'Protection du roulement',
            'Maintien de l\'efficacité',
            'Applications à haute température'
        ]
    },
    'ptfe-seal': {
        id: 'ptfe-seal',
        name: 'Joint en PTFE (Téflon)',
        category: 'seals',
        subcategory: 'specialty-seals',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/9-4.jpg'
        ],
        shortDescription: 'Joints PTFE résistants chimiques',
        description: 'Joints PTFE pour applications chimiques',
        fullDescription: 'Les joints en PTFE offrent une résistance chimique et thermique exceptionnelle.',
        specifications: [
            'Matériau: PTFE pur',
            'Résistance chimique totale',
            'Température: -200°C à +260°C',
            'Coefficient de friction minimal'
        ],
        applications: [
            'Industries chimiques',
            'Raffineries pétrolières',
            'Applications cryogéniques',
            'Équipements spécialisés'
        ],
        usesFor: [
            'Résistance chimique',
            'Haute température',
            'Applications extrêmes'
        ]
    },
    'axial-seal': {
        id: 'axial-seal',
        name: 'Joint Axial (Face Seal / Mechanical Seal)',
        category: 'seals',
        subcategory: 'mechanical-seals',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/9-5.jpg'
        ],
        shortDescription: 'Joints d\'étanchéité mécanique',
        description: 'Joints mécaniques pour applications spécifiques',
        fullDescription: 'Nos joints mécaniques sont conçus pour offrir une étanchéité maximale dans des configurations spécifiques.',
        specifications: [
            'Matériau: Acier, alliage',
            'Pression: jusqu\'à 10 bar',
            'Températures: -40°C à +120°C',
            'Certifications: ISO, DIN'
        ],
        applications: [
            'Moteurs électriques',
            'Réducteurs',
            'Pompes centrifuges',
            'Compresseurs',
            'Équipements industriels'
        ],
        usesFor: [
            'Prévention des fuites d\'huile',
            'Protection du roulement',
            'Maintien de l\'efficacité',
            'Durée de vie prolongée'
        ]
    },
    'vring-seal': {
        id: 'vring-seal',
        name: 'Joint V-Ring',
        category: 'seals',
        subcategory: 'specialty-seals',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/9-6.jpg'
        ],
        shortDescription: 'Joints V-ring auto-nettoyants',
        description: 'Joints V-ring pour applications spécifiques',
        fullDescription: 'Nos joints V-ring sont conçus pour offrir une protection maximale contre les contaminants tout en étant auto-nettoyants.',
        specifications: [
            'Matériau: Acier, alliage',
            'Pression: jusqu\'à 10 bar',
            'Températures: -40°C à +120°C',
            'Certifications: ISO, DIN'
        ],
        applications: [
            'Moteurs électriques',
            'Réducteurs',
            'Pompes centrifuges',
            'Compresseurs',
            'Équipements industriels'
        ],
        usesFor: [
            'Protection des contaminants',
            'Auto-nettoyage',
            'Durée de vie prolongée'
        ]
    },
    'cassette-seal': {
        id: 'cassette-seal',
        name: 'Joint à Cassette (Cassette Seal)',
        category: 'seals',
        subcategory: 'specialty-seals',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/9-7.jpg'
        ],
        shortDescription: 'Joints cassette modulables',
        description: 'Joints cassette pour applications spécifiques',
        fullDescription: 'Nos joints cassette sont modulables et conçus pour offrir une protection maximale contre les contaminants.',
        specifications: [
            'Matériau: Acier, alliage',
            'Pression: jusqu\'à 10 bar',
            'Températures: -40°C à +120°C',
            'Certifications: ISO, DIN'
        ],
        applications: [
            'Moteurs électriques',
            'Réducteurs',
            'Pompes centrifuges',
            'Compresseurs',
            'Équipements industriels'
        ],
        usesFor: [
            'Protection des contaminants',
            'Modulabilité',
            'Durée de vie prolongée'
        ]
    },
    'metal-lip-seal': {
        id: 'metal-lip-seal',
        name: 'Joint à Lèvre Métallique',
        category: 'seals',
        subcategory: 'specialty-seals',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/9-8.jpg'
        ],
        shortDescription: 'Joints à lèvre métallique renforcée',
        description: 'Joints à lèvre métallique pour applications spécifiques',
        fullDescription: 'Nos joints à lèvre métallique sont renforcés et conçus pour offrir une protection maximale contre les contaminants.',
        specifications: [
            'Matériau: Acier, alliage',
            'Pression: jusqu\'à 10 bar',
            'Températures: -40°C à +120°C',
            'Certifications: ISO, DIN'
        ],
        applications: [
            'Moteurs électriques',
            'Réducteurs',
            'Pompes centrifuges',
            'Compresseurs',
            'Équipements industriels'
        ],
        usesFor: [
            'Protection des contaminants',
            'Renforcement de l\'étanchéité',
            'Durée de vie prolongée'
        ]
    },
    'food-grade-seal': {
        id: 'food-grade-seal',
        name: 'Joint pour Applications Alimentaires',
        category: 'seals',
        subcategory: 'specialty-seals',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/9-9.jpg'
        ],
        shortDescription: 'Joints conformes aux normes alimentaires',
        description: 'Joints alimentaires pour applications spécifiques',
        fullDescription: 'Nos joints alimentaires sont conçus pour respecter les normes alimentaires les plus strictes et offrir une protection maximale contre les contaminants.',
        specifications: [
            'Matériau: Acier inoxydable, alliage',
            'Pression: jusqu\'à 5 bar',
            'Températures: -20°C à +60°C',
            'Certifications: ISO, DIN, NSF'
        ],
        applications: [
            'Industrie alimentaire',
            'Machines de production alimentaire',
            'Systèmes de packaging',
            'Équipements de traitement des aliments'
        ],
        usesFor: [
            'Protection des contaminants',
            'Conformité alimentaire',
            'Durée de vie prolongée'
        ]
    },
    // Conveyor Chains
    'roller-conveyor-chain': {
        id: 'roller-conveyor-chain',
        name: 'Chaînes de Convoyeur à Rouleaux (Roller Conveyor Chains)',
        category: 'chains',
        subcategory: 'roller-chains',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/10-1.jpg'
        ],
        shortDescription: 'Chaînes à rouleaux standard',
        description: 'Chaînes à rouleaux pour convoyage industriel',
        fullDescription: 'Nous proposons une large gamme de chaînes de convoyeurs industriels conçues pour assurer un transport efficace, sûr et durable de vos matériaux et produits. Nos chaînes sont fabriquées selon les normes industrielles les plus strictes, garantissant fiabilité, longévité et performance optimale pour tous vos systèmes de convoyage.',
        specifications: [
            'Pas: 9.525-63.5mm',
            'Charge de rupture: 500-50000 N',
            'Acier allié traité thermiquement',
            'Rouleaux précis en acier',
            'Normes ISO 606'
        ],
        applications: [
            'Systèmes de convoyage',
            'Chaînes de transmission',
            'Équipements agro-industriels',
            'Machines d\'emballage',
            'Industrie alimentaire'
        ],
        usesFor: [
            'Transport de charges',
            'Transmission de puissance',
            'Convoyage continu',
            'Systèmes de manipulation'
        ]
    },
    'silent-chain': {
        id: 'silent-chain',
        name: 'Chaînes Silencieuses (Silent Chains / Inverted Tooth Chains)',
        category: 'chains',
        subcategory: 'silent-chains',
        images: [
            '/products/10-2.jpg'
        ],
        image: '/spherical-roller-bearings.jpg',
        shortDescription: 'Chaînes silencieuses bruit réduit',
        description: 'Chaînes avec dents inversées bruit minimal',
        fullDescription: 'Les chaînes silencieuses avec maillons à dents inversées réduisent considérablement le bruit de fonctionnement.',
        specifications: [
            'Conception dents inversées',
            'Réduction bruit: -15-20dB',
            'Capacité de charge élevée',
            'Longévité supérieure'
        ],
        applications: [
            'Applications sensibles au bruit',
            'Environnements de travail',
            'Équipements hospitaliers',
            'Installations urbaines'
        ],
        usesFor: [
            'Réduction du bruit',
            'Confort acoustique',
            'Conformité réglementaire'
        ]
    },
    'plate-conveyor-chain': {
        id: 'plate-conveyor-chain',
        name: 'Chaînes de Convoyeur à Plaques (Plate Conveyor Chains)',
        category: 'chains',
        subcategory: 'plate-chains',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/10-3.jpg'
        ],
        shortDescription: 'Chaînes à plaques modulables',
        description: 'Chaînes à plaques pour applications spécifiques',
        fullDescription: 'Nos chaînes à plaques sont modulables et conçues pour les applications nécessitant une transmission de puissance précise.',
        specifications: [
            'Pas: 9.525-63.5mm',
            'Charge de rupture: 500-50000 N',
            'Acier allié traité thermiquement',
            'Plaques en acier',
            'Normes ISO 606'
        ],
        applications: [
            'Systèmes de convoyage',
            'Chaînes de transmission',
            'Équipements agro-industriels',
            'Machines d\'emballage',
            'Industrie alimentaire'
        ],
        usesFor: [
            'Transport de charges',
            'Transmission de puissance',
            'Convoyage continu',
            'Systèmes de manipulation'
        ]
    },
    'drag-conveyor-chain': {
        id: 'drag-conveyor-chain',
        name: 'Chaînes de Convoyeur à Raclage (Drag Conveyor Chains)',
        category: 'chains',
        subcategory: 'drag-chains',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/10-4.jpg'
        ],
        shortDescription: 'Chaînes à raclage pour matériaux',
        description: 'Chaînes à raclage pour applications spécifiques',
        fullDescription: 'Nos chaînes à raclage sont conçues pour les applications nécessitant une nettoyage efficace des matériaux transportés.',
        specifications: [
            'Pas: 9.525-63.5mm',
            'Charge de rupture: 500-50000 N',
            'Acier allié traité thermiquement',
            'Rouleaux en acier',
            'Normes ISO 606'
        ],
        applications: [
            'Systèmes de convoyage',
            'Chaînes de transmission',
            'Équipements agro-industriels',
            'Machines d\'emballage',
            'Industrie alimentaire'
        ],
        usesFor: [
            'Nettoyage des matériaux',
            'Transport de charges',
            'Transmission de puissance',
            'Convoyage continu',
            'Systèmes de manipulation'
        ]
    },
    'attachment-conveyor-chain': {
        id: 'attachment-conveyor-chain',
        name: 'Chaînes de Convoyeur avec Attaches (Attachment Conveyor Chains)',
        category: 'chains',
        subcategory: 'attachment-chains',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/10-5.jpg'
        ],
        shortDescription: 'Chaînes avec attaches intégrées',
        description: 'Chaînes avec attaches pour applications spécifiques',
        fullDescription: 'Nos chaînes avec attaches sont intégrées et conçues pour les applications nécessitant une transmission de puissance précise.',
        specifications: [
            'Pas: 9.525-63.5mm',
            'Charge de rupture: 500-50000 N',
            'Acier allié traité thermiquement',
            'Attaches en acier',
            'Normes ISO 606'
        ],
        applications: [
            'Systèmes de convoyage',
            'Chaînes de transmission',
            'Équipements agro-industriels',
            'Machines d\'emballage',
            'Industrie alimentaire'
        ],
        usesFor: [
            'Transmission de puissance',
            'Support de charges',
            'Convoyage continu',
            'Systèmes de manipulation'
        ]
    },
    'pintle-chain': {
        id: 'pintle-chain',
        name: 'Chaînes à Maillons Articulés (Pintle Chains)',
        category: 'chains',
        subcategory: 'pintle-chains',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/10-6.jpg'
        ],
        shortDescription: 'Chaînes à maillons pivotants',
        description: 'Chaînes à maillons articulés pour applications spécifiques',
        fullDescription: 'Nos chaînes à maillons articulés sont conçues pour les applications nécessitant une transmission de puissance précise dans des configurations spécifiques.',
        specifications: [
            'Pas: 9.525-63.5mm',
            'Charge de rupture: 500-50000 N',
            'Acier allié traité thermiquement',
            'Maillons articulés en acier',
            'Normes ISO 606'
        ],
        applications: [
            'Systèmes de convoyage',
            'Chaînes de transmission',
            'Équipements agro-industriels',
            'Machines d\'emballage',
            'Industrie alimentaire'
        ],
        usesFor: [
            'Transmission de puissance',
            'Support de charges',
            'Convoyage continu',
            'Systèmes de manipulation'
        ]
    },
    'stainless-steel-conveyor-chain': {
        id: 'stainless-steel-conveyor-chain',
        name: 'Chaînes de Convoyeur en Acier Inoxydable (Stainless Steel Conveyor Chains)',
        category: 'chains',
        subcategory: 'stainless-chains',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/10-7.jpg'
        ],
        shortDescription: 'Chaînes inoxydables résistantes',
        description: 'Chaînes inoxydables pour applications spécifiques',
        fullDescription: 'Nos chaînes en acier inoxydable sont résistantes et conçues pour les applications nécessitant une longévité exceptionnelle.',
        specifications: [
            'Pas: 9.525-63.5mm',
            'Charge de rupture: 500-50000 N',
            'Acier inoxydable traité thermiquement',
            'Rouleaux en acier',
            'Normes ISO 606'
        ],
        applications: [
            'Systèmes de convoyage',
            'Chaînes de transmission',
            'Équipements agro-industriels',
            'Machines d\'emballage',
            'Industrie alimentaire'
        ],
        usesFor: [
            'Résistance au corrosion',
            'Longévité exceptionnelle',
            'Transport de charges',
            'Transmission de puissance',
            'Convoyage continu'
        ]
    },
    'heavy-duty-conveyor-chain': {
        id: 'heavy-duty-conveyor-chain',
        name: 'Chaînes de Convoyeur pour Charges Lourdes (Heavy Duty Conveyor Chains)',
        category: 'chains',
        subcategory: 'heavy-duty-chains',
        image: '/spherical-roller-bearings.jpg',
        images: [
            '/products/10-8.jpg'
        ],
        shortDescription: 'Chaînes haute résistance',
        description: 'Chaînes pour charges lourdes pour applications spécifiques',
        fullDescription: 'Nos chaînes pour charges lourdes sont conçues pour résister à des charges importantes tout en assurant une transmission de puissance précise.',
        specifications: [
            'Pas: 9.525-63.5mm',
            'Charge de rupture: 500-50000 N',
            'Acier allié traité thermiquement',
            'Rouleaux en acier dur',
            'Normes ISO 606'
        ],
        applications: [
            'Systèmes de convoyage',
            'Chaînes de transmission',
            'Équipements agro-industriels',
            'Machines d\'emballage',
            'Industrie alimentaire'
        ],
        usesFor: [
            'Support de charges lourdes',
            'Transmission de puissance',
            'Convoyage continu',
            'Systèmes de manipulation'
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/fabtower/code/components/category-description.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryDescription",
    ()=>CategoryDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function CategoryDescription({ description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "prose prose-sm max-w-full text-lg text-muted-foreground mb-6  [&_p]:mb-4 [&_ul]:mb-4 [&_li]:mb-2 [&_li]:ml-4 [&_strong]:font-semibold",
        dangerouslySetInnerHTML: {
            __html: description
        }
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/fabtower/code/components/category-description.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = CategoryDescription;
var _c;
__turbopack_context__.k.register(_c, "CategoryDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Products
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$components$2f$ui$2f$whatsapp$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/components/ui/whatsapp-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$components$2f$ui$2f$phone$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/components/ui/phone-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$components$2f$ui$2f$email$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/components/ui/email-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/lib/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$components$2f$category$2d$description$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/fabtower/code/components/category-description.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function Products() {
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedSubcategory, setSelectedSubcategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const filteredProducts = selectedCategory === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"] : selectedSubcategory ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === selectedCategory && p.subcategory === selectedSubcategory) : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === selectedCategory);
    const selectedCategoryInfo = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].find((cat)=>cat.id === selectedCategory);
    const handleCategoryChange = (categoryId)=>{
        setSelectedCategory(categoryId);
        setSelectedSubcategory(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$components$2f$ui$2f$phone$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$components$2f$ui$2f$email$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$components$2f$ui$2f$whatsapp$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative border-b border-border py-16 bg-cover bg-center bg-no-repeat",
                        style: {
                            backgroundImage: "url('/magasin.png')"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 backdrop-blur-[6px] bg-black/20"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative container-wide text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-balance",
                                        children: "Magasin de Produits"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl mt-4 max-w-2xl",
                                        children: "Parcourez notre gamme complète de composants industriels. Cliquez sur une catégorie pour filtrer, puis cliquez sur un produit pour plus de détails."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white border-b border-border sticky top-16 z-40 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-wide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleCategoryChange(cat.id),
                                        className: `px-4 py-2 rounded-md font-semibold transition-all ${selectedCategory === cat.id ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'}`,
                                        children: cat.label
                                    }, cat.id, false, {
                                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    selectedCategoryInfo && selectedCategory !== 'all' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-secondary py-12 border-b border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-wide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-foreground mb-3 text-balance",
                                    children: selectedCategoryInfo.title
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$components$2f$category$2d$description$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryDescription"], {
                                    description: selectedCategoryInfo.description
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this),
                                selectedCategoryInfo.subcategories && selectedCategoryInfo.subcategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-foreground mb-4",
                                            children: "Filtrer par Subcatégorie:"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedSubcategory(null),
                                                    className: `px-4 py-2 rounded-md font-semibold transition-all ${selectedSubcategory === null ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground hover:bg-secondary border border-border'}`,
                                                    children: [
                                                        "Tous les ",
                                                        selectedCategoryInfo.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 21
                                                }, this),
                                                selectedCategoryInfo.subcategories.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedSubcategory(sub.id),
                                                        className: `px-4 py-2 rounded-md font-semibold transition-all ${selectedSubcategory === sub.id ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground hover:bg-secondary border border-border'}`,
                                                        children: sub.label
                                                    }, sub.id, false, {
                                                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-wide",
                            children: filteredProducts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground mb-8",
                                        children: [
                                            "Affichage de ",
                                            filteredProducts.length,
                                            " produit",
                                            filteredProducts.length !== 1 ? 's' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                                        children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/products/${product.id}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group cursor-pointer h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative overflow-hidden rounded-lg bg-secondary mb-4 aspect-square",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: product.image || "/placeholder.svg",
                                                                    alt: product.name,
                                                                    fill: true,
                                                                    className: "object-cover group-hover:scale-105 transition-transform duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute bottom-3 right-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/logo.jpg",
                                                                        alt: "Brand Logo",
                                                                        width: 50,
                                                                        height: 50,
                                                                        className: "opacity-80 hover:opacity-100 transition-opacity duration-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2",
                                                            children: product.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground mt-2 line-clamp-2",
                                                            children: product.shortDescription
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 23
                                                }, this)
                                            }, product.id, false, {
                                                fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-lg",
                                    children: "Aucun produit trouvé dans cette catégorie."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-primary text-primary-foreground py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-wide text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-balance mb-6",
                                    children: "Vous Besoin d\\'Aide pour Trouver un Produit?"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto",
                                    children: "Notre équipe d'experts peut vous aider à trouver le composant parfait pour votre application spécifique."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 justify-center flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+212661573626",
                                            className: "px-8 py-3 bg-primary-foreground text-primary rounded-md hover:bg-primary-foreground/90 transition-colors font-semibold",
                                            children: "Nous Appeler"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            className: "px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-md hover:bg-primary-foreground/10 transition-colors font-semibold",
                                            children: "Formulaire de Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$fabtower$2f$code$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/fabtower/code/app/products/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Products, "v7appo0xewz2+uuuTJprv9rctJU=");
_c = Products;
var _c;
__turbopack_context__.k.register(_c, "Products");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_fabtower_code_d5bd1bb3._.js.map