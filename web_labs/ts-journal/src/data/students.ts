import type { Student } from '../types/journal';

export const students: Student[] = [
  {
    id: 1,
    fullName: 'Оксана Коваленко',
    group: 'ІСМ-31',
    email: 'oksana@example.com',
    grades: [
      { subject: 'web', score: 95, date: '2026-10-01' },
      { subject: 'math', score: 82, date: '2026-10-03' },
      { subject: 'english', score: 90, date: '2026-10-05' },
    ],
  },
  {
    id: 2,
    fullName: 'Тарас Мельник',
    group: 'ІСМ-31',
    grades: [
      { subject: 'web', score: 74, date: '2026-10-01' },
      { subject: 'english', score: 68, date: '2026-10-05' },
    ],
  },
  {
    id: 3,
    fullName: 'Марія Шевченко',
    group: 'ІСМ-31',
    email: 'maria@example.com',
    grades: [
      { subject: 'databases', score: 88, date: '2026-10-02' },
      { subject: 'math', score: 92, date: '2026-10-04' },
    ],
  },
  {
    id: 4,
    fullName: 'Андрій Бондар',
    group: 'ІСМ-32',
    grades: [
      { subject: 'web', score: 61, date: '2026-10-01' },
      { subject: 'databases', score: 76, date: '2026-10-03' },
    ],
  },
  {
    id: 5,
    fullName: 'Ірина Кравченко',
    group: 'ІСМ-32',
    email: 'iryna@example.com',
    grades: [
      { subject: 'english', score: 97, date: '2026-10-02' },
      { subject: 'math', score: 85, date: '2026-10-04' },
      { subject: 'web', score: 91, date: '2026-10-06' },
    ],
  },
];