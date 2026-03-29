'use client';

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
  Legend,
  Cell,
} from 'recharts';
import { attendanceCorrelationData } from '@/data/mockData';
import { useLanguage } from '@/i18n/LanguageContext';

const getColor = (attendance: number) => {
  if (attendance >= 90) return '#10b981';
  if (attendance >= 75) return '#3b82f6';
  if (attendance >= 60) return '#f59e0b';
  return '#ef4444';
};

export default function AttendanceCorrelationChart() {
  const { t } = useLanguage();
  const data = attendanceCorrelationData.map((item) => ({
    x: item.attendance,
    y: item.avgScore,
    z: 100,
    group: item.group,
    fill: getColor(item.attendance),
  }));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">{t('chart.attendance_correlation')}</h3>
        <p className="text-sm text-slate-500 mt-1">{t('chart.attendance_correlation_subtitle')}</p>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              type="number"
              dataKey="x"
              name={t('chart.attendance')}
              unit="%"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
              domain={[0, 100]}
              label={{ value: `${t('chart.attendance')} (%)`, position: 'insideBottom', offset: -5, fill: '#64748b', fontSize: 12 }}
            />
            <YAxis 
              type="number"
              dataKey="y"
              name={t('chart.avg_score')}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
              domain={[0, 100]}
              label={{ value: t('chart.avg_score'), angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12 }}
            />
            <ZAxis type="number" dataKey="z" range={[50, 200]} />
            <Tooltip
              cursor={{ stroke: '#f97316', strokeWidth: 1, strokeDasharray: '4 4' }}
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
            />
            <Legend
              verticalAlign="top"
              height={50}
              iconType="circle"
              formatter={() => (
                <span className="text-sm font-medium text-slate-600 ml-1">
                  {t('top_students.group')}
                </span>
              )}
            />
            <Scatter data={data} fill="#f97316">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-slate-600">90%+ {t('top_students.attendance')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-xs font-medium text-slate-600">75-89% {t('top_students.attendance')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <span className="text-xs font-medium text-slate-600">60-74% {t('top_students.attendance')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-xs font-medium text-slate-600">&lt;60% {t('top_students.attendance')}</span>
        </div>
      </div>
    </div>
  );
}
