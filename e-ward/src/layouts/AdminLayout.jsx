import Sidebar from "../components/admin/sidebar";
import Navbar from "../components/admin/navbar";

function AdminLayout({ children }) {
  return (
    <div className="flex bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;