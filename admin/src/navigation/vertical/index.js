import { Mail, Home, User, Circle } from "react-feather";

export default [
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/home",
  },

  {
    id: "demandsPage",
    title: "Demands",
    icon: <User size={20} />,
    children: [
      {
        id: "list",
        title: "List",
        icon: <Circle size={12} />,
        navLink: "/apps/demands/list",
      },
      {
        id: "addDemand",
        title: "add Demand",
        icon: <Circle size={12} />,
        navLink: "/apps/demands/add",
      },
    ],
  },
  {
    id: "blogPage",
    title: "Blog",
    icon: <User size={20} />,
    children: [
      {
        id: "list",
        title: "List",
        icon: <Circle size={12} />,
        navLink: "/apps/blog/list",
      },
      {
        id: "addBlog",
        title: "add Blog",
        icon: <Circle size={12} />,
        navLink: "/apps/blog/add",
      },
    ],
  },
];
