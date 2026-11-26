
import { useState } from 'react';
import { Link, useLoaderData, useSearchParams } from 'react-router';

const illustrations = [
  {
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    label: 'React',
  },
  {
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    label: 'JavaScript',
  },
  {
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    label: 'CSS',
  },
  {
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    label: 'Web Development',
  },
];

export default function HomePage() {
  const posts = useLoaderData();

  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const userId = searchParams.get('userId') || 'all';

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesAuthor =
      userId === 'all' || String(post.userId) === userId;

    return matchesSearch && matchesAuthor;
  });

  function handleAuthorChange(event) {
    const value = event.target.value;

    setSearchParams(
      value === 'all' ? {} : { userId: value },
      { replace: true }
    );
  }

  return (
    <section className="home-page">

      {/* Вітальний банер */}

      <div className="welcome-banner">
        <div className="welcome-text">
          <span className="welcome-label">
            МІЙ ТВОРЧИЙ ПРОСТІР
          </span>

          <h1>
            Ласкаво просимо
            <br />
            <span>до мого блогу!</span>
          </h1>

          <p>
            Світ веброзробки, React та JavaScript.
            Навчаймося створювати сучасні сайти разом!
          </p>

          <div className="welcome-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>Web Development</span>
          </div>
        </div>

        <div className="welcome-illustration">
          <div className="welcome-circle">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
          </div>

          <span className="floating-tech tech-js">JS</span>
          <span className="floating-tech tech-css">CSS</span>
          <span className="floating-tech tech-html">HTML</span>
        </div>
      </div>

      {/* Список публікацій */}

      <h2 className="posts-heading">
        Останні публікації
      </h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Пошук публікацій..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select value={userId} onChange={handleAuthorChange}>
          <option value="all">Усі автори</option>

          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={String(i + 1)}>
              Автор {i + 1}
            </option>
          ))}
        </select>
      </div>

      <ul className="post-list">
        {filteredPosts.map((post) => {
          const illustration =
            illustrations[(post.id - 1) % illustrations.length];

          return (
            <li key={post.id} className="post-card">

              <Link
                to={`/posts/${post.id}`}
                className="post-image"
              >
                <img
                  src={illustration.image}
                  alt={illustration.label}
                />
              </Link>

              <div className="post-info">

                <Link
                  to={`/posts/${post.id}`}
                  className="post-title"
                >
                  {post.title}
                </Link>

                <span className="tag">
                  Автор №{post.userId}
                </span>

              </div>
            </li>
          );
        })}
      </ul>

      {filteredPosts.length === 0 && (
        <p className="empty-message">
          Публікацій не знайдено.
        </p>
      )}

    </section>
  );
}
