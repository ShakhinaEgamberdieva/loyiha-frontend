'use client';

import { motion } from 'motion/react';
import { Trophy, Medal, Award, Mail } from 'lucide-react';
import { studentsData } from '@/data/mockData';
import { useLanguage } from '@/i18n/LanguageContext';

export default function TopStudents() {
  const { t } = useLanguage();
  const topStudents = [...studentsData]
    .sort((a, b) => b.gpa - a.gpa)
    .slice(0, 8);

  const getRankIcon = (index: number) => {
    if (index === 0) return Trophy;
    if (index === 1) return Medal;
    if (index === 2) return Award;
    return null;
  };

  const getRankColor = (index: number) => {
    if (index === 0) return 'from-yellow-400 to-yellow-600';
    if (index === 1) return 'from-slate-300 to-slate-500';
    if (index === 2) return 'from-amber-600 to-amber-800';
    return 'from-slate-600 to-slate-800';
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">🏆 {t('top_students.title')}</h3>
          <p className="text-sm text-slate-500 mt-1">{t('top_students.subtitle')}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {t('top_students.rank')}
              </th>
              <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {t('top_students.student')}
              </th>
              <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {t('top_students.group')}
              </th>
              <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {t('top_students.gpa')}
              </th>
              <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {t('top_students.attendance')}
              </th>
              <th className="text-right py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {t('top_students.contact')}
              </th>
            </tr>
          </thead>
          <tbody>
            {topStudents.map((student, index) => {
              const RankIcon = getRankIcon(index);
              return (
                <motion.tr
                  key={student.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-slate-50 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4 px-4">
                    {RankIcon ? (
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getRankColor(index)} flex items-center justify-center shadow-lg`}>
                        <RankIcon className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                        <span className="text-sm font-bold text-slate-600">#{index + 1}</span>
                      </div>
                    )}
                  </td>
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
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700">
                      {student.group}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-slate-900">{student.gpa.toFixed(2)}</span>
                      <span className="text-xs text-slate-400">/4.0</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden w-24">
                        <div
                          className={`h-full rounded-full ${
                            student.attendance >= 90
                              ? 'bg-emerald-500'
                              : student.attendance >= 75
                              ? 'bg-blue-500'
                              : student.attendance >= 60
                              ? 'bg-amber-500'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${student.attendance}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-slate-700 w-10">{student.attendance}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <a
                      href={`mailto:${student.email}`}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 hover:bg-orange-50 text-slate-500 hover:text-orange-600 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
