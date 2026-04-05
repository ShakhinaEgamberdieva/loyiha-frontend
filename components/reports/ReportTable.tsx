'use client';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { motion } from 'motion/react';
import { useLanguage } from '@/i18n/LanguageContext';
import { SemesterReport, GroupStudent } from '@/data/mockData';

interface ReportTableProps {
  report: SemesterReport;
  students: GroupStudent[];
}

export default function ReportTable({ report, students }: ReportTableProps) {
  const { t } = useLanguage();

  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
      {/* Grade Distribution Chart */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
      >
        <h3 className="text-lg font-bold text-slate-900 mb-2">Baholar taqsimoti</h3>
        <p className="text-sm text-slate-500 mb-4">Guruh boʻyicha</p>
        
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={report.gradeDistribution}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={4}
                dataKey="count"
                stroke="none"
              >
                {report.gradeDistribution.map((entry, index) => (
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
      </motion.div>

      {/* Students Table */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-900">📋 {t('group.students')}</h3>
          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700">
            {students.length} {t('group.students')}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t('top_students.student')}
                </th>
                <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  GPA
                </th>
                <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t('top_students.attendance')}
                </th>
                <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t('group.avg_score')}
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-slate-50 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{student.name}</p>
                        <p className="text-xs text-slate-500">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-lg font-black text-slate-900">{student.gpa.toFixed(2)}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            student.attendance >= 90 ? 'bg-emerald-500' :
                            student.attendance >= 75 ? 'bg-blue-500' :
                            student.attendance >= 60 ? 'bg-amber-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${student.attendance}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-slate-700 w-10">{student.attendance}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`text-lg font-black ${
                      student.avgScore >= 80 ? 'text-emerald-600' :
                      student.avgScore >= 70 ? 'text-blue-600' :
                      student.avgScore >= 60 ? 'text-amber-600' : 'text-red-600'
                    }`}>
                      {student.avgScore.toFixed(1)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
