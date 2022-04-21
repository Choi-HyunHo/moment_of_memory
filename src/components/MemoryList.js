import { useState } from 'react';

const sortOptionList = [
  { value: 'lastest', name: '최신 순' },
  { value: 'oldest', name: '오래된 순' },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((list, idx) => (
        <option key={idx}>{list.name}</option>
      ))}
    </select>
  );
};

const MemoryList = ({ memoryData }) => {
  // 정렬 상태 (value)
  const [sortType, setSortType] = useState('lastest');

  // 리스트 정렬
  const memoryOrder = () => {
    // 깊은 복사

    const compare = (a, b) => {
      if (sortType === 'lastest') {
        return b.date - a.date;
      }

      if (sortType === 'oldest') {
        return a.date - b.date;
      }
    };

    const copyList = JSON.parse(JSON.stringify(memoryData));
    const finalList = copyList.sort(compare);

    return finalList;
  };

  return (
    <div className="MemoryList">
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
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
