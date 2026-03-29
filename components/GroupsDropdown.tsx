'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { guruhlarData, GroupItem } from '@/data/mockData';
import Link from 'next/link';

interface GroupsDropdownProps {
  isOpen: boolean;
}

export default function GroupsDropdown({ isOpen }: GroupsDropdownProps) {
  const { t } = useLanguage();
  const [expandedCourse, setExpandedCourse] = useState<string | null>('Computer Science');
  const [selectedGroup, setSelectedGroup] = useState<GroupItem | null>(null);

  // Group by course
  const groupsByCourse = guruhlarData.reduce((acc, group) => {
    if (!acc[group.course]) {
      acc[group.course] = [];
    }
    acc[group.course].push(group);
    return acc;
  }, {} as Record<string, GroupItem[]>);

  const toggleCourse = (course: string) => {
    setExpandedCourse(expandedCourse === course ? null : course);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden"
    >
      <div className="px-4 py-2 space-y-1">
        {/* All Groups Button */}
        <Link
          href="/dashboard"
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold text-sm ${
            selectedGroup === null
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
              : 'text-slate-500 hover:bg-orange-50 hover:text-orange-600'
          }`}
          onClick={() => setSelectedGroup(null)}
        >
          <BookOpen className="w-5 h-5 shrink-0" />
          <span className="whitespace-nowrap">{t('sidebar.guruhlar_all')}</span>
          <span className="ml-auto text-xs opacity-70">{guruhlarData.length}</span>
        </Link>

        {/* Course Groups */}
        {Object.entries(groupsByCourse).map(([course, groups]) => (
          <div key={course} className="space-y-1">
            <button
              onClick={() => toggleCourse(course)}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all font-bold text-sm text-slate-500 hover:bg-slate-50 hover:text-orange-600"
            >
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform ${
                  expandedCourse === course ? 'rotate-180' : ''
                }`}
              />
              <span className="whitespace-nowrap text-xs uppercase tracking-wider text-slate-400">
                {course}
              </span>
            </button>

            <AnimatePresence>
              {expandedCourse === course && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.15 }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 space-y-1">
                    {groups.map((group) => (
                      <Link
                        key={group.id}
                        href={`/groups/${group.id}`}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all font-medium text-sm ${
                          selectedGroup?.id === group.id
                            ? 'bg-orange-100 text-orange-700'
                            : 'text-slate-600 hover:bg-orange-50 hover:text-orange-600'
                        }`}
                        onClick={() => setSelectedGroup(group)}
                      >
                        <Users className="w-4 h-4 shrink-0 opacity-70" />
                        <span className="whitespace-nowrap font-bold">{group.name}</span>
                        <div className="ml-auto flex items-center gap-2">
                          <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                            {t('sidebar.guruhlar_placeholder').split(' ')[0]}: {group.semester}
                          </span>
                          <span className="text-[10px] text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded font-bold">
                            {group.students}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
