import React from 'react';
import Header from 'src/components/common/Header';
import Interprete from 'src/components/service/Interprete';
import Translate from 'src/components/service/Translate';
import Volunteer from 'src/components/service/Volunteer';
import Footer from 'src/components/common/Footer';

const Service = ({ match }) => {
  const { menu } = match.params;
  return (
    <div className="page-wraper">
      <Header />
      {menu === 'interprete' && <Interprete />}
      {menu === 'translate' && <Translate />}
      {menu === 'volunteer' && <Volunteer />}
      <Footer />
    </div>
  );
};

export default Service;
