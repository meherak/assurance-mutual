import { lazy } from "react";

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/login";

// ** Merge Routes
const Routes = [
  {
    path: "/login",
    component: lazy(() => import("../../views/Login")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/home",
    component: lazy(() => import("../../views/Home")),
  },
  // demands route list & details
  {
    path: "/apps/demands/list",
    component: lazy(() => import("../../views/pages/demands/list/")),
  },
  {
    path: "/apps/demands/add",
    component: lazy(() => import("../../views/pages/demands/add")),
    meta: {
      navLink: "/apps/demands/add",
    },
  },
  {
    path: "/apps/demands/edit/:id",
    component: lazy(() => import("../../views/pages/demands/add")),
    meta: {
      navLink: "/apps/demands/add",
    },
  },
  // *********************************

  // blog list & add & edit
  {
    path: "/apps/blog/list",
    component: lazy(() => import("../../views/pages/blog/list")),
  },
  {
    path: "/apps/blog/add",
    component: lazy(() => import("../../views/pages/blog/add")),
    meta: {
      navLink: "/apps/blog/add",
    },
  },
  {
    path: "/apps/blog/edit/:id",
    component: lazy(() => import("../../views/pages/blog/add")),
    meta: {
      navLink: "/apps/blog/add",
    },
  },
  {
    path: "/error",
    component: lazy(() => import("../../views/pages/error/Error404")),
    layout: "BlankLayout",
  },
];

export { DefaultRoute, TemplateTitle, Routes };
