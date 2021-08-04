import React from 'react';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import Counter2 from './Counter2';
import ReducerSample from './ReducerSample';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} clicked button`);
  };
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      <Greetings name="me" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <Counter2 />
      <ReducerSample />
    </>
  );
};

export default App;
