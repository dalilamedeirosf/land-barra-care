import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-CpWW2VpM.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Página não encontrada" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "A página que você procura não existe ou foi movida." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-sm bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90", children: "Voltar ao início" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "Algo deu errado" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Tente recarregar a página." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "rounded-sm bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90", children: "Tentar novamente" }),
      /* @__PURE__ */ jsx("a", { href: "/", className: "rounded-sm border border-input px-4 py-2 text-sm font-medium hover:bg-accent/10", children: "Ir ao início" })
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Land Barra | Garage Britânica — Assistência Técnica Premium" },
      { name: "description", content: "Centro automotivo premium na Barra da Tijuca. Manutenção, mecânica, elétrica, funilaria e serviços especializados para o seu veículo." },
      { name: "author", content: "Land Barra" },
      { property: "og:title", content: "Land Barra | Garage Britânica — Assistência Técnica Premium" },
      { property: "og:description", content: "Centro automotivo premium na Barra da Tijuca. Manutenção, mecânica, elétrica, funilaria e serviços especializados para o seu veículo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Land Barra | Garage Britânica — Assistência Técnica Premium" },
      { name: "twitter:description", content: "Centro automotivo premium na Barra da Tijuca. Manutenção, mecânica, elétrica, funilaria e serviços especializados para o seu veículo." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f6e6a057-9e67-4965-9b67-4d8f92279df3/id-preview-c850650a--39d70840-d17a-4d03-9f96-a2474ead6bde.lovable.app-1780433112752.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f6e6a057-9e67-4965-9b67-4d8f92279df3/id-preview-c850650a--39d70840-d17a-4d03-9f96-a2474ead6bde.lovable.app-1780433112752.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const logo = "/assets/garage-britanica-logo-DpBhpwbY.png";
const $$splitComponentImporter = () => import("./index-uyV5j9AD.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Garage Britânica — Assistência Técnica Premium"
    }, {
      name: "description",
      content: "Centro automotivo premium na Barra da Tijuca: mecânica completa, elétrica, funilaria, suspensão pneumática e consultoria automotiva."
    }, {
      property: "og:title",
      content: "Garage Britânica"
    }, {
      property: "og:description",
      content: "Assistência técnica premium para o seu veículo na Barra da Tijuca."
    }, {
      property: "og:image",
      content: logo
    }, {
      property: "twitter:image",
      content: logo
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  logo as l,
  router as r
};
