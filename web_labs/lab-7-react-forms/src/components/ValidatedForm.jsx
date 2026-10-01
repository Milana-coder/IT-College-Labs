import { useState } from 'react';

function ValidatedForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ім'я обов'язкове";
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Некоректний email';
    }

    if (!formData.password.trim()) {
      newErrors.password = "Пароль обов'язковий";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Форма успішно відправлена!');
    }
  };

  return (
    <section className="form-card">
      <h2>4. Валідація форми</h2>

      <p className="description">
        Перевіряємо обов'язкові поля та коректність email.
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Введіть ім'я"
          />
        </label>

        {errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
          />
        </label>

        {errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <label>
          Пароль:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Введіть пароль"
          />
        </label>

        {errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <button type="submit">
          Зареєструватися
        </button>
      </form>
    </section>
  );
}

export default ValidatedForm;