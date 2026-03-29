'use client';

import { Mail, Phone, Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { useLanguage } from '@/i18n/LanguageContext';
import { StudentDetail } from '@/data/mockData';

interface StudentProfileProps {
  student: StudentDetail;
}

export default function StudentProfile({ student }: StudentProfileProps) {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
    >
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Orqaga</span>
      </button>

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-6 border-b border-slate-100">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-black text-3xl shadow-xl shadow-orange-500/30">
          {student.name.split(' ').map(n => n[0]).join('')}
        </div>
        
        <div className="flex-1">
          <h1 className="text-3xl font-black text-slate-900">{student.name}</h1>
          <p className="text-lg text-orange-600 font-bold mt-1">{student.group}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${student.email}`}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 rounded-xl transition-all font-medium"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
          <a
            href={`tel:${student.phone}`}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 rounded-xl transition-all font-medium"
          >
            <Phone className="w-5 h-5" />
            Qoʻngʻiroq
          </a>
        </div>
      </div>

      {/* Personal Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <Mail className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">{t('student.email')}</p>
            <p className="text-base font-bold text-slate-900 mt-1">{student.email}</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <Phone className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">{t('student.phone')}</p>
            <p className="text-base font-bold text-slate-900 mt-1">{student.phone}</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <Calendar className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">{t('student.birth_date')}</p>
            <p className="text-base font-bold text-slate-900 mt-1">
              {new Date(student.birthDate).toLocaleDateString('uz-UZ', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <MapPin className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">{t('student.address')}</p>
            <p className="text-base font-bold text-slate-900 mt-1">{student.address}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
