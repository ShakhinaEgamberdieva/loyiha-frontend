// Types
export interface GroupStat {
  id: string;
  name: string;
  students: number;
  avgScore: number;
  trend: 'up' | 'down';
  trendValue: number;
}

export interface GroupItem {
  id: string;
  name: string;
  students: number;
  course: string;
  semester: number;
  avgScore: number;
  avgAttendance: number;
  avgGPA: number;
}

export interface GroupStudent {
  id: string;
  name: string;
  email: string;
  gpa: number;
  attendance: number;
  avgScore: number;
  avatar?: string;
}

export interface StudentDetail {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  address: string;
  group: string;
  gpa: number;
  attendance: number;
  avgScore: number;
  missedClasses: number;
  avatar?: string;
  grades: { subject: string; grade: number; credits: number }[];
  gpaTrend: { month: string; gpa: number }[];
}

export interface Student {
  id: string;
  name: string;
  group: string;
  gpa: number;
  attendance: number;
  avatar?: string;
  email: string;
}

export interface GradeDistribution {
  grade: string;
  count: number;
  percentage: number;
  color: string;
}

export interface PerformanceTrend {
  month: string;
  cs101: number;
  cs102: number;
  math201: number;
  phys301: number;
}

export interface AttendanceCorrelation {
  id: string;
  attendance: number;
  avgScore: number;
  group: string;
}

export interface Activity {
  id: string;
  studentName: string;
  action: string;
  time: string;
  type: 'success' | 'warning' | 'info';
  icon: string;
}

// Mock Data
export const groupsData: GroupStat[] = [
  { id: '1', name: 'CS-101', students: 24, avgScore: 82.5, trend: 'up', trendValue: 5.2 },
  { id: '2', name: 'CS-102', students: 28, avgScore: 78.3, trend: 'down', trendValue: 2.1 },
  { id: '3', name: 'CS-201', students: 22, avgScore: 85.7, trend: 'up', trendValue: 3.8 },
  { id: '4', name: 'CS-202', students: 26, avgScore: 76.2, trend: 'down', trendValue: 1.5 },
  { id: '5', name: 'CS-301', students: 20, avgScore: 88.1, trend: 'up', trendValue: 4.3 },
  { id: '6', name: 'CS-302', students: 25, avgScore: 79.9, trend: 'up', trendValue: 2.7 },
  { id: '7', name: 'MATH-201', students: 30, avgScore: 72.4, trend: 'down', trendValue: 3.2 },
  { id: '8', name: 'MATH-301', students: 18, avgScore: 81.6, trend: 'up', trendValue: 1.9 },
  { id: '9', name: 'PHYS-201', students: 27, avgScore: 74.8, trend: 'down', trendValue: 2.4 },
  { id: '10', name: 'PHYS-301', students: 21, avgScore: 83.2, trend: 'up', trendValue: 3.1 },
  { id: '11', name: 'ENG-101', students: 32, avgScore: 86.5, trend: 'up', trendValue: 4.7 },
  { id: '12', name: 'ENG-201', students: 29, avgScore: 80.1, trend: 'up', trendValue: 2.2 },
];

