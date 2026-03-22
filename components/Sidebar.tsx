"use client";

import { LayoutDashboard, Users, FileText, Settings, LogOut, GraduationCap, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/store/useSidebarStore";
import { useEffect } from "react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Students", href: "/students" },
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "#" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useSidebarStore();

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    
    // Initial check
    handleResize();

    // Optional: Auto close/open on window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:relative inset-y-0 left-0 z-50 bg-white border-r border-slate-200 flex flex-col h-full shadow-2xl lg:shadow-none transition-all duration-300 ease-in-out ${
          isOpen ? "w-[280px] translate-x-0" : "w-[280px] -translate-x-full lg:translate-x-0 lg:w-[88px]"
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-slate-100 h-20">
          <div className="flex items-center gap-4 overflow-hidden">
            <div className="bg-orange-500 p-2.5 rounded-xl shrink-0 shadow-lg shadow-orange-500/30">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span 
              className={`font-black text-2xl tracking-tight whitespace-nowrap text-slate-900 transition-all duration-300 overflow-hidden ${
                isOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              Edu<span className="text-orange-500">Manager</span>
            </span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 hover:bg-orange-50 text-slate-500 hover:text-orange-600 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold group relative ${
                  isActive 
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25" 
                    : "text-slate-500 hover:bg-orange-50 hover:text-orange-600"
                }`}
                title={!isOpen ? item.label : undefined}
              >
                <item.icon className={`w-6 h-6 shrink-0 ${isActive ? "text-white" : "group-hover:scale-110 transition-transform"}`} />
                <span
                  className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-slate-100">
          <button 
            className="flex items-center gap-4 px-4 py-3.5 w-full text-slate-500 hover:bg-rose-50 hover:text-rose-600 rounded-2xl transition-all font-bold group relative"
            title={!isOpen ? "Logout" : undefined}
          >
            <LogOut className="w-6 h-6 shrink-0 group-hover:rotate-12 transition-transform" />
            <span
              className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${
                isOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
