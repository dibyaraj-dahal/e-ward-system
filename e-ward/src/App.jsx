import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
// import BirthRegistration from "./pages/birth-registration.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
