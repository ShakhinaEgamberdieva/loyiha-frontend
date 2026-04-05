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

export interface SemesterOption {
  id: string;
  label: string;
  year: string;
  type: 'bahorgi' | 'kuzgi';
}

export interface SemesterReport {
  groupId: string;
  groupName: string;
  semesterId: string;
  students: number;
  avgScore: number;
  avgAttendance: number;
  avgGPA: number;
  gradeDistribution: { grade: string; count: number; color: string }[];
  studentsList: GroupStudent[];
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
  { id: '1', name: 'Abdulloh Karimov', group: 'CS-301', gpa: 3.95, attendance: 98, email: 'abdulloh.k@edu.uz' },
  { id: '2', name: 'Nilufar Rahimova', group: 'CS-301', gpa: 3.88, attendance: 95, email: 'nilufar.r@edu.uz' },
  { id: '3', name: 'Sardorbek Toshmatov', group: 'CS-201', gpa: 3.82, attendance: 92, email: 'sardorbek.t@edu.uz' },
  { id: '4', name: 'Madina Usmonova', group: 'ENG-101', gpa: 3.79, attendance: 97, email: 'madina.u@edu.uz' },
  { id: '5', name: 'Jasurbek Aliyev', group: 'CS-101', gpa: 3.75, attendance: 90, email: 'jasurbek.a@edu.uz' },
  { id: '6', name: 'Gulnoza Azimova', group: 'MATH-301', gpa: 3.71, attendance: 94, email: 'gulnoza.a@edu.uz' },
  { id: '7', name: 'Sherzod Ergashev', group: 'PHYS-301', gpa: 3.68, attendance: 89, email: 'sherzod.e@edu.uz' },
  { id: '8', name: 'Zarina Xolmatova', group: 'CS-302', gpa: 3.65, attendance: 93, email: 'zarina.x@edu.uz' },
  { id: '9', name: 'Bobur Mirzayev', group: 'CS-201', gpa: 3.62, attendance: 88, email: 'bobur.m@edu.uz' },
  { id: '10', name: 'Laylo Nematova', group: 'ENG-201', gpa: 3.58, attendance: 91, email: 'laylo.n@edu.uz' },
  { id: '11', name: 'Sanjar Qodirov', group: 'CS-102', gpa: 1.85, attendance: 62, email: 'sanjar.q@edu.uz' },
  { id: '12', name: 'Yulduz Isoqova', group: 'MATH-201', gpa: 1.92, attendance: 58, email: 'yulduz.i@edu.uz' },
  { id: '13', name: 'Temur Boymatov', group: 'PHYS-201', gpa: 1.78, attendance: 55, email: 'temur.b@edu.uz' },
  { id: '14', name: 'Barno Abdullayeva', group: 'CS-202', gpa: 1.95, attendance: 64, email: 'barno.a@edu.uz' },
  { id: '15', name: 'Diyor Xasanov', group: 'CS-102', gpa: 1.82, attendance: 60, email: 'diyor.x@edu.uz' },
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
  { id: '1', studentName: 'Abdulloh Karimov', action: 'Сдал экзамен по CS-301 на 98%', time: '5 мин назад', type: 'success', icon: 'check' },
  { id: '2', studentName: 'Sanjar Qodirov', action: 'Пропустил лекцию по CS-102', time: '15 мин назад', type: 'warning', icon: 'alert' },
  { id: '3', studentName: 'Nilufar Rahimova', action: 'Завершил лабораторную работу', time: '32 мин назад', type: 'success', icon: 'check' },
  { id: '4', studentName: 'Temur Boymatov', action: 'Низкая посещаемость (<60%)', time: '1 час назад', type: 'warning', icon: 'alert' },
  { id: '5', studentName: 'Madina Usmonova', action: 'Получил грант за успеваемость', time: '2 часа назад', type: 'success', icon: 'star' },
  { id: '6', studentName: 'Sardorbek Toshmatov', action: 'Зарегистрировался на курс CS-301', time: '3 часа назад', type: 'info', icon: 'info' },
  { id: '7', studentName: 'Zarina Xolmatova', action: 'Сдал курсовую работу', time: '4 часа назад', type: 'success', icon: 'check' },
  { id: '8', studentName: 'Yulduz Isoqova', action: 'Не сдал домашнее задание', time: '5 часов назад', type: 'warning', icon: 'alert' },
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
    { id: '1', name: 'Abdulloh Karimov', email: 'abdulloh.k@edu.uz', gpa: 3.95, attendance: 98, avgScore: 95 },
    { id: '2', name: 'Nilufar Rahimova', email: 'nilufar.r@edu.uz', gpa: 3.88, attendance: 95, avgScore: 92 },
    { id: '3', name: 'Sardorbek Toshmatov', email: 'sardorbek.t@edu.uz', gpa: 3.82, attendance: 92, avgScore: 88 },
    { id: '4', name: 'Madina Usmonova', email: 'madina.u@edu.uz', gpa: 3.79, attendance: 97, avgScore: 90 },
    { id: '5', name: 'Jasurbek Aliyev', email: 'jasurbek.a@edu.uz', gpa: 3.75, attendance: 90, avgScore: 85 },
  ],
  'CS-102': [
    { id: '6', name: 'Gulnoza Azimova', email: 'gulnoza.a@edu.uz', gpa: 3.71, attendance: 94, avgScore: 89 },
    { id: '7', name: 'Sherzod Ergashev', email: 'sherzod.e@edu.uz', gpa: 3.68, attendance: 89, avgScore: 84 },
    { id: '8', name: 'Zarina Xolmatova', email: 'zarina.x@edu.uz', gpa: 3.65, attendance: 93, avgScore: 87 },
    { id: '9', name: 'Bobur Mirzayev', email: 'bobur.m@edu.uz', gpa: 3.62, attendance: 88, avgScore: 82 },
    { id: '10', name: 'Laylo Nematova', email: 'laylo.n@edu.uz', gpa: 3.58, attendance: 91, avgScore: 86 },
  ],
};

