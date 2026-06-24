import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BirthRegistration from "./pages/BirthRegistration.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Preview from "./components/Preview.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import Users from "./pages/admin/Users.jsx";

import WardAdminPanel from "./components/admin/Wardadminpanel · .jsx";
import Admin from "./components/admin/Admin.jsx";
import DataValidation from "./components/datavalidation/DataValidation.jsx";
import Citizen from "./components/citizen/Citizen.jsx";
import WardChairperson from "./components/ward_chairperson/WardChairperson.jsx";
import WardSecretary from "./components/ward_secretary/WardSecretary.jsx";
import Header from "./components/header/Header.jsx";
import App from "./App.jsx";
import { LoginProvider } from "./components/context/LoginContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/validation",
        element: <DataValidation />,
      },
      {
        path: "/citizen",
        element: <Citizen />,
      },
      {
        path: "/wardchairperson",
        element: <WardChairperson />,
      },
      {
        path: "/wardsecretary",
        element: <WardSecretary />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  </StrictMode>,
);
