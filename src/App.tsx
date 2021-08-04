import React from 'react';
import Greetings from './Greetings';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} clicked button`);
  };
  return <Greetings name="me" onClick={onClick} />;
};

export default App;
