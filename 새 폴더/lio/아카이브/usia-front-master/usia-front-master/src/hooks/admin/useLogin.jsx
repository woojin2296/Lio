import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, check, changeField, unloadAdmin } from 'src/modules/admin';
import swal from 'sweetalert';

const useLogin = ({ history }) => {
  const { adminLogin, loginError, adminCheck, checkError, checkLoading, uid, pw1 } = useSelector(
    ({ admin, loading }) => ({
      adminLogin: admin.adminLogin,
      loginError: admin.loginError,
      adminCheck: admin.adminCheck,
      checkError: admin.checkError,
      uid: admin.uid,
      pw1: admin.pw1,
      checkLoading: loading['admin/CHECK'],
    })
  );
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

  const onLogin = e => {
    e.preventDefault();
    dispatch(login({ uid, pw: pw1 }));
  };
  const onCheck = () => {
    dispatch(check());
  };

  useEffect(() => {
    if (adminLogin) {
      history.push('/admin/notice');
    }
  }, [adminLogin]);

  useEffect(() => {
    if (loginError) {
      swal('아이디 또는 비밀번호 틀림', '', 'error');
      dispatch(unloadAdmin());
    }
  }, [loginError]);

  return {
    onChangeField,
    onLogin,
    onCheck,
    adminCheck,
    checkError,
    checkLoading,
    uid,
    pw1,
  };
};

export default useLogin;
