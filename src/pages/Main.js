import Button from '../components/Button';
import Header from '../components/Header';

const Main = () => {
  return (
    <div>
      <Header
        left={<Button text={'<'} />}
        text={2022}
        right={<Button text={'>'} />}
      />
    </div>
  );
};

export default Main;
