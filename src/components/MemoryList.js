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

const MemoryList = ({ dummyData }) => {
  // 정렬 상태 (value)
  const [sortType, setSortType] = useState('lastest');

  return (
    <div className="ItemList">
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {dummyData.map((list) => (
        <div key={list.id}>
          <h4>{list.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default MemoryList;
