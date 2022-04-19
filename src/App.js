import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';
import New from './pages/New';
import Modify from './pages/Modify';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/new" element={<New />} />
          <Route path="/modify" element={<Modify />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
