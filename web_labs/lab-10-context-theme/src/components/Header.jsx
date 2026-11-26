
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme, changeTheme } = useTheme();

  return (
    <header className="header">
      <div>
        <h1>Мій простір</h1>
        <p className="header-description">
          Міні-застосунок для перемикання теми
        </p>
      </div>

      <div className="theme-controls">
        <label htmlFor="theme-select">Тема:</label>

        <select
          id="theme-select"
          value={theme}
          onChange={(event) => changeTheme(event.target.value)}
        >
          <option value="light">Світла</option>
          <option value="dark">Темна</option>
          <option value="blue">Синя</option>
          <option value="system">Системна</option>
        </select>

        <button className="theme-button" onClick={toggleTheme}>
          🌙 Змінити тему
        </button>
      </div>
    </header>
  );
}
