import { useState } from 'react';

function MultiFieldForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert(
      `Дані збережено!\nІм'я: ${formData.firstName}\nПрізвище: ${formData.lastName}\nДата народження: ${formData.birthDate}`
    );
  };

  return (
    <section className="form-card">
      <h2>3. Багатопольова форма</h2>
      <p className="description">
        Усі значення форми зберігаються в одному об'єкті state.
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Введіть ім'я"
          />
        </label>

        <label>
          Прізвище:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Введіть прізвище"
          />
        </label>

        <label>
          Дата народження:
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </label>

        <button type="submit">
          Зберегти
        </button>
      </form>
    </section>
  );
}

export default MultiFieldForm;