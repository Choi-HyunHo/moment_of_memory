const Button = ({ text, type, onClick }) => {
  const BtnType = ['success', 'cancel'].includes(type) ? type : 'default';

  return (
    <button
      className={['Button', `Button_${BtnType}`].join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'default',
};

export default Button;
