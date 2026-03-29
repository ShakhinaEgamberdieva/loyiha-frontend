'use client';

import { Users, BookOpen, TrendingUp, Award, Calendar } from 'lucide-react';
import {
  StatCard,
  GroupsPerformanceChart,
  GradeDistributionChart,
  PerformanceTrendChart,
  AttendanceCorrelationChart,
  TopStudents,
  StudentsAtRisk,
  ActivityFeed,
} from '@/components/dashboard';
import {
  totalStudents,
  totalGroups,
  avgScore,
  scoreTrend,
  scoreTrendValue,
  avgGPA,
} from '@/data/mockData';
import { useLanguage } from '@/i18n/LanguageContext';

export default function DashboardPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            {t('dashboard.title')} <span className="text-orange-500">{t('dashboard.overview')}</span>
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            {t('dashboard.current_month')} <span className="text-orange-600 font-bold">{t('stats.avg_performance')}</span>
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
            <Calendar className="w-5 h-5" />
            {t('dashboard.schedule')}
          </button>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30 flex items-center gap-2 active:scale-95">
            <TrendingUp className="w-5 h-5" />
            {t('dashboard.report')}
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title={t('stats.total_groups')}
          value={totalGroups}
          icon={BookOpen}
          color="bg-orange-100 text-orange-600"
        />
        <StatCard
          title={t('stats.total_students')}
          value={totalStudents}
          icon={Users}
          color="bg-blue-100 text-blue-600"
        />
        <StatCard
          title={t('stats.avg_performance')}
          value={avgScore}
          suffix="%"
          icon={TrendingUp}
          trend={scoreTrend}
          trendValue={parseFloat(scoreTrendValue)}
          color="bg-emerald-100 text-emerald-600"
        />
        <StatCard
          title={t('stats.avg_gpa')}
          value={avgGPA}
          suffix="/4.0"
          icon={Award}
          color="bg-purple-100 text-purple-600"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <GroupsPerformanceChart />
        <GradeDistributionChart />
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <PerformanceTrendChart />
        <AttendanceCorrelationChart />
      </div>

      {/* Top Students & At Risk */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TopStudents />
        </div>
        <div>
          <StudentsAtRisk />
        </div>
      </div>

      {/* Activity Feed */}
      <ActivityFeed />
    </div>
  );
}
