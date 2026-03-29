'use client';

import { motion } from 'motion/react';
import { AlertTriangle, Mail, TrendingDown } from 'lucide-react';
import { studentsData } from '@/data/mockData';
import { useLanguage } from '@/i18n/LanguageContext';

export default function StudentsAtRisk() {
  const { t } = useLanguage();
  const atRiskStudents = [...studentsData]
    .filter((s) => s.gpa < 2.0)
    .sort((a, b) => a.gpa - b.gpa);

  const getRiskLevel = (gpa: number) => {
    if (gpa < 1.8) return { label: t('students_at_risk.critical'), color: 'bg-red-500' };
    if (gpa < 1.9) return { label: t('students_at_risk.high'), color: 'bg-orange-500' };
    return { label: t('students_at_risk.medium'), color: 'bg-amber-500' };
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            {t('students_at_risk.title')}
          </h3>
          <p className="text-sm text-slate-500 mt-1">{t('students_at_risk.subtitle')}</p>
        </div>
        <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-red-100 text-red-700">
          {atRiskStudents.length} {t('students_at_risk.students')}
        </span>
      </div>

      <div className="space-y-4">
        {atRiskStudents.map((student, index) => {
          const riskLevel = getRiskLevel(student.gpa);
          return (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-4 rounded-xl bg-red-50 border border-red-100 hover:border-red-200 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {student.name.split(' ').map((n) => n[0]).join('')}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-slate-900">{student.name}</h4>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold text-white ${riskLevel.color}`}
                    >
                      {riskLevel.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-slate-500">{student.group}</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <TrendingDown className="w-3.5 h-3.5" />
                      GPA: <span className="font-bold text-red-600">{student.gpa.toFixed(2)}</span>
                    </span>
                    <span className="text-slate-500">
                      {t('top_students.attendance')}: <span className="font-bold text-slate-700">{student.attendance}%</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${student.email}`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white hover:bg-orange-50 text-slate-500 hover:text-orange-600 transition-all border border-slate-200"
                    title="Написать письмо"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Progress bars */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500">{t('students_at_risk.gpa_progress')}</span>
                    <span className="text-slate-700 font-medium">{(student.gpa / 4 * 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        student.gpa < 1.8 ? 'bg-red-500' : 'bg-orange-500'
                      }`}
                      style={{ width: `${(student.gpa / 4) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500">{t('top_students.attendance')}</span>
                    <span className="text-slate-700 font-medium">{student.attendance}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        student.attendance < 60
                          ? 'bg-red-500'
                          : student.attendance < 75
                          ? 'bg-orange-500'
                          : 'bg-emerald-500'
                      }`}
                      style={{ width: `${student.attendance}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
