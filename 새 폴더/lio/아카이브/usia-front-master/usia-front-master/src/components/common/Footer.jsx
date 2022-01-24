import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useReadInfo from 'src/hooks/common/useReadInfo';

const Footer = () => {
  const { info, infoLoading } = useReadInfo();
  return (
    <FooterWrap>
      <footer className="site-footer footer-large  footer-light	footer-wide">
        <div className="footer-top overlay-wraper">
          <div className="overlay-main" />
          <div className="container">
            <div className="text-center">
              <div className="footer-link">
                <ul>
                  <li>
                    <Link to="/intro/introduce" data-hover="협회소개">
                      협회소개
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/interprete" data-hover="서비스 안내">
                      서비스 안내
                    </Link>
                  </li>
                  <li>
                    <Link to="/consult/submit" data-hover="온라인문의">
                      온라인문의
                    </Link>
                  </li>
                  <li>
                    <Link to="/notice/list" data-hover="공지사항">
                      공지사항
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {info && !infoLoading && (
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="widget text-center getin-touch">
                    <h4 className="widget-title">연락처</h4>
                    <div className="widget-section">
                      <ul>
                        <li>{info.email}</li>
                        <li>{info.tel}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="widget text-center widget_address m-b20">
                    <h4 className="widget-title">주소</h4>
                    <div className="widget-section">
                      <ul>
                        <li>{info.addr}</li>
                      </ul>
                    </div>
                    <div className="footer-social-icon">
                      <ul className="social-icons f-social-link">
                        <li>
                          <a
                            href="https://www.facebook.com/theusia"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/hufs_usia"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="widget text-center">
                    <h4 className="widget-title">대표자</h4>
                    <div className="widget-section">
                      <ul>
                        <li>{info.repName}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="footer-bottom overlay-wraper">
          <div className="overlay-main" />
          <div className="container">
            <div className="row">
              <div className="wt-footer-bot-center">
                <span className="copyrights-text">© 2018 USIA All rights Reserved</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  @media only screen and (max-width: 425px) {
    .row {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export default Footer;
