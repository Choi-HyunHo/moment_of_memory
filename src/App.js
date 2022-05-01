import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useRef, useReducer, useEffect } from 'react';

import Home from './pages/Home';
import Main from './pages/Main';
import New from './pages/New';
import Modify from './pages/Modify';
import Detail from './pages/Detail';

export const AppDataContext = React.createContext();
export const AppActivity = React.createContext();

//  const dummyData = [
//   {
//     id: 1,
//     title: '에러 방지를 위한 데이터',
//     content1: '에러 방지',
//     content2: '에러 방지',
//     emotion: 5,
//     date: 1650519198811,
//   }
// ];

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }

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

    case 'REMOVE': {
      newState = state.filter((list) => list.id !== action.targetId);
      break;
    }

    default:
      return state;
  }

  localStorage.setItem('memory', JSON.stringify(newState));

  return newState;
};

function App() {
  const dataId = useRef(1);

  // 전역으로 사용할 data
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localData = localStorage.getItem('memory');

    if (localData) {
      const memoryItem = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );
      if (memoryItem.length >= 1) {
        dataId.current = parseInt(memoryItem[0].id) + 1;
        dispatch({ type: 'INIT', data: memoryItem });
      }
    }
  }, []);

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

  // 삭제
  const onRemove = (targetId) => {
    dispatch({ type: 'REMOVE', targetId });
  };

  return (
    <AppDataContext.Provider value={data}>
      <AppActivity.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/main" element={<Main />} />
              <Route path="/detail/:id" element={<Detail />} />
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
