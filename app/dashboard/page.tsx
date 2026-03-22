import { Users, BookOpen, Clock, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight, Calendar, Star } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { label: "Total Students", value: "1,234", change: "+12.5%", trend: "up", icon: Users, color: "bg-orange-500" },
    { label: "Active Courses", value: "48", change: "+2", trend: "up", icon: BookOpen, color: "bg-orange-600" },
    { label: "Attendance Rate", value: "94.2%", change: "-0.5%", trend: "down", icon: Clock, color: "bg-orange-400" },
    { label: "Pending Fees", value: "$12,450", change: "-5.2%", trend: "down", icon: DollarSign, color: "bg-orange-700" },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900">Dashboard <span className="text-orange-500">Overview</span></h1>
          <p className="text-slate-500 mt-2 font-medium">Welcome back! Your school is performing <span className="text-orange-600 font-bold">15% better</span> than last month.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
            <Calendar className="w-5 h-5" />
            Schedule
          </button>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30 flex items-center gap-2 active:scale-95">
            <TrendingUp className="w-5 h-5" />
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
            <div className="flex items-center justify-between mb-6">
              <div className={`${stat.color} p-4 rounded-2xl text-white shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black ${stat.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
              </div>
            </div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <h4 className="text-3xl font-black mt-2 text-slate-900">{stat.value}</h4>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-black text-2xl text-slate-900">Recent <span className="text-orange-500">Activities</span></h3>
            <button className="text-orange-600 text-sm font-bold hover:bg-orange-50 px-4 py-2 rounded-xl transition-colors">View All History</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-5 p-5 rounded-2xl hover:bg-orange-50/50 transition-all border border-transparent hover:border-orange-100 group">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                  <Users className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-black text-slate-900">New Student Enrollment</p>
                    <span className="text-xs font-bold text-slate-400">2h ago</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1 font-medium">John Doe has been enrolled in <span className="text-orange-600 font-bold">Grade 10 - Section A</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-black text-xl mb-8 text-slate-900">Quick <span className="text-orange-500">Actions</span></h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Add Student", icon: Users },
                { label: "New Course", icon: BookOpen },
                { label: "Schedule", icon: Clock },
                { label: "Payments", icon: DollarSign },
              ].map((action) => (
                <button key={action.label} className="p-5 rounded-2xl border-2 border-slate-50 bg-slate-50 hover:bg-white hover:border-orange-500 hover:text-orange-600 transition-all flex flex-col items-center gap-3 group shadow-sm hover:shadow-orange-500/10">
                  <action.icon className="w-7 h-7 text-slate-400 group-hover:text-orange-500 transition-colors group-hover:scale-110" />
                  <span className="text-xs font-black uppercase tracking-wider">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl text-white relative overflow-hidden shadow-2xl shadow-orange-500/40 group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <h4 className="font-black text-2xl leading-tight">Upgrade to <br />EduManager Pro</h4>
              <p className="text-sm text-white/80 mt-3 font-medium">Unlock advanced AI analytics and unlimited cloud storage for your institution.</p>
              <button className="mt-8 bg-white text-orange-600 w-full py-4 rounded-2xl text-sm font-black hover:bg-orange-50 transition-all active:scale-95 shadow-xl">
                Get Started Now
              </button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
