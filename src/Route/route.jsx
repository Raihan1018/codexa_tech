import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Solutions from "../pages/Solutions/Solutions";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/services",
        Component: Services
      },
      {
        path: "/solutions",
        Component: Solutions
      },
      {
        path: "/contact",
        Component: Contact
      }
    ],
  },
]);
