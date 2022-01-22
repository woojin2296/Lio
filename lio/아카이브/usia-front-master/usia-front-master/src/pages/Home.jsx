import React from 'react';
import Header from 'src/components/common/Header';
import Contents from 'src/components/home/Contents';
import Footer from 'src/components/common/Footer';

const Home = () => {
  return (
    <div className="page-wraper">
      <Header />
      <Contents />
      <Footer />
    </div>
  );
};

export default Home;
