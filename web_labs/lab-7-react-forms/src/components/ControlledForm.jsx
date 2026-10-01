import { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Ім'я: ${name}\nEmail: ${email}`);
  };

  return (
    <section className="form-card">
      <h2>1. Керований компонент</h2>
      <p className="description">
        Форма працює через useState. React контролює значення кожного поля.
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введіть ім'я"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
          />
        </label>

        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введіть пароль"
          />
        </label>

        <button type="submit">
          Зареєструватися
        </button>
      </form>
    </section>
  );
}

export default ControlledForm;