// Student details data
export const studentDetailsData: Record<string, StudentDetail> = {
  '1': {
    id: '1',
    name: 'Abdulloh Karimov',
    email: 'abdulloh.k@edu.uz',
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
    name: 'Nilufar Rahimova',
    email: 'nilufar.r@edu.uz',
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

// Semesters options
export const semestersOptions: SemesterOption[] = [
  { id: '2023-bahorgi', label: '2023/2024 Bahorgi Semestr', year: '2023/2024', type: 'bahorgi' },
  { id: '2023-kuzgi', label: '2023/2024 Kuzgi Semestr', year: '2023/2024', type: 'kuzgi' },
  { id: '2024-bahorgi', label: '2024/2025 Bahorgi Semestr', year: '2024/2025', type: 'bahorgi' },
  { id: '2024-kuzgi', label: '2024/2025 Kuzgi Semestr', year: '2024/2025', type: 'kuzgi' },
];

// Mock data for reports by semester and group
export const semesterReportsData: Record<string, SemesterReport> = {
  'CS-101-2023-bahorgi': {
    groupId: '1', groupName: 'CS-101', semesterId: '2023-bahorgi',
    students: 22, avgScore: 78.5, avgAttendance: 88, avgGPA: 3.32,
    gradeDistribution: [
      { grade: 'A (90-100)', count: 6, color: '#10b981' },
      { grade: 'B (80-89)', count: 8, color: '#3b82f6' },
      { grade: 'C (70-79)', count: 5, color: '#f59e0b' },
      { grade: 'D (60-69)', count: 2, color: '#f97316' },
      { grade: 'F (<60)', count: 1, color: '#ef4444' },
    ],
    studentsList: groupStudentsData['CS-101'].map(s => ({ ...s, gpa: s.gpa - 0.1, attendance: s.attendance - 3, avgScore: s.avgScore - 5 })).slice(0, 4),
  },
  'CS-101-2023-kuzgi': {
    groupId: '1', groupName: 'CS-101', semesterId: '2023-kuzgi',
    students: 24, avgScore: 81.2, avgAttendance: 90, avgGPA: 3.38,
    gradeDistribution: [
      { grade: 'A (90-100)', count: 7, color: '#10b981' },
      { grade: 'B (80-89)', count: 9, color: '#3b82f6' },
      { grade: 'C (70-79)', count: 5, color: '#f59e0b' },
      { grade: 'D (60-69)', count: 2, color: '#f97316' },
      { grade: 'F (<60)', count: 1, color: '#ef4444' },
    ],
    studentsList: groupStudentsData['CS-101'].map(s => ({ ...s, gpa: s.gpa - 0.05, attendance: s.attendance - 1, avgScore: s.avgScore - 2 })).slice(0, 4),
  },
  'CS-101-2024-bahorgi': {
    groupId: '1', groupName: 'CS-101', semesterId: '2024-bahorgi',
    students: 24, avgScore: 83.8, avgAttendance: 92, avgGPA: 3.42,
    gradeDistribution: [
      { grade: 'A (90-100)', count: 8, color: '#10b981' },
      { grade: 'B (80-89)', count: 9, color: '#3b82f6' },
      { grade: 'C (70-79)', count: 4, color: '#f59e0b' },
      { grade: 'D (60-69)', count: 2, color: '#f97316' },
      { grade: 'F (<60)', count: 1, color: '#ef4444' },
    ],
    studentsList: groupStudentsData['CS-101'].slice(0, 5),
  },
  'CS-101-2024-kuzgi': {
    groupId: '1', groupName: 'CS-101', semesterId: '2024-kuzgi',
    students: 24, avgScore: 82.5, avgAttendance: 91, avgGPA: 3.45,
    gradeDistribution: [
      { grade: 'A (90-100)', count: 8, color: '#10b981' },
      { grade: 'B (80-89)', count: 8, color: '#3b82f6' },
      { grade: 'C (70-79)', count: 5, color: '#f59e0b' },
      { grade: 'D (60-69)', count: 2, color: '#f97316' },
      { grade: 'F (<60)', count: 1, color: '#ef4444' },
    ],
    studentsList: groupStudentsData['CS-101'].slice(0, 5),
  },
  'CS-102-2023-bahorgi': {
    groupId: '2', groupName: 'CS-102', semesterId: '2023-bahorgi',
    students: 26, avgScore: 74.2, avgAttendance: 85, avgGPA: 3.08,
    gradeDistribution: [
      { grade: 'A (90-100)', count: 5, color: '#10b981' },
      { grade: 'B (80-89)', count: 7, color: '#3b82f6' },
      { grade: 'C (70-79)', count: 8, color: '#f59e0b' },
      { grade: 'D (60-69)', count: 4, color: '#f97316' },
      { grade: 'F (<60)', count: 2, color: '#ef4444' },
    ],
    studentsList: groupStudentsData['CS-102'].map(s => ({ ...s, gpa: s.gpa - 0.15, attendance: s.attendance - 5, avgScore: s.avgScore - 8 })).slice(0, 4),
  },
  'CS-102-2023-kuzgi': {
    groupId: '2', groupName: 'CS-102', semesterId: '2023-kuzgi',
    students: 27, avgScore: 76.8, avgAttendance: 86, avgGPA: 3.15,
    gradeDistribution: [
      { grade: 'A (90-100)', count: 6, color: '#10b981' },
      { grade: 'B (80-89)', count: 8, color: '#3b82f6' },
      { grade: 'C (70-79)', count: 7, color: '#f59e0b' },
      { grade: 'D (60-69)', count: 4, color: '#f97316' },
      { grade: 'F (<60)', count: 2, color: '#ef4444' },
    ],
    studentsList: groupStudentsData['CS-102'].map(s => ({ ...s, gpa: s.gpa - 0.08, attendance: s.attendance - 2, avgScore: s.avgScore - 4 })).slice(0, 4),
  },
  'CS-102-2024-bahorgi': {
    groupId: '2', groupName: 'CS-102', semesterId: '2024-bahorgi',
    students: 28, avgScore: 79.5, avgAttendance: 89, avgGPA: 3.25,
    gradeDistribution: [
      { grade: 'A (90-100)', count: 7, color: '#10b981' },
      { grade: 'B (80-89)', count: 10, color: '#3b82f6' },
      { grade: 'C (70-79)', count: 7, color: '#f59e0b' },
      { grade: 'D (60-69)', count: 3, color: '#f97316' },
      { grade: 'F (<60)', count: 1, color: '#ef4444' },
    ],
    studentsList: groupStudentsData['CS-102'].slice(0, 5),
  },
  'CS-102-2024-kuzgi': {
    groupId: '2', groupName: 'CS-102', semesterId: '2024-kuzgi',
    students: 28, avgScore: 78.3, avgAttendance: 88, avgGPA: 3.21,
    gradeDistribution: [
      { grade: 'A (90-100)', count: 6, color: '#10b981' },
      { grade: 'B (80-89)', count: 9, color: '#3b82f6' },
      { grade: 'C (70-79)', count: 8, color: '#f59e0b' },
      { grade: 'D (60-69)', count: 3, color: '#f97316' },
      { grade: 'F (<60)', count: 2, color: '#ef4444' },
    ],
    studentsList: groupStudentsData['CS-102'].slice(0, 5),
  },
};
