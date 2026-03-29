"use client";

import { LayoutDashboard, Users, FileText, Settings, LogOut, GraduationCap, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/store/useSidebarStore";
import { useLanguage } from "@/i18n/LanguageContext";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import GroupsDropdown from "@/components/GroupsDropdown";

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useSidebarStore();
  const { t } = useLanguage();
  const [isGuruhlarExpanded, setIsGuruhlarExpanded] = useState(true);

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
        <div className="p-6 flex items-center justify-center lg:justify-between border-b border-slate-100 h-20">
          <div className={`flex items-center gap-4 transition-all duration-300 ${
            !isOpen ? 'justify-center w-full' : ''
          }`}>
            <div className="bg-orange-500 p-2.5 rounded-xl shrink-0 shadow-lg shadow-orange-500/30">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              <span className="font-black text-2xl tracking-tight whitespace-nowrap text-slate-900">
                Edu<span className="text-orange-500">Manager</span>
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 hover:bg-orange-50 text-slate-500 hover:text-orange-600 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {/* Dashboard */}
          <Link
            href="/dashboard"
            className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold group relative ${
              pathname === "/dashboard"
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                : "text-slate-500 hover:bg-orange-50 hover:text-orange-600"
            }`}
            title={!isOpen ? t('sidebar.dashboard') : undefined}
          >
            <LayoutDashboard className={`w-6 h-6 shrink-0 ${pathname === "/dashboard" ? "text-white" : "group-hover:scale-110 transition-transform"}`} />
            <span
              className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${
                isOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              {t('sidebar.dashboard')}
            </span>
          </Link>

          {/* Guruhlar Dropdown */}
          <div className="space-y-1">
            <button
              onClick={() => setIsGuruhlarExpanded(!isGuruhlarExpanded)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold group relative ${
                isGuruhlarExpanded
                  ? "bg-orange-50 text-orange-600"
                  : "text-slate-500 hover:bg-orange-50 hover:text-orange-600"
              }`}
              title={!isOpen ? t('sidebar.guruhlar') : undefined}
            >
              <Users className={`w-6 h-6 shrink-0 ${isGuruhlarExpanded ? "text-orange-600" : "group-hover:scale-110 transition-transform"}`} />
              <span
                className={`whitespace-nowrap transition-all duration-300 overflow-hidden flex-1 text-left ${
                  isOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
                }`}
              >
                {t('sidebar.guruhlar')}
              </span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 transition-transform ${
                  isGuruhlarExpanded ? "rotate-180" : ""
                } ${isOpen ? "opacity-100" : "opacity-0"}`}
              />
            </button>
            
            <AnimatePresence>
              {isOpen && isGuruhlarExpanded && (
                <GroupsDropdown isOpen={isOpen} />
              )}
            </AnimatePresence>
          </div>

          {/* Reports */}
          <Link
            href="/reports"
            className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold group relative ${
              pathname === "/reports"
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                : "text-slate-500 hover:bg-orange-50 hover:text-orange-600"
            }`}
            title={!isOpen ? t('sidebar.reports') : undefined}
          >
            <FileText className={`w-6 h-6 shrink-0 ${pathname === "/reports" ? "text-white" : "group-hover:scale-110 transition-transform"}`} />
            <span
              className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${
                isOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              {t('sidebar.reports')}
            </span>
          </Link>

          {/* Settings */}
          <Link
            href="#"
            className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold group relative ${
              pathname === "#"
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                : "text-slate-500 hover:bg-orange-50 hover:text-orange-600"
            }`}
            title={!isOpen ? t('sidebar.settings') : undefined}
          >
            <Settings className={`w-6 h-6 shrink-0 ${pathname === "#" ? "text-white" : "group-hover:scale-110 transition-transform"}`} />
            <span
              className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${
                isOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              {t('sidebar.settings')}
            </span>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button
            className="flex items-center gap-4 px-4 py-3.5 w-full text-slate-500 hover:bg-rose-50 hover:text-rose-600 rounded-2xl transition-all font-bold group relative"
            title={!isOpen ? t('header.logout') : undefined}
          >
            <LogOut className="w-6 h-6 shrink-0 group-hover:rotate-12 transition-transform" />
            <span
              className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${
                isOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              {t('header.logout')}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
