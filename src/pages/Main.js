import { useState, useContext, useEffect } from 'react';
import { AppDataContext } from '../App';

import Button from '../components/Button';
import Header from '../components/Header';

const Main = () => {
  const dummyData = useContext(AppDataContext);

  // 상단 년도, 월 표시
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

  // 각 아이템이 해당 하는 월만 나오게
  const [data, setData] = useState([]);

  useEffect(() => {
    // 현재 년도와 월의 첫 번째 날짜 ~ 마지막 날짜
    const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
    const lastDay = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0);
    console.log(firstDay);
    console.log(lastDay);

    setData(
      dummyData.filter((list) => firstDay <= list.date && list.date <= lastDay)
    );
  }, [dummyData, curDate]);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
