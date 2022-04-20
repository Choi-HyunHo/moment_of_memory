import { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';

const Main = () => {
  const [curDate, setDate] = useState(new Date());

  const headText = `${curDate.getFullYear()}. ${curDate.getMonth() + 1}`;

  const onIncrease = () => {
    setDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const onDecrease = () => {
    setDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <Header
        left={<Button text={'<'} onClick={onDecrease} />}
        text={headText}
        right={<Button text={'>'} onClick={onIncrease} />}
      />
    </div>
  );
};

export default Main;
