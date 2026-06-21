import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BirthRegistration from "./pages/birth-registration.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Preview from "./components/Preview.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import Users from "./pages/admin/Users.jsx";
import NoticeBoard from "./pages/NoticeBoard.jsx";


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
  // Admin Routes
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/users",
    element: <Users />,
  },
  {
    path: "/notice-board",
    element: <NoticeBoard />,
  },
 

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
