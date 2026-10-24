import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

// Each page is code-split: it is downloaded only when the visitor opens it.
const page = loader => ({
  lazy: async () => ({ Component: (await loader()).default })
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, handle: { title: "" }, ...page(() => import("./pages/Home.jsx")) },
          { path: "about", handle: { title: "About" }, ...page(() => import("./pages/About.jsx")) },
          { path: "skills", handle: { title: "Skills" }, ...page(() => import("./pages/Skills.jsx")) },
          { path: "projects", handle: { title: "Projects" }, ...page(() => import("./pages/Projects.jsx")) },
          { path: "projects/:slug", ...page(() => import("./pages/ProjectDetail.jsx")) },
          { path: "experience", handle: { title: "Experience" }, ...page(() => import("./pages/Experience.jsx")) },
          { path: "education", handle: { title: "Education" }, ...page(() => import("./pages/Education.jsx")) },
          { path: "contact", handle: { title: "Contact" }, ...page(() => import("./pages/Contact.jsx")) },
          { path: "*", handle: { title: "Page not found" }, ...page(() => import("./pages/NotFound.jsx")) }
        ]
      }
    ]
  }
]);
