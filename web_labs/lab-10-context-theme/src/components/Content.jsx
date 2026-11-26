
import { useTheme } from '../context/ThemeContext';

export default function Content() {
  const { theme } = useTheme();

  return (
    <main className="content">
      <h2>Ласкаво просимо!</h2>

      <p>
        Це навчальний React-застосунок для демонстрації роботи
        Context API.
      </p>

      <p>
        Поточна тема оформлення: <strong>{theme}</strong>
      </p>
    </main>
  );
}
