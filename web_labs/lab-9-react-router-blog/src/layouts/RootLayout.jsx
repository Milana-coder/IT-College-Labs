
import { Outlet, useNavigation } from 'react-router';
import Navigation from '../components/Navigation';

export default function RootLayout() {
    const navigation = useNavigation();

  return (
    <div className="layout">

      <header className="header">
        <span className="logo">Мій блог</span>
        <Navigation />
      </header>

      <main className="content">

  {navigation.state === 'loading' && (
    <p className="loading">
      Завантаження...
    </p>
  )}

  <Outlet />

</main>

      <footer className="footer">
        © 2026 Мій блог. Навчальний проєкт.
      </footer>

    </div>
  );
}
