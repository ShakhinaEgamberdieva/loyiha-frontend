'use client';

import { useParams } from 'next/navigation';
import { guruhlarData, groupStudentsData } from '@/data/mockData';
import GroupStats from '@/components/groups/GroupStats';
import GroupCharts from '@/components/groups/GroupCharts';
import GroupStudentsTable from '@/components/groups/GroupStudentsTable';

export default function GroupPage() {
  const params = useParams();
  const groupId = params.id as string;

  // Find group data
  const group = guruhlarData.find(g => g.id === groupId);

  if (!group) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Guruh topilmadi</h1>
          <p className="text-slate-500">Bu guruh mavjud emas</p>
        </div>
      </div>
    );
  }

  // Get students for this group (use group name as key)
  const students = groupStudentsData[group.name] || [];

  return (
    <div className="space-y-8">
      {/* Stats */}
      <GroupStats
        groupName={group.name}
        course={group.course}
        semester={group.semester}
        students={group.students}
        avgScore={group.avgScore}
        avgAttendance={group.avgAttendance}
        avgGPA={group.avgGPA}
      />

      {/* Charts */}
      {students.length > 0 && <GroupCharts students={students} />}

      {/* Students Table */}
      <GroupStudentsTable students={students} groupName={group.name} />
    </div>
  );
}
