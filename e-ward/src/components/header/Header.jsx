import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const { isLogin, setisLogin, userRole, setRole } = useContext(LoginContext);
  const nagavitor = useNavigate();
  const handdleLogout = () => {
    setisLogin(false);
    nagavitor("/login");
  };

  return (
    <div className="flex justify-between items-center flex-row p-3 mb-1 bg-gray-500">
      <div className="flex flex-row gap-2 justify-center items-center text-xl font-bold b">
        <h1 className="text-gray-100">Ward Management</h1>
      </div>
      <div className="flex justify-center items-center flex-row gap-2">
        {isLogin && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-300 text-white" : "bg-blue-600 text-white"
              } px-6 py-1.5 rounded`
            }
          >
            <p className="text-lg font-sans font-bold">Admin</p>
          </NavLink>
        )}
        {isLogin && (
          <NavLink
            to="/citizen"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-300 text-white" : "bg-blue-600 text-white"
              } px-6 py-1.5 rounded`
            }
          >
            <p className="text-lg font-sans font-bold">Citizen</p>
          </NavLink>
        )}
        {isLogin && (
          <NavLink
            to="/wardchairperson"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-300 text-white" : "bg-blue-600 text-white"
              } px-6 py-1.5 rounded`
            }
          >
            <p className="text-lg font-sans font-bold">Ward Chairperson</p>
          </NavLink>
        )}
        {isLogin && (
          <NavLink
            to="/wardsecretary"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-300 text-white" : "bg-blue-600 text-white"
              } px-6 py-1.5 rounded`
            }
          >
            <p className="text-lg font-sans font-bold">Ward Secretary</p>
          </NavLink>
        )}
        {isLogin && (
          <NavLink
            to="/validation"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-300 text-white" : "bg-blue-600 text-white"
              } px-6 py-1.5 rounded`
            }
          >
            <p className="text-lg font-sans font-bold">Data Validation</p>
          </NavLink>
        )}
        {isLogin ? (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-300 text-white" : "bg-blue-600 text-white"
              } px-6 py-1.5 rounded`
            }
            onClick={handdleLogout}
          >
            <p className="text-lg font-sans font-bold">Logout</p>
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-300 text-white" : "bg-blue-600 text-white"
              } px-6 py-1.5 rounded`
            }
          >
            <p className="text-lg font-sans font-bold">Login</p>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
