'use client'

import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const progress = [
    "2024-04-29",
    "2024-05-03",
    "2024-05-13",
    "2024-06-17",
    "2024-08-11",
    "2024-09-11",
    "2024-09-23",
    "2024-10-19",
    "2024-11-04",
    "2024-11-26",
    "2024-12-04",
    "2024-12-16",
    "2025-03-09",
    "2025-03-14",
    "2025-03-19",
    "2025-04-05",
    "2025-05-25",
    "2025-06-01",
    "2025-06-14",
];

const totalLessons = 70;
const completed = progress.length;
const percent = Math.round((completed / totalLessons) * 100);

// Time remaining until end of Q2 2025 (June 30, 2025)
// const endQ2 = dayjs('2025-06-30');
// const now = dayjs();
// const diffYears = endQ2.diff(now, 'year');
// const diffMonths = endQ2.diff(now.add(diffYears, 'year'), 'month');
// const diffDays = endQ2.diff(now.add(diffYears, 'year').add(diffMonths, 'month'), 'day');

export default function ArabicPage() {
    return (
        <div className="max-w-2xl mx-auto py-10 px-4 text-center">
            <h1 className="text-3xl font-bold mb-2">Arabic Learning Progress</h1>
            <p className="mb-6 text-zinc-400">Each box represents a lesson. Filled = completed.</p>
            <div className="grid grid-cols-10 grid-rows-7 gap-2 justify-center mb-8">
                {Array.from({ length: totalLessons }).map((_, i) => (
                    <div
                        key={i}
                        className={`rounded-md border-2 aspect-square transition-colors duration-200
              ${progress[i] ? 'bg-zinc-400 border-zinc-400 dark:bg-zinc-700 dark:border-zinc-700' : 'bg-zinc-800 border-zinc-800'}`}
                        title={
                            progress[i]
                                ? `Lesson ${i + 1}: Completed ${dayjs(progress[i]).format('MMMM D, YYYY')}`
                                : `Lesson ${i + 1}`
                        }
                    />
                ))}
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:justify-start items-center mb-8">
                <div className="bg-zinc-900/95 rounded-2xl p-8 min-w-[220px] flex flex-col items-center shadow-lg">
                    <div className="text-zinc-300 text-base mb-1">Lessons Completed</div>
                    <div className="text-zinc-100 text-3xl font-bold mb-1">{completed} / {totalLessons}</div>
                    <div className="w-full h-2 bg-zinc-800 rounded mb-1 overflow-hidden">
                        <div className="h-full bg-zinc-400 dark:bg-zinc-700 rounded transition-all" style={{ width: `${percent}%` }} />
                    </div>
                    <div className="text-zinc-400 text-sm">{percent}% complete</div>
                </div>
                {/* <div className="bg-zinc-900/95 rounded-2xl p-8 min-w-[220px] flex flex-col items-center shadow-lg">
                    <div className="text-zinc-300 text-base mb-1">Time Remaining</div>
                    <div className="text-zinc-100 text-3xl font-bold mb-1">
                        {diffYears > 0 && `${diffYears} year${diffYears > 1 ? 's' : ''} `}
                        {diffMonths > 0 && `${diffMonths} month${diffMonths > 1 ? 's' : ''} `}
                        {diffDays > 0 && `${diffDays} day${diffDays > 1 ? 's' : ''}`}
                    </div>
                    <div className="text-zinc-400 text-sm">Until end of Q2 2025</div>
                </div> */}
            </div>
        </div>
    );
} 