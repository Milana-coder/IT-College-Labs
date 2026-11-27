import type { EctsGrade, Student, Subject } from '../types/journal';

// Розрахунок середнього бала студента
export function averageScore(student: Student): number {
  if (student.grades.length === 0) return 0;

  const sum = student.grades.reduce((acc, grade) => acc + grade.score, 0);

  return Math.round((sum / student.grades.length) * 10) / 10;
}

// Розрахунок середнього бала з певного предмета
export function averageBySubject(
  students: Student[],
  subject: Subject
): number | null {
  const scores = students
    .flatMap((student) => student.grades)
    .filter((grade) => grade.subject === subject)
    .map((grade) => grade.score);

  if (scores.length === 0) return null;

  const sum = scores.reduce((a, b) => a + b, 0);

  return Math.round((sum / scores.length) * 10) / 10;
}

// Переведення числового бала в оцінку ECTS
export function toEcts(score: number): EctsGrade {
  if (score >= 90) return 'A';
  if (score >= 82) return 'B';
  if (score >= 74) return 'C';
  if (score >= 64) return 'D';
  if (score >= 60) return 'E';
  if (score >= 35) return 'FX';

  return 'F';
}