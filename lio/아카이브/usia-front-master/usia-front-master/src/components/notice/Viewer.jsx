import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import useViewer from 'src/hooks/notice/useViewer';
import useRead from 'src/hooks/notice/useRead';
import banner from 'src/images/notice/banner2.jpg';

const Viewer = ({ boardId }) => {
  const { notice, noticeLoading } = useViewer(parseInt(boardId, 10));
  const { notices, noticesLoading } = useRead();
  return (
    <div className="page-content ">
      {notice && !noticeLoading && (
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
                    <h2 className="text-white">{notice.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SubTitle>
      )}
      <div className="section-full small-device  p-tb80">
        <div className="container">
          {notice && !noticeLoading && (
            <div className="blog-post date-style-1 blog-detail text-black">
              <div className="wt-post-title ">
                <h4 className="post-title">{notice.title}</h4>
              </div>
              <div className="wt-post-meta ">
                <ul>
                  <li className="post-author">
                    <strong>By Admin</strong>
                  </li>
                  <li className="post-date">
                    <strong>{moment(notice.createdAt).format('DD MMMMM YYYY')}</strong>
                  </li>
                </ul>
              </div>

              <div className="">
                <div>
                  <pre dangerouslySetInnerHTML={{ __html: notice.content }} />
                </div>
                <div style={{ height: '20px' }}>
                  <Link
                    style={{ float: 'right' }}
                    to="/notice/list"
                    className="btn-half site-button site-btn-effect button-md "
                  >
                    <span>목록</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="section-full">
            <div className="section-content">
              <div className="row">
                {notices &&
                  !noticesLoading &&
                  notices.slice(0, 3).map(n => (
                    <div key={n.id} className="col-md-4 col-sm-6 m-b50">
                      <div className="blog-grid-1">
                        <div className="wt-post-info  bg-white p-t30">
                          <div className="wt-post-title">
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
                            className="btn-half site-button site-btn-effect button-md "
                          >
                            <span>Read More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default Viewer;