export const studentsData: Student[] = [
  { id: '1', name: 'Alex Johnson', group: 'CS-301', gpa: 3.95, attendance: 98, email: 'alex.j@edu.com' },
  { id: '2', name: 'Sarah Williams', group: 'CS-301', gpa: 3.88, attendance: 95, email: 'sarah.w@edu.com' },
  { id: '3', name: 'Michael Brown', group: 'CS-201', gpa: 3.82, attendance: 92, email: 'michael.b@edu.com' },
  { id: '4', name: 'Emily Davis', group: 'ENG-101', gpa: 3.79, attendance: 97, email: 'emily.d@edu.com' },
  { id: '5', name: 'David Wilson', group: 'CS-101', gpa: 3.75, attendance: 90, email: 'david.w@edu.com' },
  { id: '6', name: 'Jessica Martinez', group: 'MATH-301', gpa: 3.71, attendance: 94, email: 'jessica.m@edu.com' },
  { id: '7', name: 'James Anderson', group: 'PHYS-301', gpa: 3.68, attendance: 89, email: 'james.a@edu.com' },
  { id: '8', name: 'Jennifer Taylor', group: 'CS-302', gpa: 3.65, attendance: 93, email: 'jennifer.t@edu.com' },
  { id: '9', name: 'Robert Thomas', group: 'CS-201', gpa: 3.62, attendance: 88, email: 'robert.t@edu.com' },
  { id: '10', name: 'Lisa Garcia', group: 'ENG-201', gpa: 3.58, attendance: 91, email: 'lisa.g@edu.com' },
  { id: '11', name: 'Daniel Lee', group: 'CS-102', gpa: 1.85, attendance: 62, email: 'daniel.l@edu.com' },
  { id: '12', name: 'Amanda White', group: 'MATH-201', gpa: 1.92, attendance: 58, email: 'amanda.w@edu.com' },
  { id: '13', name: 'Christopher Harris', group: 'PHYS-201', gpa: 1.78, attendance: 55, email: 'chris.h@edu.com' },
  { id: '14', name: 'Michelle Clark', group: 'CS-202', gpa: 1.95, attendance: 64, email: 'michelle.c@edu.com' },
  { id: '15', name: 'Matthew Lewis', group: 'CS-102', gpa: 1.82, attendance: 60, email: 'matthew.l@edu.com' },
];

export const gradeDistributionData: GradeDistribution[] = [
  { grade: 'A (90-100)', count: 89, percentage: 35.6, color: '#10b981' },
  { grade: 'B (80-89)', count: 78, percentage: 31.2, color: '#3b82f6' },
  { grade: 'C (70-79)', count: 52, percentage: 20.8, color: '#f59e0b' },
  { grade: 'D (60-69)', count: 19, percentage: 7.6, color: '#f97316' },
  { grade: 'F (<60)', count: 12, percentage: 4.8, color: '#ef4444' },
];

export const performanceTrendData: PerformanceTrend[] = [
  { month: 'Sep', cs101: 78, cs102: 75, math201: 72, phys301: 80 },
  { month: 'Oct', cs101: 80, cs102: 77, math201: 74, phys301: 82 },
  { month: 'Nov', cs101: 82, cs102: 76, math201: 71, phys301: 81 },
  { month: 'Dec', cs101: 81, cs102: 78, math201: 73, phys301: 83 },
  { month: 'Jan', cs101: 84, cs102: 79, math201: 75, phys301: 85 },
  { month: 'Feb', cs101: 85, cs102: 78, math201: 72, phys301: 84 },
];

export const attendanceCorrelationData: AttendanceCorrelation[] = [
  { id: '1', attendance: 98, avgScore: 95, group: 'CS-301' },
  { id: '2', attendance: 95, avgScore: 92, group: 'CS-301' },
  { id: '3', attendance: 92, avgScore: 88, group: 'CS-201' },
  { id: '4', attendance: 97, avgScore: 90, group: 'ENG-101' },
  { id: '5', attendance: 90, avgScore: 85, group: 'CS-101' },
  { id: '6', attendance: 94, avgScore: 89, group: 'MATH-301' },
  { id: '7', attendance: 89, avgScore: 84, group: 'PHYS-301' },
  { id: '8', attendance: 93, avgScore: 87, group: 'CS-302' },
  { id: '9', attendance: 88, avgScore: 82, group: 'CS-201' },
  { id: '10', attendance: 91, avgScore: 86, group: 'ENG-201' },
  { id: '11', attendance: 62, avgScore: 58, group: 'CS-102' },
  { id: '12', attendance: 58, avgScore: 52, group: 'MATH-201' },
  { id: '13', attendance: 55, avgScore: 48, group: 'PHYS-201' },
  { id: '14', attendance: 64, avgScore: 60, group: 'CS-202' },
  { id: '15', attendance: 60, avgScore: 55, group: 'CS-102' },
  { id: '16', attendance: 75, avgScore: 70, group: 'CS-101' },
  { id: '17', attendance: 80, avgScore: 76, group: 'CS-102' },
  { id: '18', attendance: 72, avgScore: 68, group: 'MATH-201' },
  { id: '19', attendance: 85, avgScore: 82, group: 'CS-201' },
  { id: '20', attendance: 78, avgScore: 74, group: 'PHYS-201' },
];

