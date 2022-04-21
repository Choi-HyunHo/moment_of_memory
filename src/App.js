import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { createContext } from 'react';

import Home from './pages/Home';
import Main from './pages/Main';
import New from './pages/New';
import Modify from './pages/Modify';
import Detail from './pages/Detail';

export const AppDataContext = React.createContext();

const dummyData = [
  {
    id: 1,
    title: '라라랜드-1',
    content_1: '저녁 파티',
    content_2: '재밌다',
    emotion: 5,
    date: 1650519198811,
  },
  {
    id: 2,
    title: '미스터 션샤인-2',
    content_1: '저격 장면',
    content_2: '재밌다',
    emotion: 4,
    date: 1650519198812,
  },
  {
    id: 3,
    title: '스물다섯-3',
    content_1: '바다 놀러간 장면',
    content_2: '재밌다',
    emotion: 3,
    date: 1650519198813,
  },
  {
    id: 4,
    title: '도둑들-4',
    content_1: '저녁 파티',
    content_2: '재밌다',
    emotion: 2,
    date: 16505191988114,
  },
  {
    id: 5,
    title: '승리호-5',
    content_1: '저녁 파티',
    content_2: '재밌다',
    emotion: 1,
    date: 1650519198815,
  },
];

function App() {
  return (
    <AppDataContext.Provider value={dummyData}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/new" element={<New />} />
            <Route path="/modify" element={<Modify />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppDataContext.Provider>
  );
}

export default App;
