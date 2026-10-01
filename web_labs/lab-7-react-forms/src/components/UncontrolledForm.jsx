import { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });

    alert(
      `Дані відправлено!\nІм'я: ${nameRef.current.value}\nEmail: ${emailRef.current.value}`
    );
  };

  return (
    <section className="form-card">
      <h2>2. Некерований компонент</h2>
      <p className="description">
        Значення полів отримуються безпосередньо з DOM через useRef.
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input
            type="text"
            ref={nameRef}
            placeholder="Введіть ім'я"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            ref={emailRef}
            placeholder="example@email.com"
          />
        </label>

        <button type="submit">
          Відправити
        </button>
      </form>
    </section>
  );
}

export default UncontrolledForm;