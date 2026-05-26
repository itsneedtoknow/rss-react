import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { Courses, loader as coursesLoader } from "./pages/Courses.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":link",
        element: <Courses />,
        loader: coursesLoader,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App />
    </RouterProvider> */}
  </StrictMode>,
);
