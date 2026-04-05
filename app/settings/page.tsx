'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useAuthStore } from '@/store/useAuthStore';
import ProfileSettings from '@/components/settings/ProfileSettings';
import NotificationSettings from '@/components/settings/NotificationSettings';
import SecuritySettings from '@/components/settings/SecuritySettings';
import { Palette, Info, Sun, Globe } from 'lucide-react';

export default function SettingsPage() {
  const { t, language, setLanguage } = useLanguage();
  const { user } = useAuthStore();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black tracking-tight text-slate-900">
          {t('settings.title')} <span className="text-orange-500">⚙️</span>
        </h1>
        <p className="text-slate-500 mt-2 font-medium">{t('settings.subtitle')}</p>
      </div>

      {/* Profile */}
      <ProfileSettings />

      {/* Notifications */}
      <NotificationSettings />

      {/* Security */}
      <SecuritySettings />

      {/* Appearance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-orange-100 rounded-xl">
            <Palette className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">{t('settings.appearance')}</h3>
            <p className="text-sm text-slate-500">{t('settings.appearance_subtitle')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Theme */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Sun className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900">{t('settings.theme')}</p>
                <p className="text-xs text-slate-500">{t('settings.light')}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-lg shadow-sm">
                {t('settings.light')}
              </button>
              <button className="px-4 py-2 bg-slate-200 text-slate-600 text-sm font-bold rounded-lg hover:bg-slate-300 transition-colors">
                {t('settings.dark')}
              </button>
            </div>
          </div>

          {/* Language */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Globe className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900">{t('settings.language')}</p>
                <p className="text-xs text-slate-500">{language === 'uz' ? "Oʻzbek" : 'Русский'}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${
                  language === 'uz'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${
                  language === 'ru'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* About */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-orange-100 rounded-xl">
            <Info className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">{t('settings.about')}</h3>
            <p className="text-sm text-slate-500">{t('settings.about_subtitle')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-xl">
            <p className="text-sm text-slate-500 mb-1">{t('settings.version')}</p>
            <p className="text-lg font-black text-slate-900">1.0.0</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl">
            <p className="text-sm text-slate-500 mb-1">Foydalanuvchi</p>
            <p className="text-lg font-black text-slate-900">{user?.name || 'Admin'}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
