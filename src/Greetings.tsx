import React from 'react';

// 컴포넌트의 props에 대한 타입 선언 시, type이나 interface 사용
// interface GreetingsProps = {
type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string; // 생략해도 되는 값이 있다면 ? 사용
  onClick: (name: string) => void; // 특정 함수를 받아와야 한다면 이렇게 타입 지정, void는 아무것도 리턴하지 않음을 의미한다.
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name}
      {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
