import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const sortOptionList = [
  { value: 'lastest', name: '최신 순' },
  { value: 'oldest', name: '오래된 순' },
];

const emotionOptionList = [
  { value: 'all', name: '전부 다' },
  { value: 'good', name: '좋은 기억' },
  { value: 'bad', name: '아쉬운 기억' },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((list, idx) => (
        <option key={idx} value={list.value}>
          {list.name}
        </option>
      ))}
    </select>
  );
};

const MemoryList = ({ memoryData }) => {
  const navigate = useNavigate();
  // 정렬 상태 (value)
  const [sortType, setSortType] = useState('lastest');
  const [emotionType, setEmotionType] = useState('all');

  // 리스트 정렬
  const memoryOrder = () => {
    const emotionCallback = (list) => {
      if (emotionType === 'good') {
        return list.emotion >= 3;
      } else {
        return list.emotion < 3;
      }
    };

    const compare = (a, b) => {
      if (sortType === 'lastest') {
        return b.date - a.date;
      } else {
        return a.date - b.date;
      }
    };

    const copyList = JSON.parse(JSON.stringify(memoryData));
    const emotionFilter =
      emotionType === 'all'
        ? copyList
        : copyList.filter((list) => emotionCallback(list));

    const finalList = emotionFilter.sort(compare);

    return finalList;
  };

  return (
    <div className="MemoryList">
      <button onClick={() => navigate('/')}>홈으로</button>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />

      <ControlMenu
        value={emotionType}
        onChange={setEmotionType}
        optionList={emotionOptionList}
      />
      {memoryOrder().map((list) => (
        <div key={list.id}>
          <h4>{list.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default MemoryList;
