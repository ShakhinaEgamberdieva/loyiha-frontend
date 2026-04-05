'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Bell, Mail, Smartphone, FileText } from 'lucide-react';

export default function NotificationSettings() {
  const { t } = useLanguage();
  
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [reportNotifs, setReportNotifs] = useState(false);

  const Toggle = ({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) => (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-12 h-7 rounded-full transition-colors ${
        checked ? 'bg-orange-500' : 'bg-slate-300'
      }`}
    >
      <div
        className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-orange-100 rounded-xl">
          <Bell className="w-6 h-6 text-orange-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{t('settings.notifications')}</h3>
          <p className="text-sm text-slate-500">{t('settings.notifications_subtitle')}</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Email Notifications */}
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-orange-50/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Mail className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="font-bold text-slate-900">{t('settings.email_notifications')}</p>
              <p className="text-xs text-slate-500">Email orqali bildirishnomalar</p>
            </div>
          </div>
          <Toggle checked={emailNotifs} onChange={setEmailNotifs} />
        </div>

        {/* Push Notifications */}
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-orange-50/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Smartphone className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="font-bold text-slate-900">{t('settings.push_notifications')}</p>
              <p className="text-xs text-slate-500">Brauzer bildirishnomalari</p>
            </div>
          </div>
          <Toggle checked={pushNotifs} onChange={setPushNotifs} />
        </div>

        {/* Report Notifications */}
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-orange-50/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <FileText className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="font-bold text-slate-900">{t('settings.report_notifications')}</p>
              <p className="text-xs text-slate-500">Hisobot tayyor boʻlganda</p>
            </div>
          </div>
          <Toggle checked={reportNotifs} onChange={setReportNotifs} />
        </div>
      </div>
    </motion.div>
  );
}
