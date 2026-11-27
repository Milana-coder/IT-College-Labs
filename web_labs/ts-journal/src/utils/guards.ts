
import {
  SUBJECTS,
  type Grade,
  type Student,
  type Subject,
} from '../types/journal';

// Перевірка, чи є значення звичайним об'єктом
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

// Type Guard для навчального предмета
function isSubject(value: unknown): value is Subject {
  return SUBJECTS.some((subject) => subject === value);
}

// Type Guard для оцінки
export function isGrade(value: unknown): value is Grade {
  if (!isRecord(value)) return false;

  return (
    isSubject(value.subject) &&
    typeof value.score === 'number' &&
    Number.isFinite(value.score) &&
    value.score >= 0 &&
    value.score <= 100 &&
    typeof value.date === 'string' &&
    !Number.isNaN(Date.parse(value.date))
  );
}

// Type Guard для студента
export function isStudent(value: unknown): value is Student {
  if (!isRecord(value)) return false;

  return (
    typeof value.id === 'number' &&
    Number.isInteger(value.id) &&
    typeof value.fullName === 'string' &&
    typeof value.group === 'string' &&
    (value.email === undefined || typeof value.email === 'string') &&
    Array.isArray(value.grades) &&
    value.grades.every(isGrade)
  );
}

// Перевірка масиву студентів
export function isStudentArray(value: unknown): value is Student[] {
  return Array.isArray(value) && value.every(isStudent);
}

// Безпечне завантаження та перевірка JSON
export function parseStudents(json: string): Student[] {
  let parsed: unknown;

  try {
    parsed = JSON.parse(json) as unknown;
  } catch {
    throw new Error('Некоректний формат JSON');
  }

  if (!isStudentArray(parsed)) {
    throw new Error('JSON містить некоректні дані студентів');
  }

  return parsed;
}
