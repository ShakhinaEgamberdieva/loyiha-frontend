'use client';

import { useParams } from 'next/navigation';
import { studentDetailsData } from '@/data/mockData';
import StudentProfile from '@/components/students/StudentProfile';
import StudentStats from '@/components/students/StudentStats';
import StudentCharts from '@/components/students/StudentCharts';

export default function StudentPage() {
  const params = useParams();
  const studentId = params.id as string;

  // Find student data
  const student = studentDetailsData[studentId];

  if (!student) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Talaba topilmadi</h1>
          <p className="text-slate-500">Bu talaba mavjud emas</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Profile */}
      <StudentProfile student={student} />

      {/* Stats */}
      <StudentStats student={student} />

      {/* Charts */}
      <StudentCharts student={student} />
    </div>
  );
}
