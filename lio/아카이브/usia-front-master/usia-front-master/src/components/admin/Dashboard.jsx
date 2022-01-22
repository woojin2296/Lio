import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useLogin from 'src/hooks/admin/useLogin';
import Notice from './Notice';
import Consult from './Consult';
import Info from './Info';

import './style.css';

const Dashboard = ({ menu, history }) => {
  const { onCheck } = useLogin({ history });
  useEffect(() => {
    onCheck();
  }, []);
  return (
    <div className="admin-body">
      <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/admin/notice">
              USIA ADMIN
            </Link>
          </div>
          <div id="main-menu" className="main-menu collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className={menu === 'notice' ? 'active' : ''}>
                <Link to="/admin/notice">
                  <i className="menu-icon fa fa-flag" />
                  공지사항
                </Link>
              </li>
              <li className={menu === 'consult' ? 'active' : ''}>
                <Link to="/admin/consult">
                  <i className="menu-icon fa fa-comments" />
                  온라인문의
                </Link>
              </li>
              <li className={menu === 'info' ? 'active' : ''}>
                <Link to="/admin/info">
                  <i className="menu-icon fa fa-info-circle" />
                  정보변경
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
      {menu === 'notice' && <Notice />}
      {menu === 'consult' && <Consult />}
      {menu === 'info' && <Info />}
    </div>
  );
};

export default Dashboard;
