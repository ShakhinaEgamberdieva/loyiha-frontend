'use client';

import { Users, TrendingUp, Award, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/i18n/LanguageContext';
import { SemesterReport } from '@/data/mockData';

interface ReportStatsProps {
  report: SemesterReport;
  semesterLabel: string;
}

export default function ReportStats({ report, semesterLabel }: ReportStatsProps) {
  const { t } = useLanguage();

  const stats = [
    {
      label: t('reports.students_count'),
      value: report.students,
      icon: Users,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      label: 'Oʻrtacha ball',
      value: `${report.avgScore.toFixed(1)}%`,
      icon: TrendingUp,
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      label: 'Oʻrtacha davomat',
      value: `${report.avgAttendance}%`,
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      label: 'Oʻrtacha GPA',
      value: report.avgGPA.toFixed(2),
      suffix: '/4.0',
      icon: Award,
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className="mb-4 px-2">
        <h3 className="text-xl font-black text-slate-900">
          {report.groupName} - <span className="text-orange-500">{semesterLabel}</span>
        </h3>
      </div>

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
                  {'suffix' in stat && stat.suffix && (
                    <span className="text-sm font-bold text-slate-400">{stat.suffix}</span>
                  )}
                </div>
              </div>
              
              <div className={`p-4 rounded-2xl ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
