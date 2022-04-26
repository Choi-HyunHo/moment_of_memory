import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDataContext } from '../App';
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
  const { id } = useParams();

  const [data, setData] = useState();

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

  if (!data) {
    return <div>기억이 없습니다.</div>;
  } else {
    const curEmotion = emotionList.find(
      (item) => parseInt(item.emotion_id) === parseInt(data.emotion)
    );
    console.log(curEmotion);

    return (
      <div>
        <Header
          text={data.title}
          left={<Button text={'←'} />}
          right={<Button type={'cancel'} text={'삭제'} />}
        />

        <section>
          <div>
            <h4></h4>
            <img src={curEmotion.emotion_img} />
          </div>
        </section>
      </div>
    );
  }
};

export default Detail;
