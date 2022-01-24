import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import banner1 from 'src/images/responsive-web-logo.png';
import banner2 from 'src/images/compass.png';
import banner3 from 'src/images/responsive-web-helloweb.png';

const Contents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <ContentsWrap>
      <div className="page-content">
        <StyledSlider {...settings}>
          <div className="section-full p-tb80 bg-gray">
            <div className="row">
              <div className="col-md-6 col-sm-push-3 main-slide-text">
                <h2>
                  한국외국어대학교
                  <br />
                  외대통역협회
                </h2>
                <p>
                  외대통역협회는 3차에 걸친 시험과 자체적인
                  <br />
                  통번역 교육과정을 이수한 우수한
                  <br />
                  한국외국어대학교 학생들로 구성되어 있습니다.
                </p>
              </div>
              <div className="col-md-6 col-sm-push-1 center hidden-xs">
                <img src={banner1} alt="" />
              </div>
            </div>
          </div>
          <div className="section-full p-tb80 bg-gray">
            <div className="row">
              <div className="col-md-6 col-sm-push-3 main-slide-text">
                <h2>
                  빠르고 정확한
                  <br />
                  통번역서비스 제공
                </h2>
                <p>
                  고객만족도가 높은 가장 빠르고 정확한
                  <br />
                  맞춤형 통번역서비스를 제공하고
                  <br />
                  있습니다.
                </p>
              </div>
              <div className="col-md-6 col-sm-push-1 center hidden-xs">
                <img src={banner2} alt="" style={{ width: '35%', height: 'auto' }} />
              </div>
            </div>
          </div>
          <div className="section-full p-tb80 bg-gray">
            <div className="row">
              <div className="col-md-6 col-sm-push-3 main-slide-text">
                <h2>
                  봉사활동 및
                  <br />
                  재능기부
                </h2>
                <p>
                  다문화가정, 저소득층 어린이를 대상으로
                  <br />
                  외국어 교육 봉사 및 관공서 주최행사
                  <br />
                  통역 재능 기부를 하고 있습니다.
                </p>
              </div>
              <div className="col-md-6 col-sm-push center hidden-xs">
                <img src={banner3} alt="" className="volunteer-img" />
              </div>
            </div>
          </div>
        </StyledSlider>

        <div className="section-full p-t80 p-b50 bg-white">
          <div className="container">
            <div className="section-head text-center">
              <div className="wt-separator-outer separator-center">
                <div className="wt-separator">
                  <span className="text-primary text-uppercase sep-line-one ">what we do</span>
                </div>
              </div>
            </div>

            <div className="section-content">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-b30">
                  <div className="hover-box-effect  v-icon-effect">
                    <div className="wt-icon-box-wraper center p-lr30  p-b50 p-t50 bg-gray">
                      <div className="icon-lg text-primary m-b25">
                        <Link to="/intro/introduce">
                          <span className="icon-cell text-primary">
                            <i className="v-icon flaticon-placeholder" />
                          </span>
                        </Link>
                      </div>
                      <div className="icon-content text-black">
                        <h4 className="wt-tilte m-b25">About USIA</h4>
                        <p>외대통역협회 소개</p>
                        <Link
                          to="/intro/introduce"
                          className="site-button-link"
                          data-hover="Read More"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-b30">
                  <div className="hover-box-effect v-icon-effect">
                    <div className="wt-icon-box-wraper center p-lr30  p-b50 p-t50  bg-gray">
                      <div className="icon-lg text-primary m-b25">
                        <Link to="/service/interprete">
                          <span className="icon-cell text-primary">
                            <i className="v-icon flaticon-review" />
                          </span>
                        </Link>
                      </div>
                      <div className="icon-content text-black">
                        <h4 className="wt-tilte m-b25">Service</h4>
                        <p>통번역 서비스 안내</p>
                        <Link
                          to="/service/interprete"
                          className="site-button-link"
                          data-hover="Read More"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-b30">
                  <div className="hover-box-effect v-icon-effect">
                    <div className="wt-icon-box-wraper center p-lr30  p-b50 p-t50  bg-gray">
                      <div className="icon-lg text-primary m-b25">
                        <Link to="/service/volunteer">
                          <span className="icon-cell text-primary">
                            <i className="v-icon flaticon-plant" />
                          </span>
                        </Link>
                      </div>
                      <div className="icon-content text-black">
                        <h4 className="wt-tilte m-b25">Volunteer</h4>
                        <p>봉사활동 및 재능기부</p>
                        <Link
                          to="/service/volunteer"
                          className="site-button-link"
                          data-hover="Read More"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-b30">
                  <div className="hover-box-effect v-icon-effect">
                    <div className="wt-icon-box-wraper center p-lr30  p-b50 p-t50  bg-gray">
                      <div className="icon-lg text-primary m-b25">
                        <Link to="/consult/submit">
                          <span className="icon-cell text-primary">
                            <i className="v-icon flaticon-email" />
                          </span>
                        </Link>
                      </div>
                      <div className="icon-content text-black">
                        <h4 className="wt-tilte m-b25">Consult</h4>
                        <p>온라인문의</p>
                        <Link
                          to="/consult/submit"
                          className="site-button-link"
                          data-hover="Read More"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentsWrap>
  );
};

const ContentsWrap = styled.div``;

const StyledSlider = styled(Slider)`
  @media only screen and (max-width: 1024px) {
    .col-sm-push-3 {
      left: 10%;
    }
    img {
      width: 300px !important;
    }
    .volunteer-img {
      width: 400px !important;
    }
  }
  @media only screen and (max-width: 425px) {
    h2 {
      font-size: 32px;
      line-height: 45px;
      margin-bottom: 1rem;
    }
    p {
      font-size: 14px;
    }
    .row {
      margin: 0 5rem;
    }
  }
`;

export default Contents;
