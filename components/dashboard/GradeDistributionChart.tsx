'use client';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { gradeDistributionData } from '@/data/mockData';
import { useLanguage } from '@/i18n/LanguageContext';

export default function GradeDistributionChart() {
  const { t } = useLanguage();
  const data = gradeDistributionData.map((item) => ({
    name: item.grade.split(' ')[0],
    fullName: item.grade,
    value: item.count,
    percentage: item.percentage,
    color: item.color,
  }));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">{t('chart.grade_distribution')}</h3>
        <p className="text-sm text-slate-500 mt-1">{t('chart.grade_subtitle')}</p>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={110}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
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
              formatter={(value) => {
                const item = data.find((d) => d.name === value);
                return (
                  <span className="text-sm font-medium text-slate-600 ml-1">
                    {item?.fullName}
                  </span>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-5 gap-2 mt-4 pt-4 border-t border-slate-100">
        {gradeDistributionData.map((item) => (
          <div key={item.grade} className="text-center">
            <div 
              className="w-3 h-3 rounded-full mx-auto mb-1"
              style={{ backgroundColor: item.color }}
            />
            <p className="text-xs font-bold text-slate-900">{item.percentage}%</p>
            <p className="text-[10px] text-slate-500">{item.grade.split(' ')[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
