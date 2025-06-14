import './App.css';
import { useState } from 'react';
import Form from './components/Form.jsx';
import HelloUser from './components/HelloUser.jsx';

function App() {
    const[firstName, setFirstName] = useState('');
    const[middleName, setMiddleName] = useState('');
    const[lastName, setLastName] = useState('');

  return (
    <div>
      <Form 
      firstName={firstName}
      middleName={middleName}
      lastName={lastName}
      setFirstName={setFirstName} setMiddleName={setMiddleName} setLastName={setLastName} />
      <HelloUser firstName={firstName}
      middleName={middleName}
      lastName={lastName}
      />
    </div>
  );
}

export default App;
