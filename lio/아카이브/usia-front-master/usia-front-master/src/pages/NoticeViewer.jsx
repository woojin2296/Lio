import React from 'react';
import Header from 'src/components/common/Header';
import Viewer from 'src/components/notice/Viewer';
import Footer from 'src/components/common/Footer';

const NoticeViewer = ({ match }) => {
  const { boardId } = match.params;
  return (
    <div className="page-wraper">
      <Header />
      <Viewer boardId={boardId} />
      <Footer />
    </div>
  );
};

export default NoticeViewer;
