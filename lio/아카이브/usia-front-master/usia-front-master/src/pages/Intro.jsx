import React from 'react';
import Header from 'src/components/common/Header';
import Introduce from 'src/components/intro/Introduce';
import History from 'src/components/intro/History';
import Footer from 'src/components/common/Footer';

const Intro = ({ match }) => {
  const { menu } = match.params;
  return (
    <div className="page-wraper">
      <Header />
      {menu === 'introduce' && <Introduce />}
      {menu === 'history' && <History />}
      <Footer />
    </div>
  );
};

export default Intro;
