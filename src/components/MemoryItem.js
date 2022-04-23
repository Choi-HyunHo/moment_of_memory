import { useNavigate } from 'react-router-dom';
import Button from './Button';

const MemoryItem = ({ id, title, emotion, content1, date }) => {
  const navigate = useNavigate();

  const returnDate = new Date(date).toLocaleDateString();

  return (
    <div className="MemoryItem">
      <div
        className={[
          'MemoryItem_img_wrap',
          `MemoryItem_img_emotion${emotion}`,
        ].join(' ')}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div className="Detail" onClick={() => navigate('/detail')}>
        <div className="Detail_date">{returnDate}</div>
        <div className="Detail_title">{title}</div>
        <div className="Detail_content_1">{content1}</div>
      </div>
      <div className="MemoryItem_button">
        <Button text={'수정'} />
      </div>
    </div>
  );
};

export default MemoryItem;
