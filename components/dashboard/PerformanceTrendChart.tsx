'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { performanceTrendData } from '@/data/mockData';
import { useLanguage } from '@/i18n/LanguageContext';

export default function PerformanceTrendChart() {
  const { t } = useLanguage();
  const colors = {
    cs101: '#f97316',
    cs102: '#3b82f6',
    math201: '#10b981',
    phys301: '#8b5cf6',
  };

  const names = {
    cs101: 'CS-101',
    cs102: 'CS-102',
    math201: 'MATH-201',
    phys301: 'PHYS-301',
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">{t('chart.performance_trend')}</h3>
        <p className="text-sm text-slate-500 mt-1">{t('chart.performance_trend_subtitle')}</p>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={performanceTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCs101" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.cs101} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.cs101} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorCs102" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.cs102} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.cs102} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorMath201" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.math201} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.math201} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPhys301" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.phys301} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.phys301} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
              domain={[50, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
              cursor={{ stroke: '#f97316', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Legend
              verticalAlign="top"
              height={40}
              iconType="circle"
              formatter={(value) => (
                <span className="text-sm font-medium text-slate-600 ml-1">
                  {names[value as keyof typeof names]}
                </span>
              )}
            />
            <Area
              type="monotone"
              dataKey="cs101"
              stroke={colors.cs101}
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorCs101)"
            />
            <Area
              type="monotone"
              dataKey="cs102"
              stroke={colors.cs102}
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorCs102)"
            />
            <Area
              type="monotone"
              dataKey="math201"
              stroke={colors.math201}
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorMath201)"
            />
            <Area
              type="monotone"
              dataKey="phys301"
              stroke={colors.phys301}
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPhys301)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
