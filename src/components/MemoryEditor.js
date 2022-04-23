import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppActivity } from '../App';
import Button from './Button';
import Header from './Header';

// 날짜 - 작성하는 날짜가 기본으로 보임
const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const MemoryEditor = () => {
  console.log(getStringDate(new Date()));
  const navigate = useNavigate();
  //const { onCreate } = useContext(AppActivity);

  // 날짜 - 작성하는 날짜가 기본으로 보임
  const [date, setDate] = useState(getStringDate(new Date()));

  //   // 제목
  //   const [title, setTitle] = useState('');

  //   // 장면
  //   const [content1, setContent1] = useState('');

  //   // 내용
  //   const [content2, setContent2] = useState('');

  const handleSubmit = () => {
    alert('저장 성공');
    // onCreate();
    navigate('/main');
  };

  return (
    <div className="MemoryEditor">
      <Header text={'Memory'} />

      <section className="MemoryEditor_date">
        <h4>기억하는 순간</h4>
        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
      </section>

      {/* <section>
        <h4>제목</h4>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </section>

      <section>
        <h4>그 때의 감정</h4>
        <div></div>
      </section>

      <section>
        <h4>기억에 남는 장면</h4>
        <div>
          <textarea
            value={content1}
            onChange={(e) => {
              setContent1(e.target.value);
            }}
          />
        </div>
      </section>

      <section>
        <h4>한 줄 요약</h4>
        <div>
          <textarea
            value={content2}
            onChange={(e) => {
              setContent2(e.target.value);
            }}
          />
        </div>
      </section> */}

      <footer>
        <Button type={'success'} text={'저장'} onClick={handleSubmit} />
      </footer>
    </div>
  );
};

export default MemoryEditor;