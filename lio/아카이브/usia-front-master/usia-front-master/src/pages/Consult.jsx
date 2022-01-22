import React from 'react';
import Header from 'src/components/common/Header';
import Contents from 'src/components/consult/Contents';
import Success from 'src/components/consult/Success';
import Footer from 'src/components/common/Footer';

const Consult = ({ match, history }) => {
  const { menu } = match.params;
  return (
    <div className="page-wraper">
      <Header />
      {menu === 'submit' && <Contents history={history} />}
      {menu === 'success' && <Success />}
      <Footer />
    </div>
  );
};

export default Consult;
