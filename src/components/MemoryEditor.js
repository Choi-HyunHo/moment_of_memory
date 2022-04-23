import { useContext, useState } from 'react';
import { AppActivity } from '../App';
import Button from './Button';
import Header from './Header';

const MemoryEditor = () => {
  const { onCreate } = useContext(AppActivity);

  // 날짜
  const [date, setDate] = useState(new Date());

  // 제목
  const [title, setTitle] = useState('');

  // 장면
  const [text_1, setText_1] = useState('');

  // 내용
  const [text_2, settext_2] = useState('');

  const handleSubmit = () => {
    alert('저장 성공');
    onCreate(title, text_1, text_2);
  };

  return (
    <div className="MemoryEditor">
      <Header text={'Memory'} />

      <section className="MemoryEditor_date">
        <h4>기억하는 순간</h4>
        <input type="date" />
      </section>

      <section>
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
            value={text_1}
            onChange={(e) => {
              setText_1(e.target.value);
            }}
          />
        </div>
      </section>

      <section>
        <h4>한 줄 요약</h4>
        <div>
          <textarea
            value={text_2}
            onChange={(e) => {
              settext_2(e.target.value);
            }}
          />
        </div>
      </section>

      <footer>
        <Button type={'success'} text={'저장'} onClick={handleSubmit} />
      </footer>
    </div>
  );
};

export default MemoryEditor;
