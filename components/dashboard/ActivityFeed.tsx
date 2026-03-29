'use client';

import { motion } from 'motion/react';
import { CheckCircle, AlertCircle, Info, Clock } from 'lucide-react';
import { activityData } from '@/data/mockData';
import { useLanguage } from '@/i18n/LanguageContext';

const iconMap = {
  check: CheckCircle,
  alert: AlertCircle,
  info: Info,
  star: CheckCircle,
};

const typeStyles = {
  success: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    iconBg: 'bg-emerald-500',
    textColor: 'text-emerald-700',
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    iconBg: 'bg-amber-500',
    textColor: 'text-amber-700',
  },
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    iconBg: 'bg-blue-500',
    textColor: 'text-blue-700',
  },
};

export default function ActivityFeed() {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-slate-400" />
            {t('activity.title')}
          </h3>
          <p className="text-sm text-slate-500 mt-1">{t('activity.subtitle')}</p>
        </div>
      </div>

      <div className="space-y-3">
        {activityData.map((activity, index) => {
          const Icon = iconMap[activity.icon as keyof typeof iconMap] || Info;
          const styles = typeStyles[activity.type];

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-start gap-4 p-4 rounded-xl ${styles.bg} ${styles.border} border transition-all hover:shadow-md`}
            >
              <div className={`w-10 h-10 rounded-full ${styles.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <Icon className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold ${styles.textColor}`}>
                  {activity.studentName}
                </p>
                <p className="text-sm text-slate-700 mt-0.5">{activity.action}</p>
                <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-3 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 font-semibold text-sm transition-all">
        {t('activity.show_all')}
      </button>
    </div>
  );
}
