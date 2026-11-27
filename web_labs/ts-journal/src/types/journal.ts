// Перелік навчальних предметів
export const SUBJECTS = ['web', 'databases', 'math', 'english'] as const;

export type Subject = (typeof SUBJECTS)[number];

// Оцінка студента
export type Grade = {
  subject: Subject;
  score: number;
  date: string;
};

// Модель студента
export type Student = {
  id: number;
  fullName: string;
  group: string;
  email?: string;
  grades: Grade[];
};

// Шкала оцінювання ECTS
export type EctsGrade = 'A' | 'B' | 'C' | 'D' | 'E' | 'FX' | 'F';