export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-slate-500 mt-1">Analyze academic and financial performance.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl font-semibold hover:bg-slate-50 transition-all text-sm">
            Export PDF
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 text-sm">
            New Report
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg mb-4">Academic Performance</h3>
          <div className="h-64 bg-slate-50 rounded-2xl flex flex-col items-center justify-center border border-dashed border-slate-200">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
              <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-slate-400 text-sm font-medium">Generating visualization...</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg mb-4">Financial Summary</h3>
          <div className="h-64 bg-slate-50 rounded-2xl flex flex-col items-center justify-center border border-dashed border-slate-200">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
              <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-slate-400 text-sm font-medium">Generating visualization...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
