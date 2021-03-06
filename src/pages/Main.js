import { useState, useContext, useEffect } from 'react';
import { AppDataContext } from '../App';

import Button from '../components/Button';
import Header from '../components/Header';
import MemoryList from '../components/MemoryList';

const Main = () => {
  const memoryData = useContext(AppDataContext);

  // 각 아이템이 해당 하는 월만 나오게
  const [data, setData] = useState([]);

  // 상단 년도, 월 표시
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}. ${curDate.getMonth() + 1}`;

  const onIncrease = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const onDecrease = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  useEffect(() => {
    // 현재 년도와 월의 첫 번째 날짜 ~ 마지막 날짜
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime();

    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      0
    ).getTime();

    setData(
      memoryData.filter((list) => firstDay <= list.date && list.date <= lastDay)
    );
  }, [memoryData, curDate]);

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
      <MemoryList memoryData={data} />
    </div>
  );
};

export default Main;