export const activityData: Activity[] = [
  { id: '1', studentName: 'Alex Johnson', action: 'Сдал экзамен по CS-301 на 98%', time: '5 мин назад', type: 'success', icon: 'check' },
  { id: '2', studentName: 'Daniel Lee', action: 'Пропустил лекцию по CS-102', time: '15 мин назад', type: 'warning', icon: 'alert' },
  { id: '3', studentName: 'Sarah Williams', action: 'Завершил лабораторную работу', time: '32 мин назад', type: 'success', icon: 'check' },
  { id: '4', studentName: 'Christopher Harris', action: 'Низкая посещаемость (<60%)', time: '1 час назад', type: 'warning', icon: 'alert' },
  { id: '5', studentName: 'Emily Davis', action: 'Получил грант за успеваемость', time: '2 часа назад', type: 'success', icon: 'star' },
  { id: '6', studentName: 'Michael Brown', action: 'Зарегистрировался на курс CS-301', time: '3 часа назад', type: 'info', icon: 'info' },
  { id: '7', studentName: 'Jessica Martinez', action: 'Сдал курсовую работу', time: '4 часа назад', type: 'success', icon: 'check' },
  { id: '8', studentName: 'Amanda White', action: 'Не сдал домашнее задание', time: '5 часов назад', type: 'warning', icon: 'alert' },
];

// Guruhlar data for dropdown
export const guruhlarData: GroupItem[] = [
  { id: '1', name: 'CS-101', students: 24, course: 'Computer Science', semester: 1, avgScore: 82.5, avgAttendance: 91, avgGPA: 3.45 },
  { id: '2', name: 'CS-102', students: 28, course: 'Computer Science', semester: 1, avgScore: 78.3, avgAttendance: 88, avgGPA: 3.21 },
  { id: '3', name: 'CS-201', students: 22, course: 'Computer Science', semester: 3, avgScore: 85.7, avgAttendance: 93, avgGPA: 3.62 },
  { id: '4', name: 'CS-202', students: 26, course: 'Computer Science', semester: 3, avgScore: 76.2, avgAttendance: 85, avgGPA: 3.08 },
  { id: '5', name: 'CS-301', students: 20, course: 'Computer Science', semester: 5, avgScore: 88.1, avgAttendance: 95, avgGPA: 3.78 },
  { id: '6', name: 'CS-302', students: 25, course: 'Computer Science', semester: 5, avgScore: 79.9, avgAttendance: 89, avgGPA: 3.35 },
  { id: '7', name: 'MATH-201', students: 30, course: 'Mathematics', semester: 3, avgScore: 72.4, avgAttendance: 82, avgGPA: 2.95 },
  { id: '8', name: 'MATH-301', students: 18, course: 'Mathematics', semester: 5, avgScore: 81.6, avgAttendance: 90, avgGPA: 3.42 },
  { id: '9', name: 'PHYS-201', students: 27, course: 'Physics', semester: 3, avgScore: 74.8, avgAttendance: 84, avgGPA: 3.12 },
  { id: '10', name: 'PHYS-301', students: 21, course: 'Physics', semester: 5, avgScore: 83.2, avgAttendance: 92, avgGPA: 3.55 },
  { id: '11', name: 'ENG-101', students: 32, course: 'English', semester: 1, avgScore: 86.5, avgAttendance: 94, avgGPA: 3.68 },
  { id: '12', name: 'ENG-201', students: 29, course: 'English', semester: 3, avgScore: 80.1, avgAttendance: 88, avgGPA: 3.28 },
];

