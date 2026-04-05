'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useAuthStore } from '@/store/useAuthStore';
import { User, Mail, Phone, Save } from 'lucide-react';

export default function ProfileSettings() {
  const { t } = useLanguage();
  const { user } = useAuthStore();
  
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('+998 90 123 45 67');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-orange-100 rounded-xl">
          <User className="w-6 h-6 text-orange-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{t('settings.profile')}</h3>
          <p className="text-sm text-slate-500">{t('settings.profile_subtitle')}</p>
        </div>
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-6 mb-6 pb-6 border-b border-slate-100">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-orange-500/30">
          {name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
        </div>
        <div>
          <p className="font-bold text-slate-900">{name || 'Foydalanuvchi'}</p>
          <p className="text-sm text-slate-500">{email}</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSave} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Ism
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <User className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                placeholder="Ismingiz"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              {t('settings.email')}
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <Mail className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              {t('settings.phone')}
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <Phone className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                placeholder="+998 90 123 45 67"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={`w-full md:w-auto px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
            saved
              ? 'bg-emerald-500 text-white'
              : 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30 active:scale-95'
          }`}
        >
          <Save className="w-5 h-5" />
          {saved ? t('settings.saved_success') : t('settings.save')}
        </button>
      </form>
    </motion.div>
  );
}
