import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readConsult, readConsultList } from 'src/modules/consult';

const useRead = () => {
  const {
    consult,
    consultFile,
    consults,
    consultError,
    consultsError,
    consultLoading,
    consultsLoading,
  } = useSelector(({ consult, loading }) => ({
    consult: consult.consult,
    consultFile: consult.consultFile,
    consultError: consult.consultError,
    consults: consult.consults,
    consultsError: consult.consultsError,
    consultLoading: loading['consult/READ_CONSULT'],
    consultsLoading: loading['consult/READ_CONSULTLIST'],
  }));
  const dispatch = useDispatch();

  const onReadConsult = boardId => dispatch(readConsult(boardId));

  useEffect(() => {
    dispatch(readConsultList());
  }, []);

  return {
    onReadConsult,
    consult,
    consultFile,
    consults,
    consultError,
    consultsError,
    consultLoading,
    consultsLoading,
  };
};

export default useRead;
