
import { Link, useLoaderData } from 'react-router';

export default function PostPage() {
  const post = useLoaderData();

  const icons = ['⚛️', 'JS', 'CSS', 'HTML'];
  const colors = ['react', 'js', 'css', 'html'];

  const index = (post.id - 1) % icons.length;

  return (
    <article className="post-detail">

      <div className={`post-detail-banner ${colors[index]}`}>
        <span>{icons[index]}</span>
      </div>

      <div className="post-detail-content">

        <Link to="/" className="back-button">
          ← Назад до публікацій
        </Link>

        <span className="tag">
          Автор №{post.userId}
        </span>

        <h1>{post.title}</h1>

        <div className="post-divider"></div>

        <p className="post-body">{post.body}</p>

        <div className="post-info">
          <span>Номер публікації: {post.id}</span>
        </div>

        <Link to="/" className="back-link">
          Переглянути всі публікації →
        </Link>

      </div>
    </article>
  );
}
