import { useNavigate } from 'react-router-dom';
import Button from './Button';

const MemoryItem = ({ id, date, title, emotion, content2 }) => {
  const navigate = useNavigate();

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goModify = () => {
    navigate(`/modify/${id}`);
  };

  const goDetail = () => {
    navigate(`/detail/${id}`);
  };

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
      <div className="Detail" onClick={goDetail}>
        <div className="Detail_date">{strDate}</div>
        <div className="Detail_title">{title}</div>
        <div className="Detail_content_1">{content2}</div>
      </div>
      <div className="MemoryItem_button">
        <Button text={'수정'} onClick={goModify} />
      </div>
    </div>
  );
};

export default MemoryItem;
