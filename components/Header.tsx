"use client";

import { Search, Bell, UserCircle, Menu } from "lucide-react";
import { useSidebarStore } from "@/store/useSidebarStore";

export default function Header() {
  const toggleSidebar = useSidebarStore((state) => state.toggle);

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-10 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-6 flex-1">
        <button 
          onClick={toggleSidebar}
          className="p-2.5 hover:bg-orange-50 rounded-xl text-slate-600 hover:text-orange-600 transition-all active:scale-95"
        >
          <Menu className="w-7 h-7" />
        </button>
        
        <div className="relative w-full max-w-lg hidden sm:block group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
          <input
            type="text"
            placeholder="Search students, courses, analytics..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3 md:gap-6">
        <button className="p-3 text-slate-500 hover:bg-orange-50 hover:text-orange-600 rounded-2xl transition-all relative group active:scale-95">
          <Bell className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
        
        <div className="h-10 w-[1px] bg-slate-200 mx-1 md:mx-2 hidden xs:block"></div>
        
        <div className="flex items-center gap-4 cursor-pointer group p-1.5 pr-3 hover:bg-slate-50 rounded-2xl transition-all">
          <div className="text-right hidden md:block">
            <p className="text-sm font-black text-slate-900 leading-none">Admin User</p>
            <p className="text-[11px] text-orange-600 font-bold uppercase tracking-wider mt-1">Super Admin</p>
          </div>
          <div className="relative">
            <UserCircle className="w-10 h-10 text-slate-300 group-hover:text-orange-500 transition-colors" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
