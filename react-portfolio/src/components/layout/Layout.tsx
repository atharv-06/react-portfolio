import { useState } from "react";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex">
      
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 px-4 md:px-8 py-6 flex flex-col">

        {/* Unified Navigation */}
        <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-sm flex items-center gap-2">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden
                       px-3 py-2 rounded-xl
                       border border-slate-200
                       text-slate-700
                       hover:bg-slate-100"
            aria-label="Open sidebar"
          >
            ☰
          </button>

          {/* Tabs */}
          <div className="flex-1">
            <Tabs />
          </div>
        </div>

        {/* Page Content */}
        <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex-1">
          <Outlet />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
