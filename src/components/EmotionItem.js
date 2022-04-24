const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_text,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={[
        'EmotionItem',
        isSelected ? `EmotionItem_emotionOn` : `EmotionItem_emotionOff`,
      ].join(' ')}
    >
      <img src={emotion_img} onClick={() => onClick(emotion_id)} />
      <span>{emotion_text}</span>
    </div>
  );
};

export default EmotionItem;
