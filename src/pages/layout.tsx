import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/sidebar";
import Navbar from "../components/navbar";

function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        {/* Navbar */}
        <div className="relative w-full">
          <Navbar />
        </div>
        {/*Main Routes */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
