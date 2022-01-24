import React from 'react';
import Header from 'src/components/common/Header';
import List from 'src/components/notice/List';
import Footer from 'src/components/common/Footer';

const NoticeList = () => {
  return (
    <div className="page-wraper">
      <Header />
      <List />
      <Footer />
    </div>
  );
};

export default NoticeList;
