import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readInfo } from 'src/modules/info';

const useRead = () => {
  const { info, infoError, infoLoading } = useSelector(({ info, loading }) => ({
    info: info.info,
    infoError: info.infoError,
    infoLoading: loading['info/READ_INFO'],
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readInfo());
  }, []);

  return {
    info,
    infoError,
    infoLoading,
  };
};

export default useRead;
