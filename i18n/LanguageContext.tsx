'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'uz' | 'ru';

interface Translation {
  [key: string]: {
    uz: string;
    ru: string;
  };
}

const translations: Translation = {
  // Header
  'header.search': {
    uz: 'Talabalar, kurslar, tahlillarni qidiring...',
    ru: 'Поиск студентов, курсов, аналитики...',
  },
  'header.profile': {
    uz: 'Admin Foydalanuvchi',
    ru: 'Админ Пользователь',
  },
  'header.role': {
    uz: 'Super Admin',
    ru: 'Супер Админ',
  },
  'header.profile_menu': {
    uz: 'Profil',
    ru: 'Профиль',
  },
  'header.settings': {
    uz: 'Sozlamalar',
    ru: 'Настройки',
  },
  'header.logout': {
    uz: 'Chiqish',
    ru: 'Выйти',
  },
  
  // Sidebar
  'sidebar.dashboard': {
    uz: 'Bosh sahifa',
    ru: 'Главная',
  },
  'sidebar.guruhlar': {
    uz: 'Guruhlar',
    ru: 'Группы',
  },
  'sidebar.guruhlar_all': {
    uz: 'Barcha guruhlar',
    ru: 'Все группы',
  },
  'sidebar.reports': {
    uz: 'Hisobotlar',
    ru: 'Отчёты',
  },
  'sidebar.settings': {
    uz: 'Sozlamalar',
    ru: 'Настройки',
  },
  'sidebar.guruhlar_placeholder': {
    uz: 'Guruhni tanlang',
    ru: 'Выберите группу',
  },
  
  // Group page
  'group.students': {
    uz: 'Talabalar',
    ru: 'Студенты',
  },
  'group.semester': {
    uz: 'Semestr',
    ru: 'Семестр',
  },
  'group.avg_score': {
    uz: 'Oʻrtacha ball',
    ru: 'Средний балл',
  },
  'group.avg_attendance': {
    uz: 'Oʻrtacha davomat',
    ru: 'Средняя посещаемость',
  },
  
  // Student page
  'student.profile': {
    uz: 'Talaba profili',
    ru: 'Профиль студента',
  },
  'student.gpa': {
    uz: 'GPA',
    ru: 'GPA',
  },
  'student.attendance': {
    uz: 'Davomat',
    ru: 'Посещаемость',
  },
  'student.avg_score': {
    uz: 'Oʻrtacha ball',
    ru: 'Средний балл',
  },
  'student.missed': {
    uz: 'Oʻtkazib yuborilgan',
    ru: 'Пропущено',
  },
  'student.personal_info': {
    uz: 'Shaxsiy maʼlumotlar',
    ru: 'Личная информация',
  },
  'student.email': {
    uz: 'Email',
    ru: 'Email',
  },
  'student.phone': {
    uz: 'Telefon',
    ru: 'Телефон',
  },
  'student.birth_date': {
    uz: 'Tugʻilgan sana',
    ru: 'Дата рождения',
  },
  'student.address': {
    uz: 'Manzil',
    ru: 'Адрес',
  },
  'student.grades_history': {
    uz: 'Baholar tarixi',
    ru: 'История оценок',
  },
  'student.subject': {
    uz: 'Fan',
    ru: 'Предмет',
  },
  'student.grade': {
    uz: 'Bahо',
    ru: 'Оценка',
  },
  'student.credits': {
    uz: 'Kreditlar',
    ru: 'Кредиты',
  },
  
  // Dashboard
  'dashboard.title': {
    uz: 'Boshqaruv paneli',
    ru: 'Панель управления',
  },
  'dashboard.overview': {
    uz: 'Umumiy koʻrinish',
    ru: 'Обзор',
  },
  'dashboard.current_month': {
    uz: 'Joriy oy uchun',
    ru: 'За текущий месяц',
  },
  'dashboard.schedule': {
    uz: 'Jadval',
    ru: 'Расписание',
  },
  'dashboard.report': {
    uz: 'Hisobot',
    ru: 'Отчёт',
  },
  
  // Stats
  'stats.total_groups': {
    uz: 'Jami guruhlar',
    ru: 'Всего групп',
  },
  'stats.total_students': {
    uz: 'Jami talabalar',
    ru: 'Всего студентов',
  },
  'stats.avg_performance': {
    uz: 'Oʻrtacha oʻzlashtirish',
    ru: 'Средняя успеваемость',
  },
  'stats.avg_gpa': {
    uz: 'Oʻrtacha GPA',
    ru: 'Средний GPA',
  },
  'stats.vs_last_month': {
    uz: 'oʻtgan oyga nisbatan',
    ru: 'vs прошлым месяцем',
  },
  
  // Charts
  'chart.groups_performance': {
    uz: 'Guruhlar boʻyicha oʻzlashtirish',
    ru: 'Успеваемость по группам',
  },
  'chart.groups_subtitle': {
    uz: 'Har bir guruhning oʻrtacha bali',
    ru: 'Средний балл каждой группы',
  },
  'chart.grade_distribution': {
    uz: 'Baholar taqsimoti',
    ru: 'Распределение оценок',
  },
  'chart.grade_subtitle': {
    uz: 'Baholarning foiz nisbati',
    ru: 'Процентное соотношение оценок',
  },
  'chart.performance_trend': {
    uz: 'Oʻzlashtirish dinamikasi',
    ru: 'Динамика успеваемости',
  },
  'chart.performance_trend_subtitle': {
    uz: 'Oylar boʻyicha oʻrtacha ball oʻzgarishi',
    ru: 'Изменение среднего балла по месяцам',
  },
  'chart.attendance_correlation': {
    uz: 'Davomat va oʻzlashtirish',
    ru: 'Посещаемость и успеваемость',
  },
  'chart.attendance_correlation_subtitle': {
    uz: 'Davomat va oʻrtacha ball korrelyatsiyasi',
    ru: 'Корреляция посещаемости и среднего балла',
  },
  'chart.attendance': {
    uz: 'Davomat',
    ru: 'Посещаемость',
  },
  'chart.avg_score': {
    uz: 'Oʻrtacha ball',
    ru: 'Средний балл',
  },
  
  // Top Students
  'top_students.title': {
    uz: 'Eng yaxshi talabalar',
    ru: 'Лучшие студенты',
  },
  'top_students.subtitle': {
    uz: 'Oʻrtacha ball boʻyicha eng yaxshi talabalar',
    ru: 'Топ студентов по среднему баллу',
  },
  'top_students.rank': {
    uz: 'Rank',
    ru: 'Ранг',
  },
  'top_students.student': {
    uz: 'Talaba',
    ru: 'Студент',
  },
  'top_students.group': {
    uz: 'Guruh',
    ru: 'Группа',
  },
  'top_students.gpa': {
    uz: 'GPA',
    ru: 'GPA',
  },
  'top_students.attendance': {
    uz: 'Davomat',
    ru: 'Посещаемость',
  },
  'top_students.contact': {
    uz: 'Aloqa',
    ru: 'Контакт',
  },
  
  // Students at Risk
  'students_at_risk.title': {
    uz: 'Xavf guruhidagi talabalar',
    ru: 'Студенты в зоне риска',
  },
  'students_at_risk.subtitle': {
    uz: 'Alohida eʼtibor talab qiladi (GPA < 2.0)',
    ru: 'Требуют особого внимания (GPA < 2.0)',
  },
  'students_at_risk.students': {
    uz: 'talabalar',
    ru: 'студентов',
  },
  'students_at_risk.critical': {
    uz: 'Kritik',
    ru: 'Критический',
  },
  'students_at_risk.high': {
    uz: 'Yuqori',
    ru: 'Высокий',
  },
  'students_at_risk.medium': {
    uz: 'Oʻrta',
    ru: 'Средний',
  },
  'students_at_risk.gpa_progress': {
    uz: 'GPA progressi',
    ru: 'GPA прогресс',
  },
  
  // Activity Feed
  'activity.title': {
    uz: 'Soʻnggi voqealar',
    ru: 'Последние события',
  },
  'activity.subtitle': {
    uz: 'Bugungi talabalar faolligi',
    ru: 'Активность студентов за сегодня',
  },
  'activity.show_all': {
    uz: 'Barcha voqealarni koʻrsatish',
    ru: 'Показать все события',
  },
  
  // Login
  'login.title': {
    uz: 'EduManager',
    ru: 'EduManager',
  },
  'login.subtitle': {
    uz: 'Hisobingizga kiring',
    ru: 'Войдите в свой аккаунт',
  },
  'login.email': {
    uz: 'Email manzil',
    ru: 'Email адрес',
  },
  'login.password': {
    uz: 'Parol',
    ru: 'Пароль',
  },
  'login.remember': {
    uz: 'Meni eslab qol',
    ru: 'Запомнить меня',
  },
  'login.forgot': {
    uz: 'Parolni unutdingizmi?',
    ru: 'Забыли пароль?',
  },
  'login.signin': {
    uz: 'Kirish',
    ru: 'Войти',
  },
  'login.signing_in': {
    uz: 'Kirilmoqda...',
    ru: 'Вход...',
  },
  'login.demo_credentials': {
    uz: 'Demo maʼlumotlar:',
    ru: 'Демо данные:',
  },
  'login.auth_failed': {
    uz: 'Autentifikatsiya muvaffaqiyatsiz',
    ru: 'Ошибка аутентификации',
  },
  
  // Common
  'common.loading': {
    uz: 'Yuklanmoqda...',
    ru: 'Загрузка...',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('uz');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'uz' || saved === 'ru')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translation[language] || translation['uz'];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
