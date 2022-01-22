import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from 'src/components/admin/Login';
import { Home, Admin, Intro, Service, Consult, NoticeList, NoticeViewer } from './pages';

const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={Login} />
      <Route exact path="/admin/:menu" component={Admin} />
      <Route exact path="/intro/:menu" component={Intro} />
      <Route exact path="/service/:menu" component={Service} />
      <Route exact path="/consult/:menu" component={Consult} />
      <Switch>
        <Route exact path="/notice/:menu" component={NoticeList} />
        <Route exact path="/notice/view/:boardId" component={NoticeViewer} />
      </Switch>
    </>
  );
};

export default App;
