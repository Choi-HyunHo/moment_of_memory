import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDataContext } from '../App';
import MemoryEditor from '../components/MemoryEditor';

const Modify = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const memoryData = useContext(AppDataContext);

  // targetItem의 상태 - originData : 원본 데이터
  const [originData, setOriginData] = useState();

  useEffect(() => {
    if (memoryData.length >= 1) {
      const targetItem = memoryData.find(
        (list) => parseInt(list.id) === parseInt(id)
      );

      if (targetItem) {
        setOriginData(targetItem);
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [id, memoryData]);

  return (
    <div>
      {originData && <MemoryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Modify;
