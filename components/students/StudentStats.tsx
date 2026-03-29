'use client';

import { Award, TrendingUp, BookOpen, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/i18n/LanguageContext';
import { StudentDetail } from '@/data/mockData';

interface StudentStatsProps {
  student: StudentDetail;
}

export default function StudentStats({ student }: StudentStatsProps) {
  const { t } = useLanguage();

  const stats = [
    {
      label: t('student.gpa'),
      value: student.gpa.toFixed(2),
      suffix: '/4.0',
      icon: Award,
      color: 'bg-purple-100 text-purple-600',
      trend: student.gpa >= 3.5 ? 'up' : 'down',
    },
    {
      label: t('student.attendance'),
      value: student.attendance,
      suffix: '%',
      icon: TrendingUp,
      color: 'bg-blue-100 text-blue-600',
      trend: student.attendance >= 90 ? 'up' : 'down',
    },
    {
      label: t('student.avg_score'),
      value: student.avgScore.toFixed(1),
      suffix: '%',
      icon: BookOpen,
      color: 'bg-emerald-100 text-emerald-600',
      trend: student.avgScore >= 80 ? 'up' : 'down',
    },
    {
      label: t('student.missed'),
      value: student.missedClasses,
      suffix: '',
      icon: AlertCircle,
      color: 'bg-amber-100 text-amber-600',
      trend: student.missedClasses <= 5 ? 'up' : 'down',
    },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4, scale: 1.02 }}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
                {stat.suffix && <span className="text-sm font-bold text-slate-400">{stat.suffix}</span>}
              </div>
              
              <div className={`inline-flex items-center gap-1 mt-3 px-2.5 py-1 rounded-full text-xs font-bold ${
                stat.trend === 'up' ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50'
              }`}>
                <TrendingUp className={`w-3.5 h-3.5 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                <span>{stat.label === t('student.missed') ? (Number(stat.value) <= 5 ? 'Yaxshi' : 'Koʻp') : (stat.trend === 'up' ? 'Yaxshi' : 'Past')}</span>
              </div>
            </div>
            
            <div className={`p-4 rounded-2xl ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
