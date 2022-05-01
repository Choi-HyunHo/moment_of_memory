import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppActivity, AppDataContext } from '../App';
import Header from '../components/Header';
import Button from '../components/Button';

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + '/assets/emotion1.png',
    emotion_text: '슬퍼요',
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + '/assets/emotion2.png',
    emotion_text: '우울해요',
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + '/assets/emotion3.png',
    emotion_text: '평범해요',
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + '/assets/emotion4.png',
    emotion_text: '좋아요',
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + '/assets/emotion5.png',
    emotion_text: '행복해요',
  },
];

const Detail = () => {
  const navigate = useNavigate();
  const memoryData = useContext(AppDataContext);
  const { onRemove } = useContext(AppActivity);
  const { id } = useParams();
  const [data, setData] = useState();

  // 타이틀 바꾸기
  useEffect(() => {
    const titleElement = document.querySelector('title');
    titleElement.innerHTML = `기억의 순간 - ${id}번 기억`;
  }, []);

  useEffect(() => {
    const targetItem = memoryData.find(
      (list) => parseInt(list.id) === parseInt(id)
    );

    if (targetItem) {
      setData(targetItem);
    } else {
      alert('존재 하지 않는 기억 입니다.');
      navigate('/main', { replace: true });
    }
    console.log(targetItem);
  }, [id, memoryData]);

  const handleRemove = () => {
    if (window.confirm('정말 삭제 하시겠습니까?')) {
      onRemove(data.id);
      navigate('/main', { replace: true });
    }
  };

  if (!data) {
    return <div>기억이 없습니다.</div>;
  } else {
    const curEmotion = emotionList.find(
      (item) => parseInt(item.emotion_id) === parseInt(data.emotion)
    );
    console.log(curEmotion);

    return (
      <div>
        <Header text={data.title} />

        <div className="curMemory">
          <section>
            <div className="curEmotion_img">
              <h3>그 때의 감정</h3>
              <img src={curEmotion.emotion_img} />
            </div>
          </section>

          <section className="curMemory_info">
            <div className="curMemory_info_content1">
              <p>{data.content1}</p>
            </div>
            <div className="curMemory_info_content2">
              <div>{data.content2}</div>
            </div>
          </section>

          <div className="curMemory_info_button">
            <Button text={'←'} onClick={() => navigate('/main')} />
            <Button type={'cancel'} text={'삭제'} onClick={handleRemove} />
          </div>
        </div>
      </div>
    );
  }
};

export default Detail;
