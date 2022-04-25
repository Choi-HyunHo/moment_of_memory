import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useRef, useReducer } from 'react';

import Home from './pages/Home';
import Main from './pages/Main';
import New from './pages/New';
import Modify from './pages/Modify';
import Detail from './pages/Detail';

export const AppDataContext = React.createContext();
export const AppActivity = React.createContext();

const dummyData = [
  {
    id: 1,
    title: '라라랜드-1',
    content1: '저녁 파티',
    content2: '재밌다',
    emotion: 5,
    date: 1650519198811,
  },
  {
    id: 2,
    title: '미스터 션샤인-2',
    content1: '저격 장면',
    content2: '재밌다',
    emotion: 4,
    date: 1650519198812,
  },
  {
    id: 3,
    title: '스물다섯-3',
    content1: '바다 놀러간 장면',
    content2: '재밌다',
    emotion: 3,
    date: 1650519198813,
  },
  {
    id: 4,
    title: '도둑들-4',
    content1: '저녁 파티',
    content2: '재밌다',
    emotion: 2,
    date: 1650519198814,
  },
  {
    id: 5,
    title: '승리호-5',
    content1: '저녁 파티',
    content2: '재밌다',
    emotion: 1,
    date: 1650519198815,
  },
];

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'CREATE': {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }

    case 'EDIT': {
      newState = state.map((list) =>
        list.id === action.data.id ? { ...action.data } : list
      );
      break;
    }

    default:
      return state;
  }

  return newState;
};

function App() {
  // 전역으로 사용할 data
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(6);

  // 추가
  const onCreate = (date, title, content1, content2, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        title,
        content1,
        content2,
        emotion,
      },
    });
    dataId.current += 1;
  };

  // 수정
  const onEdit = (targetId, date, title, content1, content2, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        title,
        content1,
        content2,
        emotion,
      },
    });
  };

  return (
    <AppDataContext.Provider value={data}>
      <AppActivity.Provider value={{ onCreate, onEdit }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/main" element={<Main />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/new" element={<New />} />
              <Route path="/modify/:id" element={<Modify />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppActivity.Provider>
    </AppDataContext.Provider>
  );
}

export default App;
