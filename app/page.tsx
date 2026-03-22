export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Welcome to Student Management</h1>
      <p className="text-slate-500">Select a section from the sidebar to get started.</p>
      
      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-lg">Dashboard</h3>
          <p className="text-sm text-slate-500 mt-2">Overview of system metrics and recent activities.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-lg">Students</h3>
          <p className="text-sm text-slate-500 mt-2">Manage student records, enrollment, and profiles.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-lg">Reports</h3>
          <p className="text-sm text-slate-500 mt-2">Generate and view academic and financial reports.</p>
        </div>
      </div>
    </div>
  );
}
