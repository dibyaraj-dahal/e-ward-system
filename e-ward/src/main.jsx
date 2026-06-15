import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BirthRegistration from "./pages/birth-registration.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Preview from "./components/Preview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BirthRegistration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/preview",
    element: <Preview />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
