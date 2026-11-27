import type { Grade, Student, Subject } from './journal';

// Utility Types
export type StudentPreview = Pick<Student, 'id' | 'fullName' | 'group'>;

export type NewStudentData = Omit<Student, 'id'>;

export type StudentUpdate = Partial<Omit<Student, 'id'>>;

export type ImmutableStudent = Readonly<Student>;

// Discriminated Union
export type JournalAction =
  | { type: 'student/add'; student: Student }
  | { type: 'student/remove'; id: number }
  | { type: 'grade/add'; studentId: number; grade: Grade }
  | {
      type: 'grade/update';
      studentId: number;
      subject: Subject;
      score: number;
    };

// Звуження типів за допомогою type
export function describeAction(action: JournalAction): string {
  switch (action.type) {
    case 'student/add':
      return `Додано студента: ${action.student.fullName}`;

    case 'student/remove':
      return `Видалено студента № ${action.id}`;

    case 'grade/add':
      return `Додано оцінку з предмета ${action.grade.subject}`;

    case 'grade/update':
      return `Оновлено оцінку: ${action.score}`;
  }
}

// Generic: узагальнений тип стану завантаження
export type LoadState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };