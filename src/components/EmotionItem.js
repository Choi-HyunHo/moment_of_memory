const EmotionItem = ({ emotion_id, emotion_img, emotion_text, onClick }) => {
  return (
    <div className="EmotionItem">
      <img src={emotion_img} onClick={() => onClick(emotion_id)} />
      <div>{emotion_text}</div>
    </div>
  );
};

export default EmotionItem;
