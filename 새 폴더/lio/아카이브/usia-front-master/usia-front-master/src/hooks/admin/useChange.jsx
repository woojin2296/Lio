import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readAdmin, changeAdmin, unloadAdmin, changeField } from 'src/modules/admin';
import swal from 'sweetalert';

const useChange = () => {
  const { information, infoError, repName, name, uid, tel, address, email } = useSelector(
    ({ admin }) => ({
      information: admin.information,
      infoError: admin.infoError,
      repName: admin.repName,
      name: admin.name,
      uid: admin.uid,
      tel: admin.tel,
      address: admin.address,
      email: admin.email,
    })
  );
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

  const onChangeSubmit = e => {
    e.preventDefault();
    dispatch(changeAdmin({ repName, name, tel, addr: address, email }));
  };

  useEffect(() => {
    dispatch(readAdmin());
  }, []);

  useEffect(() => {
    if (information) swal('변경완료!', '', 'success');
    dispatch(unloadAdmin());
  }, [information]);

  useEffect(() => {
    if (infoError) swal(`변경사항이 없습니다.`, '', 'error');
    dispatch(unloadAdmin());
  }, [infoError]);

  return {
    onChangeField,
    onChangeSubmit,
    repName,
    name,
    uid,
    tel,
    address,
    email,
  };
};

export default useChange;
