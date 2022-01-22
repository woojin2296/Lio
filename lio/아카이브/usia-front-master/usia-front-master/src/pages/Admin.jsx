import React, { useEffect } from 'react';
import Dashboard from 'src/components/admin/Dashboard';
import useLogin from 'src/hooks/admin/useLogin';

const Admin = ({ match, history }) => {
  const { menu } = match.params;
  const { adminCheck, checkError, checkLoading } = useLogin({ history });
  // const { cookie } = document;
  useEffect(() => {
    if (checkLoading) {
      if (adminCheck === 1) history.push('/admin/notice');
      if (checkError) history.push('/');
    }
  }, [checkLoading, adminCheck, checkError]);
  return (
    <>
      <Dashboard menu={menu} history={history} />
    </>
  );
};

export default Admin;
