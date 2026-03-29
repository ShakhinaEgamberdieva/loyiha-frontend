'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Legend,
} from 'recharts';
import { useLanguage } from '@/i18n/LanguageContext';
import { StudentDetail } from '@/data/mockData';

interface StudentChartsProps {
  student: StudentDetail;
}

export default function StudentCharts({ student }: StudentChartsProps) {
  const { t } = useLanguage();

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return '#10b981';
    if (grade >= 80) return '#3b82f6';
    if (grade >= 70) return '#f59e0b';
    if (grade >= 60) return '#f97316';
    return '#ef4444';
  };

  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
      {/* GPA Trend */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900">GPA dinamikasi</h3>
          <p className="text-sm text-slate-500 mt-1">Oylar boʻyicha oʻzgarish</p>
        </div>
        
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={student.gpaTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorGpa" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
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
                domain={[2, 4]}
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
              <Area
                type="monotone"
                dataKey="gpa"
                stroke="#f97316"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorGpa)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Grades by Subject */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900">{t('student.grades_history')}</h3>
          <p className="text-sm text-slate-500 mt-1">{t('student.subject')} boʻyicha</p>
        </div>
        
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={student.grades} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis 
                dataKey="subject" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }}
                dy={10}
                angle={-15}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                domain={[0, 100]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
                cursor={{ fill: '#f1f5f9' }}
              />
              <Legend />
              <Bar dataKey="grade" name={t('student.grade')} radius={[8, 8, 0, 0]}>
                {student.grades.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getGradeColor(entry.grade)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
