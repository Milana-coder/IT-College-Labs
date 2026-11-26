
export default function AboutPage() {
  return (
    <section className="about-page">

      <div className="about-hero">
        <div className="about-hero-text">
          <span className="about-label">WELCOME TO MY BLOG</span>

          <h1>
            Світ веброзробки
            <br />
            <span>починається тут!</span>
          </h1>

          <p>
            Навчальний блог про сучасні вебтехнології,
            React та створення інтерактивних вебзастосунків.
          </p>
        </div>

        <div className="about-illustration">
          <div className="about-orbit">
            <span>⚛️</span>
          </div>
          <div className="floating-icon icon-js">JS</div>
          <div className="floating-icon icon-css">CSS</div>
          <div className="floating-icon icon-html">HTML</div>
        </div>
      </div>

      <div className="about-description">
        <h2>Про мій блог</h2>

        <p>
          Це навчальний блог, створений за допомогою
          React та React Router. Він демонструє можливості
          сучасної маршрутизації, роботи з компонентами
          та завантаження даних у вебзастосунках.
        </p>

        <p>
          Мета проєкту — продемонструвати практичне
          використання сучасних інструментів веброзробки
          та закріпити отримані знання.
        </p>
      </div>

      <h2 className="about-section-title">
        Технології проєкту
      </h2>

      <div className="about-features">

        <div className="about-feature">
          <div className="feature-icon react-icon">⚛️</div>
          <h3>React</h3>
          <p>
            Створення інтерфейсів за допомогою
            компонентного підходу.
          </p>
        </div>

        <div className="about-feature">
          <div className="feature-icon js-icon">JS</div>
          <h3>JavaScript</h3>
          <p>
            Додавання інтерактивності та
            динамічної поведінки сторінок.
          </p>
        </div>

        <div className="about-feature">
          <div className="feature-icon router-icon">↗</div>
          <h3>React Router</h3>
          <p>
            Організація навігації між сторінками
            без перезавантаження сайту.
          </p>
        </div>

      </div>

      <div className="about-bottom">
        <span>💜</span>
        Навчання, практика та нові можливості у світі IT
      </div>

    </section>
  );
}
