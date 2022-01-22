import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import banner from 'src/images/service/banner1.jpg';
// import Image1 from 'src/images/service/trans_img3.jpg';
import Image2 from 'src/images/service/trans_img4.jpg';
import Image3 from 'src/images/service/translate1.png';
import Image4 from 'src/images/service/translate2.png';
import flag1 from 'src/images/service/flag/1_flag_gb.gif';
import flag2 from 'src/images/service/flag/2_flag_jp.gif';
import flag3 from 'src/images/service/flag/3_flag_china.gif';
import flag4 from 'src/images/service/flag/4_flag_ru.gif';
import flag5 from 'src/images/service/flag/5_flag_en.gif';
import flag6 from 'src/images/service/flag/6_flag_fr.gif';
import flag7 from 'src/images/service/flag/7_flag_deu.gif';
import flag8 from 'src/images/service/flag/8_flag_usia.gif';

const Translate = () => {
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
                  <h2 className="text-white">번역</h2>
                </div>
              </div>

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>서비스 안내</li>
                  <li>
                    <Link to="/service/translate">번역</Link>
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
              <div className="wt-post-media">
                {/* <img src={Image1} alt="" /> */}
              </div>

              <div className="wt-post-text">
                <div className="service-desc">
                  <h3>빠르고 정확한 번역, 무료 원어민 감수까지</h3>
                  <div className="tag-p">
                    저희 외대통역협회는 통역과 더불어 전문적인 번역 서비스를 제공합니다. 저희는
                    번역에 특화된 번역 교육 프로그램을 통해 전문 번역가를 양성하여 총 18개 언어로
                    한-외 번역 및 외-한 번역 서비스를 제공하고 있으며 전문 번역과 영상 번역, 소설 및
                    잡지 번역, 계약서 번역 등 의뢰하시는 분야에 가장 뛰어난 번역가를 연결해드리고
                    있습니다. 또한 번역가가 번역을 마친 후 무상 원어민 감수를 통해 작은 실수나
                    뉘앙스 차이까지 교정하여 번역물을 보내드리고 있습니다.
                  </div>
                </div>
                <div className="service-flag">
                  <h3>번역 가능 언어</h3>
                  <div className="flag-box">
                    <div className="flag-image">
                      <img src={flag1} alt="" />
                      영어
                    </div>
                    <div className="flag-image">
                      <img src={flag2} alt="" />
                      일본어
                    </div>
                    <div className="flag-image">
                      <img src={flag3} alt="" />
                      중국어
                    </div>
                    <div className="flag-image">
                      <img src={flag4} alt="" />
                      러시아어
                    </div>
                    <div className="flag-image">
                      <img src={flag5} alt="" />
                      스페인어
                    </div>
                    <div className="flag-image">
                      <img src={flag6} alt="" />
                      프랑스어
                    </div>
                    <div className="flag-image">
                      <img src={flag7} alt="" />
                      독일어
                    </div>
                    <div className="flag-image">
                      <img src={flag8} alt="" />
                      특수언어
                    </div>
                  </div>
                </div>
                <div className="service-tel">
                  <h3>번역 의뢰 및 예약</h3>
                  <div className="tag-p">Tel: 02-6959-6878, 010-5550-3032</div>
                  <Link
                    type="button"
                    className="btn-half site-button site-btn-effect button-md m-t5"
                    to="/consult/submit"
                  >
                    온라인 문의
                  </Link>
                </div>
                <div className="service-process">
                  <h3>번역 서비스 절차 안내</h3>
                  <img src={Image2} alt="" className="pc-process" />
                  <img src={Image3} alt="" className="mobile-process" />
                  <img src={Image4} alt="" className="mobile-process" />
                  <div className="tag-p">
                    본 단체는 학술적인 목적으로 설립된 한국외국어대학교 산하 학생자치기구이며 통번역
                    업무는 회원 개인적인 차원에서 진행되므로 본 단체에는 이익이 발생하지 않습니다.
                  </div>
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
  .mobile-process {
    display: none;
  }
  @media only screen and (max-width: 425px) {
    .blog-post {
      padding: 0;
    }
    .flag-image {
      width: 130px;
    }
    .pc-process {
      display: none;
    }
    .mobile-process {
      display: block;
    }
  }
`;

export default Translate;
