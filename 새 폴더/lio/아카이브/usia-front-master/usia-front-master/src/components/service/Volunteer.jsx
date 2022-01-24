import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import banner from 'src/images/service/banner2.jpg';
// import Image1 from 'src/images/service/act_img1.jpg';
// import Image2 from 'src/images/service/act_img2.jpg';

const Volunteer = () => {
  return (
    <div className="page-content ">
      <SubTitle>
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="overlay-main bg-black opacity-07" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">봉사활동</h2>
                </div>
              </div>

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>서비스 안내</li>
                  <li>
                    <Link to="/service/volunteer">봉사활동</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SubTitle>

      <ContentsWrap>
        <div className="section-full small-device  p-tb80">
          <div className="container">
            <div className="blog-post date-style-1 blog-detail text-black">
              <div className="wt-post-media" style={{ display: 'flex' }}>
                {/* <img src={Image1} alt="" />
                <img src={Image2} alt="" /> */}
              </div>

              <div className="wt-post-text">
                <div className="service-desc">
                  <div className="tag-p">
                    외대통역협회에서는 다문화가정, 저소득층 어린이를 대상으로 외국어 교육 봉사 및
                    관공서 주최행사 통역 재능 기부를 하고 있습니다.
                    <br />
                    <br />
                    저희는 BBB KOREA 와 협약을 맺어 모든 협회원이 BBB KOREA 전화통역 봉사활동을
                    시행하고 있습니다.
                  </div>
                </div>
                <div className="service-tel">
                  <h4>봉사활동 및 기부 문의</h4>
                  <div className="tag-p">Tel: 02-6959-6878, 010-5550-3032</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentsWrap>
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

const ContentsWrap = styled.div`
  h4,
  h3 {
    margin-bottom: 2rem;
    word-break: keep-all;
  }
  .tag-p {
    margin-bottom: 1.5rem;
    word-break: keep-all;
  }
  @media only screen and (max-width: 425px) {
    .blog-post {
      padding: 0;
    }
    .wt-post-media {
      display: block !important;
    }
  }
`;

export default Volunteer;
