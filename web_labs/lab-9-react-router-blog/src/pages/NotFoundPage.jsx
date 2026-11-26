
import { Link, useRouteError } from 'react-router';

export default function NotFoundPage() {
  const error = useRouteError();

  return (
    <section className="not-found">
      <div className="not-found-number">404</div>

      <h1>Сторінку не знайдено</h1>

      <p>
        На жаль, такої сторінки не існує
        або виникла помилка під час завантаження.
      </p>

      {error?.message && (
        <p className="not-found-error">
          {error.message}
        </p>
      )}

      <Link to="/" className="not-found-button">
        ← Повернутися на головну
      </Link>
    </section>
  );
}
