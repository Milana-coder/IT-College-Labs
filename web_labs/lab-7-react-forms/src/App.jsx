import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import MultiFieldForm from './components/MultiFieldForm';
import ValidatedForm from './components/ValidatedForm';

import './App.css';

function App() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>Лабораторна робота №7</h1>
        <p>
          Робота з формами: керовані та некеровані компоненти
        </p>
      </header>

      <div className="forms-container">
        <ControlledForm />
        <UncontrolledForm />
        <MultiFieldForm />
        <ValidatedForm />
      </div>
    </main>
  );
}

export default App;