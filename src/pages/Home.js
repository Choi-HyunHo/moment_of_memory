import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home_title">
        <h1>Moment of Memory</h1>
        <h3>: 기억의 순간</h3>
      </div>
      <button onClick={() => navigate('/main')}>▶ Start</button>
      <h5>By. Choi-HyunHo</h5>
    </div>
  );
};

export default Home;
