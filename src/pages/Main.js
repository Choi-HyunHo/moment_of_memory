import Button from '../components/Button';

const Main = () => {
  return (
    <div>
      <Button text={'<'} onClick={() => alert('버튼')} />
      <Button text={'>'} onClick={() => alert('버튼')} type="success" />
      <Button text={'버튼'} onClick={() => alert('버튼')} type="cancel" />
    </div>
  );
};

export default Main;
