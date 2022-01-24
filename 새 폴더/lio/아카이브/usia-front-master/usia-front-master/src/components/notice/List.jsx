import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import useRead from 'src/hooks/notice/useRead';
import banner from 'src/images/notice/banner2.jpg';

const List = () => {
  const [count, setCount] = useState(6);
  const { notices, noticesLoading } = useRead();
  const onClick = () => {
    if (notices && !noticesLoading) {
      setCount(count + 6);
    }
  };
  return (
    <ListWrap>
      <div className="page-content ">
        <SubTitle>
          <div
            className="wt-bnr-inr overlay-wraper bg-center"
            style={{
              backgroundImage: `url(${banner})`,
              backgroundPosition: '0 -80px',
            }}
          >
            <div className="overlay-main bg-black opacity-07" />
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">공지사항</h2>
                  </div>
                </div>

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <Link to="/intro/introduce">공지사항</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SubTitle>
        <div className="section-full small-device p-t80 p-b30">
          <div className="container">
            <div className="portfolio-wrap mfp-gallery news-grid row clearfix">
              {notices &&
                !noticesLoading &&
                notices.slice(0, count).map(n => (
                  <div
                    key={n.id}
                    className="masonry-item cat-1 col-lg-4 col-md-6 col-sm-6 m-b50 blog-grid-1 mobile-view"
                  >
                    <div className="wt-img-effect ">
                      <Link to={`/notice/view/${n.id}`}>
                        <img src={`http://3.35.40.206:3000/${n.thumbnail}`} alt="" />
                      </Link>
                    </div>
                    <div className="wt-post-info  bg-white p-t30">
                      <div className="wt-post-title ">
                        <h4 className="post-title">
                          <Link to={`/notice/view/${n.id}`} className=" font-weight-600 m-t0">
                            {n.title}
                          </Link>
                        </h4>
                      </div>
                      <div className="wt-post-meta ">
                        <ul>
                          <li className="post-date">
                            <strong>{moment(n.createdAt).format('DD MMM')}</strong>{' '}
                            <span> {moment(n.createdAt).format('YYYY')}</span>{' '}
                          </li>
                          <li className="post-author">
                            <i className="fa fa-user" />
                            <Link to={`/notice/view/${n.id}`}>
                              By <span>Admin</span>
                            </Link>{' '}
                          </li>
                        </ul>
                      </div>
                      <div className="wt-post-text">
                        <p>{n.content}</p>
                      </div>
                      <Link
                        to={`/notice/view/${n.id}`}
                        className="btn-half site-button site-btn-effect button-md m-t5 button-right"
                      >
                        <span>Read More</span>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
            {notices.length > count && (
              <div
                className="col-lg-2 col-md-push-5 btn-half site-button site-btn-effect button-md button-center"
                style={{ textAlign: 'center', margin: '50px 0' }}
                onClick={onClick}
              >
                <span>Learn More</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </ListWrap>
  );
};

const SubTitle = styled.div`
  .wt-breadcrumb li {
    font-size: 14px;
  }
  @media only screen and (max-width: 425px) {
    .wt-bnr-inr {
      padding-top: 0;
      height: 220px;
    }
    .wt-breadcrumb li {
      font-size: 12px;
    }
  }
`;

const ListWrap = styled.div`
  @media only screen and (max-width: 425px) {
    .mobile-view {
      margin-bottom: 80px;
    }
    .button-center {
      display: flex;
      justify-content: center;
    }
    .button-right {
      float: right;
    }
    div[class*='col-'] {
      float: none;
    }
  }
`;

export default List;