// Group students data
export const groupStudentsData: Record<string, GroupStudent[]> = {
  'CS-101': [
    { id: '1', name: 'Alex Johnson', email: 'alex.j@edu.com', gpa: 3.95, attendance: 98, avgScore: 95 },
    { id: '2', name: 'Sarah Williams', email: 'sarah.w@edu.com', gpa: 3.88, attendance: 95, avgScore: 92 },
    { id: '3', name: 'Michael Brown', email: 'michael.b@edu.com', gpa: 3.82, attendance: 92, avgScore: 88 },
    { id: '4', name: 'Emily Davis', email: 'emily.d@edu.com', gpa: 3.79, attendance: 97, avgScore: 90 },
    { id: '5', name: 'David Wilson', email: 'david.w@edu.com', gpa: 3.75, attendance: 90, avgScore: 85 },
  ],
  'CS-102': [
    { id: '6', name: 'Jessica Martinez', email: 'jessica.m@edu.com', gpa: 3.71, attendance: 94, avgScore: 89 },
    { id: '7', name: 'James Anderson', email: 'james.a@edu.com', gpa: 3.68, attendance: 89, avgScore: 84 },
    { id: '8', name: 'Jennifer Taylor', email: 'jennifer.t@edu.com', gpa: 3.65, attendance: 93, avgScore: 87 },
    { id: '9', name: 'Robert Thomas', email: 'robert.t@edu.com', gpa: 3.62, attendance: 88, avgScore: 82 },
    { id: '10', name: 'Lisa Garcia', email: 'lisa.g@edu.com', gpa: 3.58, attendance: 91, avgScore: 86 },
  ],
};

// Student details data
export const studentDetailsData: Record<string, StudentDetail> = {
  '1': {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.j@edu.com',
    phone: '+998 90 123 45 67',
    birthDate: '2005-03-15',
    address: 'Toshkent, Yunusobod tumani',
    group: 'CS-101',
    gpa: 3.95,
    attendance: 98,
    avgScore: 95,
    missedClasses: 2,
    grades: [
      { subject: 'Dasturlash asoslari', grade: 98, credits: 4 },
      { subject: 'Oliy matematika', grade: 95, credits: 4 },
      { subject: 'Ingliz tili', grade: 92, credits: 3 },
      { subject: 'Fizika', grade: 90, credits: 3 },
    ],
    gpaTrend: [
      { month: 'Sen', gpa: 3.85 },
      { month: 'Okt', gpa: 3.88 },
      { month: 'Noy', gpa: 3.90 },
      { month: 'Dek', gpa: 3.92 },
      { month: 'Yan', gpa: 3.94 },
      { month: 'Fev', gpa: 3.95 },
    ],
  },
  '2': {
    id: '2',
    name: 'Sarah Williams',
    email: 'sarah.w@edu.com',
    phone: '+998 91 234 56 78',
    birthDate: '2005-07-22',
    address: 'Toshkent, Chilonzor tumani',
    group: 'CS-101',
    gpa: 3.88,
    attendance: 95,
    avgScore: 92,
    missedClasses: 4,
    grades: [
      { subject: 'Dasturlash asoslari', grade: 95, credits: 4 },
      { subject: 'Oliy matematika', grade: 92, credits: 4 },
      { subject: 'Ingliz tili', grade: 90, credits: 3 },
      { subject: 'Fizika', grade: 88, credits: 3 },
    ],
    gpaTrend: [
      { month: 'Sen', gpa: 3.75 },
      { month: 'Okt', gpa: 3.78 },
      { month: 'Noy', gpa: 3.82 },
      { month: 'Dek', gpa: 3.85 },
      { month: 'Yan', gpa: 3.86 },
      { month: 'Fev', gpa: 3.88 },
    ],
  },
};

// Calculated stats
export const totalStudents = groupsData.reduce((sum, g) => sum + g.students, 0);
export const totalGroups = groupsData.length;
export const avgAttendance = Math.round(studentsData.reduce((sum, s) => sum + s.attendance, 0) / studentsData.length);
export const avgGPA = (studentsData.reduce((sum, s) => sum + s.gpa, 0) / studentsData.length).toFixed(2);

// Calculate overall average score from groups
export const avgScore = (groupsData.reduce((sum, g) => sum + g.avgScore, 0) / groupsData.length).toFixed(1);

// Calculate trend for overall score (compare first 6 vs last 6 groups)
const firstHalfAvg = groupsData.slice(0, 6).reduce((sum, g) => sum + g.avgScore, 0) / 6;
const secondHalfAvg = groupsData.slice(6).reduce((sum, g) => sum + g.avgScore, 0) / 6;
export const scoreTrend: 'up' | 'down' = secondHalfAvg >= firstHalfAvg ? 'up' : 'down';
export const scoreTrendValue = Math.abs(secondHalfAvg - firstHalfAvg).toFixed(1);
