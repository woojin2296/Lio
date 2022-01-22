import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from 'src/images/logo-green.png';

const Header = () => {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(!show);
  };
  return (
    <HeaderWrap>
      <header className="site-header header-style-1 nav-wide">
        <div className="sticky-header main-bar-wraper">
          <div className="main-bar bg-white">
            <div className="container header-center">
              <div className="wt-header-left">
                <div className="logo-header">
                  <div className="logo-header-inner logo-header-one">
                    <Link to="/">
                      <img src={Logo} width="100" height="50" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="wt-header-center">
                <button type="button" className="navbar-toggle collapsed" onClick={onClick}>
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div className="header-nav navbar-collapse collapse nav-dark">
                  <ul className=" nav navbar-nav nav-line-animation">
                    <li>
                      <Link to="/intro/introduce">협회소개</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/intro/introduce">인사말</Link>
                        </li>
                        <li>
                          <Link to="/intro/history">연혁</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/service/interprete">서비스 안내</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/service/interprete">통역</Link>
                        </li>
                        <li>
                          <Link to="/service/translate">번역</Link>
                        </li>
                        <li>
                          <Link to="/service/volunteer">봉사활동</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/consult/submit">온라인문의</Link>
                    </li>
                    <li>
                      <Link to="/notice/list">공지사항</Link>
                    </li>
                  </ul>
                </div>
                <div
                  className={`${show ? 'show-nav ' : ''}header-nav 
                  collapse nav-dark`}
                  onClick={() => setShow(false)}
                >
                  <ul className=" nav navbar-nav nav-line-animation">
                    <li>
                      <Link to="/intro/introduce">인사말</Link>
                    </li>
                    <li>
                      <Link to="/intro/history">연혁</Link>
                    </li>
                    <li>
                      <Link to="/service/interprete">통역</Link>
                    </li>
                    <li>
                      <Link to="/service/translate">번역</Link>
                    </li>
                    <li>
                      <Link to="/service/volunteer">봉사활동</Link>
                    </li>
                    <li>
                      <Link to="/consult/submit">온라인문의</Link>
                    </li>
                    <li>
                      <Link to="/notice/list">공지사항</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  .wt-header-center {
    padding-left: 500px;
  }
  @media only screen and (max-width: 1024px) {
    .wt-header-center {
      padding-left: 300px;
    }
  }
  @media only screen and (max-width: 425px) {
    /* .header-center .wt-header-right {
      display: none;
    } */
    .show-nav {
      display: block;
      margin-top: 70px;
    }
    .header-nav {
      clear: none;
    }
    .header-center {
      justify-content: flex-start;
    }
    .header-center .wt-header-center .header-nav .nav {
      padding: 0;
    }
    .wt-header-center {
      padding-left: 0;
      z-index: 99;
      width: 150px;
    }
    .navbar-toggle {
      margin-top: 18px;
      margin-right: 0;
    }
    .logo-header-inner {
      vertical-align: top;
      img {
        max-width: 70%;
        max-height: 70%;
      }
    }
  }
`;

export default Header;
