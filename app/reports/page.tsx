'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/i18n/LanguageContext';
import { semesterReportsData, semestersOptions } from '@/data/mockData';
import ReportsFilters from '@/components/reports/ReportsFilters';
import ReportStats from '@/components/reports/ReportStats';
import ReportTable from '@/components/reports/ReportTable';
import { FileText } from 'lucide-react';

export default function ReportsPage() {
  const { t } = useLanguage();
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [showReport, setShowReport] = useState(false);

  const handleShowReport = () => {
    if (selectedSemester && selectedGroup) {
      setShowReport(true);
    }
  };

  // Find report data
  const reportKey = `${selectedGroup}-${selectedSemester}`;
  const report = semesterReportsData[reportKey];

  // Find semester label
  const semesterOption = semestersOptions.find(s => s.id === selectedSemester);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black tracking-tight text-slate-900">
          {t('reports.title')} <span className="text-orange-500">📊</span>
        </h1>
        <p className="text-slate-500 mt-2 font-medium">{t('reports.subtitle')}</p>
      </div>

      {/* Filters */}
      <ReportsFilters
        selectedSemester={selectedSemester}
        selectedGroup={selectedGroup}
        onSemesterChange={(value) => {
          setSelectedSemester(value);
          setShowReport(false);
        }}
        onGroupChange={(value) => {
          setSelectedGroup(value);
          setShowReport(false);
        }}
        onShowReport={handleShowReport}
      />

      {/* No Data State */}
      {!showReport && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm"
        >
          <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6">
            <FileText className="w-12 h-12 text-orange-300" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{t('reports.no_data')}</h3>
          <p className="text-slate-500 text-sm">Semestr va guruhni tanlab, &quot;Hisobotni ko&apos;rsatish&quot; tugmasini bosing</p>
        </motion.div>
      )}

      {/* Report Data */}
      {showReport && report && (
        <>
          <ReportStats
            report={report}
            semesterLabel={semesterOption?.label || ''}
          />
          <ReportTable
            report={report}
            students={report.studentsList}
          />
        </>
      )}

      {/* No Data Found */}
      {showReport && !report && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm"
        >
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <FileText className="w-12 h-12 text-red-300" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{t('reports.no_data_found')}</h3>
          <p className="text-slate-500 text-sm">Bu guruh va semestr uchun maʼlumot mavjud emas</p>
        </motion.div>
      )}
    </div>
  );
}
