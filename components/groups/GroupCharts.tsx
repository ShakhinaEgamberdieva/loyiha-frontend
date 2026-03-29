'use client';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ZAxis,
} from 'recharts';
import { useLanguage } from '@/i18n/LanguageContext';
import { GroupStudent } from '@/data/mockData';

interface GroupChartsProps {
  students: GroupStudent[];
}

export default function GroupCharts({ students }: GroupChartsProps) {
  const { t } = useLanguage();

  // Grade distribution data
  const gradeData = [
    { name: 'A (90-100)', value: students.filter(s => s.avgScore >= 90).length, color: '#10b981' },
    { name: 'B (80-89)', value: students.filter(s => s.avgScore >= 80 && s.avgScore < 90).length, color: '#3b82f6' },
    { name: 'C (70-79)', value: students.filter(s => s.avgScore >= 70 && s.avgScore < 80).length, color: '#f59e0b' },
    { name: 'D (60-69)', value: students.filter(s => s.avgScore >= 60 && s.avgScore < 70).length, color: '#f97316' },
    { name: 'F (<60)', value: students.filter(s => s.avgScore < 60).length, color: '#ef4444' },
  ].filter(d => d.value > 0);

  // Attendance vs Performance scatter data
  const scatterData = students.map(s => ({
    x: s.attendance,
    y: s.avgScore,
    z: 100,
    name: s.name,
    fill: s.attendance >= 90 ? '#10b981' : s.attendance >= 75 ? '#3b82f6' : s.attendance >= 60 ? '#f59e0b' : '#ef4444',
  }));

  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
      {/* Grade Distribution */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900">Baholar taqsimoti</h3>
          <p className="text-sm text-slate-500 mt-1">Guruh boʻyicha baholar</p>
        </div>
        
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={gradeData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={110}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {gradeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={50}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Attendance vs Performance */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900">Davomat va oʻzlashtirish</h3>
          <p className="text-sm text-slate-500 mt-1">Har bir talaba uchun</p>
        </div>
        
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                type="number"
                dataKey="x"
                name={t('student.attendance')}
                unit="%"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                domain={[0, 100]}
              />
              <YAxis 
                type="number"
                dataKey="y"
                name={t('group.avg_score')}
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                domain={[0, 100]}
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
              <Scatter data={scatterData} fill="#f97316">
                {scatterData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-slate-600">90%+</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-xs font-medium text-slate-600">75-89%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-xs font-medium text-slate-600">60-74%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-xs font-medium text-slate-600">&lt;60%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
