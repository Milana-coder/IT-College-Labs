
import './App.css';

import { parseStudents } from './utils/guards';
import { students } from './data/students';
import { SUBJECTS, type Subject } from './types/journal';

import {
  averageBySubject,
  averageScore,
  toEcts,
} from './utils/grades';

import { groupBy, sortBy } from './utils/generics';

const subjectNames: Record<Subject, string> = {
  web: 'Веброзробка',
  databases: 'Бази даних',
  math: 'Математика',
  english: 'Англійська мова',
};

// Групування студентів за навчальними групами
const groupedStudents = groupBy(
  students,
  (student) => student.group
);

// Перевірка коректних та некоректних JSON-даних
const validImportCount = parseStudents(JSON.stringify(students)).length;

function checkInvalidData(): string {
  try {
    parseStudents('{"id": "wrong"}');
    return 'Перевірку пройдено';
  } catch (error: unknown) {
    return error instanceof Error
      ? error.message
      : 'Невідома помилка';
  }
}

const invalidJsonMessage = checkInvalidData();

export default function App() {
  return (
    <main className="container">
      <header className="page-header">
        <p className="eyebrow">ЕЛЕКТРОННИЙ ЖУРНАЛ</p>
        <h1>Журнал успішності</h1>
        <p>Облік студентів, оцінок та навчальних результатів</p>
      </header>

      {/* Список студентів */}
      <section className="card">
        <div className="section-heading">
          <h2>Список студентів</h2>
          <span className="count">{students.length} студентів</span>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Студент</th>
                <th>Група</th>
                <th>Електронна пошта</th>
                <th>Середній бал</th>
                <th>Оцінка ECTS</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => {
                const avg = averageScore(student);
                const ects = toEcts(avg);

                return (
                  <tr key={student.id}>
                    <td className="student-name">{student.fullName}</td>
                    <td>{student.group}</td>
                    <td>{student.email ?? '—'}</td>
                    <td className="score">{avg.toFixed(1)}</td>
                    <td>
                      <span className={`ects ects-${ects.toLowerCase()}`}>
                        {ects}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Середні бали за предметами */}
      <section className="card">
        <div className="section-heading">
          <h2>Середній бал за предметами</h2>
        </div>

        <div className="subject-grid">
          {SUBJECTS.map((subject) => {
            const avg = averageBySubject(students, subject);

            return (
              <div className="subject-item" key={subject}>
                <span>{subjectNames[subject]}</span>
                <strong>
                  {avg === null ? 'Немає даних' : avg.toFixed(1)}
                </strong>
              </div>
            );
          })}
        </div>
      </section>

      {/* Студенти за групами */}
      <section className="card">
        <div className="section-heading">
          <h2>Студенти за групами</h2>
        </div>

        <div className="group-grid">
          {Array.from(groupedStudents.entries()).map(
            ([group, groupStudents]) => (
              <div className="group-card" key={group}>
                <h3>{group}</h3>
                <ul>
                  {sortBy(
                    groupStudents,
                    (student) => student.fullName
                  ).map((student) => (
                    <li key={student.id}>{student.fullName}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </section>

      {/* Перевірка JSON та Type Guards */}
      <section className="card">
        <div className="section-heading">
          <h2>Перевірка даних JSON</h2>
          <span className="count">Type Guards</span>
        </div>

        <div className="subject-grid">
          <div className="subject-item">
            <span>Коректних студентів перевірено</span>
            <strong>{validImportCount}</strong>
          </div>

          <div className="subject-item">
            <span>Перевірка некоректних даних</span>
            <strong className="validation-result">
              Помилку виявлено
            </strong>
          </div>
        </div>

        <p className="validation-message">{invalidJsonMessage}</p>
      </section>

      <footer>
        Навчальний проєкт · React + TypeScript
      </footer>
    </main>
  );
}
