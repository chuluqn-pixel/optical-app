import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
        Sidebar
      </aside>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Navbar */}
        <header className="h-16 border-b bg-white flex items-center px-6">
          Navbar
        </header>

        {/* Page */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}