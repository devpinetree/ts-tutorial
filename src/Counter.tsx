import React, { useState } from 'react';

function Counter() {
  // Generics를 사용하여 해당 상태가 어떤 타입을 가지고 있을지 설정
  //   const [count, setCount] = useState<number>(0);

  // useState를 사용 할 때 알아서 타입을 유추하기 때문에 생략해도 무방
  // Generics 사용 예시:

  // 1. 상태가 null일 수도 있고 아닐수도 있을 때 활용하면 좋다.
  //   type Information = { name: string; description: string };
  // const [info, setInformation] = useState<Information | null>(null);

  // 2. 상태의 타입이 까다로운 구조를 가진 객체이거나 배열일 때
  //   type Todo = { id: number; text: string; done: boolean };
  //   const [todos, setTodos] = useState<Todo[]>([]);

  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
