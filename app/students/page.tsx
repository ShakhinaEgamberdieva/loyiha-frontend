export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Students</h1>
          <p className="text-slate-500 mt-1">Manage and view all registered students.</p>
        </div>
        <button className="bg-orange-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 w-fit">
          Add New Student
        </button>
      </div>
      
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-sm font-bold text-slate-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-600 uppercase tracking-wider">Student ID</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-600 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-sm font-bold text-slate-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                        S{i}
                      </div>
                      <span className="font-semibold text-slate-900">Student Name {i}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-sm font-medium">#STU-2024-00{i}</td>
                  <td className="px-6 py-4 text-slate-500 text-sm font-medium">Grade 10</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wide">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-orange-600 hover:text-orange-800 text-sm font-bold transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
