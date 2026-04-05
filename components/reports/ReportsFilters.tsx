'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { guruhlarData, semestersOptions, SemesterOption } from '@/data/mockData';
import { motion } from 'motion/react';
import { Calendar, Users, Filter } from 'lucide-react';

interface ReportsFiltersProps {
  selectedSemester: string;
  selectedGroup: string;
  onSemesterChange: (value: string) => void;
  onGroupChange: (value: string) => void;
  onShowReport: () => void;
}

export default function ReportsFilters({
  selectedSemester,
  selectedGroup,
  onSemesterChange,
  onGroupChange,
  onShowReport,
}: ReportsFiltersProps) {
  const { t } = useLanguage();

  const selectBaseClass = "w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl font-medium text-slate-700 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all appearance-none cursor-pointer";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-orange-100 rounded-xl">
          <Filter className="w-6 h-6 text-orange-600" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">{t('reports.title')}</h2>
          <p className="text-sm text-slate-500">{t('reports.subtitle')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Semester Select */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-600 mb-2">
            <Calendar className="w-4 h-4" />
            {t('reports.semester')}
          </label>
          <div className="relative">
            <select
              value={selectedSemester}
              onChange={(e) => onSemesterChange(e.target.value)}
              className={selectBaseClass}
            >
              <option value="">{t('reports.select_semester')}</option>
              {semestersOptions.map((sem: SemesterOption) => (
                <option key={sem.id} value={sem.id}>
                  {sem.label}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Group Select */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-600 mb-2">
            <Users className="w-4 h-4" />
            {t('reports.group')}
          </label>
          <div className="relative">
            <select
              value={selectedGroup}
              onChange={(e) => onGroupChange(e.target.value)}
              className={selectBaseClass}
            >
              <option value="">{t('reports.select_group')}</option>
              {guruhlarData.map((group) => (
                <option key={group.id} value={group.name}>
                  {group.name} - {group.course}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Show Report Button */}
        <div className="flex items-end">
          <button
            onClick={onShowReport}
            disabled={!selectedSemester || !selectedGroup}
            className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none active:scale-95"
          >
            {t('reports.show_report')}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
