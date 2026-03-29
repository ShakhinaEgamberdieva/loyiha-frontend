'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Bell, UserCircle, Menu, LogOut, Settings, User, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSidebarStore } from '@/store/useSidebarStore';
import { useAuthStore } from '@/store/useAuthStore';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Header() {
  const router = useRouter();
  const toggleSidebar = useSidebarStore((state) => state.toggle);
  const { user, logout } = useAuthStore();
  const { language, setLanguage, t } = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'uz' ? 'ru' : 'uz');
  };

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
            placeholder={t('header.search')}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="p-3 text-slate-500 hover:bg-orange-50 hover:text-orange-600 rounded-2xl transition-all relative group active:scale-95 flex items-center gap-2"
          title={language === 'uz' ? 'Русский' : 'Oʻzbekcha'}
        >
          <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-bold hidden md:block">
            {language === 'uz' ? 'RU' : 'UZ'}
          </span>
        </button>

        <button className="p-3 text-slate-500 hover:bg-orange-50 hover:text-orange-600 rounded-2xl transition-all relative group active:scale-95">
          <Bell className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>

        <div className="h-10 w-[1px] bg-slate-200 mx-1 md:mx-2 hidden xs:block"></div>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-4 cursor-pointer group p-1.5 pr-3 hover:bg-slate-50 rounded-2xl transition-all"
          >
            <div className="text-right hidden md:block">
              <p className="text-sm font-black text-slate-900 leading-none">{user?.name || t('header.profile')}</p>
              <p className="text-[11px] text-orange-600 font-bold uppercase tracking-wider mt-1">
                {user?.role || t('header.role')}
              </p>
            </div>
            <div className="relative">
              <UserCircle className="w-10 h-10 text-slate-300 group-hover:text-orange-500 transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
            </div>
          </button>

          <AnimatePresence>
            {showDropdown && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowDropdown(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-14 w-56 bg-white rounded-2xl shadow-2xl border border-slate-200 py-2 z-50"
                >
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="text-sm font-bold text-slate-900">{user?.name || t('header.profile')}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{user?.email || 'user@example.com'}</p>
                  </div>
                  
                  <div className="py-2">
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-all">
                      <User className="w-5 h-5" />
                      {t('header.profile_menu')}
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-all">
                      <Settings className="w-5 h-5" />
                      {t('header.settings')}
                    </button>
                  </div>
                  
                  <div className="py-2 border-t border-slate-100">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
                    >
                      <LogOut className="w-5 h-5" />
                      {t('header.logout')}
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
