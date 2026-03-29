'use client';

import { Users, TrendingUp, Award, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/i18n/LanguageContext';

interface GroupStatsProps {
  groupName: string;
  course: string;
  semester: number;
  students: number;
  avgScore: number;
  avgAttendance: number;
  avgGPA: number;
}

export default function GroupStats({
  groupName,
  course,
  semester,
  students,
  avgScore,
  avgAttendance,
  avgGPA,
}: GroupStatsProps) {
  const { t } = useLanguage();

  const stats = [
    {
      label: t('group.avg_score'),
      value: avgScore.toFixed(1),
      suffix: '%',
      icon: TrendingUp,
      color: 'bg-emerald-100 text-emerald-600',
      trend: avgScore >= 80 ? 'up' : 'down',
    },
    {
      label: t('group.avg_attendance'),
      value: avgAttendance,
      suffix: '%',
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      trend: avgAttendance >= 90 ? 'up' : 'down',
    },
    {
      label: t('student.gpa'),
      value: avgGPA.toFixed(2),
      suffix: '/4.0',
      icon: Award,
      color: 'bg-purple-100 text-purple-600',
      trend: avgGPA >= 3.5 ? 'up' : 'down',
    },
    {
      label: t('sidebar.guruhlar'),
      value: students,
      suffix: '',
      icon: BookOpen,
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black tracking-tight text-slate-900">
          {groupName} <span className="text-orange-500">{course}</span>
        </h1>
        <p className="text-slate-500 mt-2 font-medium">
          {t('group.semester')} {semester} • {students} {t('group.students')}
        </p>
      </div>

      {/* Stats Grid */}
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

                {stat.trend && (
                  <div className={`inline-flex items-center gap-1 mt-3 px-2.5 py-1 rounded-full text-xs font-bold ${
                    stat.trend === 'up' ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50'
                  }`}>
                    <TrendingUp className={`w-3.5 h-3.5 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                    <span>{stat.trend === 'up' ? '+' : '-'}{Math.abs(Number(stat.value) - 75).toFixed(1)}%</span>
                  </div>
                )}
              </div>

              <div className={`p-4 rounded-2xl ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
