'use client';

import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/i18n/LanguageContext';
import { GroupStudent } from '@/data/mockData';

interface GroupStudentsTableProps {
  students: GroupStudent[];
  groupName: string;
}

export default function GroupStudentsTable({ students, groupName }: GroupStudentsTableProps) {
  const router = useRouter();
  const { t } = useLanguage();

  const handleStudentClick = (studentId: string) => {
    router.push(`/students/${studentId}`);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">📋 {t('group.students')}</h3>
          <p className="text-sm text-slate-500 mt-1">{groupName}</p>
        </div>
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
                {t('top_students.gpa')}
              </th>
              <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {t('top_students.attendance')}
              </th>
              <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {t('group.avg_score')}
              </th>
              <th className="text-right py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {t('top_students.contact')}
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <motion.tr
                key={student.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleStudentClick(student.id)}
                className="border-b border-slate-50 hover:bg-orange-50/50 transition-colors cursor-pointer group"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {student.name}
                      </p>
                      <p className="text-xs text-slate-500">{student.email}</p>
                    </div>
                  </div>
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
                <td className="py-4 px-4">
                  <span className={`text-lg font-black ${
                    student.avgScore >= 80
                      ? 'text-emerald-600'
                      : student.avgScore >= 70
                      ? 'text-blue-600'
                      : student.avgScore >= 60
                      ? 'text-amber-600'
                      : 'text-red-600'
                  }`}>
                    {student.avgScore.toFixed(1)}%
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <a
                      href={`mailto:${student.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 hover:bg-orange-50 text-slate-500 hover:text-orange-600 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <button className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-600 transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
