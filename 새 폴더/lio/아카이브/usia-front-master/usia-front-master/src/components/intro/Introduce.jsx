import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import banner from 'src/images/intro/banner1.jpg';
// import Image from 'src/images/intro/intro_img1.jpg';

const Introduce = () => {
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
                  <h2 className="text-white">인사말</h2>
                </div>
              </div>

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>협회소개</li>
                  <li>
                    <Link to="/intro/introduce">인사말</Link>
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
                {/* <img src={Image} alt="" /> */}
              </div>

              <div className="wt-post-text">
                <h3>안녕하십니까, 한국외국어대학교 외대통역협회 회장 박은혜입니다.</h3>
                <div className="tag-p m-b25">
                  <div>
                    저희 외대통역협회를 찾아주셔서 감사합니다. 외대통역협회는 한국외국어대학교 산하
                    자치기구로서 3차의 선발 시험 및 1년에 걸친 자체적인 통번역 교육 프로그램을
                    이수한 12개 외국어의 우수한 능력을 지닌 한국외국어대학교 학생들로 구성되어
                    있습니다.
                  </div>
                  <br />
                  <div>
                    저희는 그 동안 각종 국제행사, 무역거래, 스포츠 경기 및 관광통역 등에 참가하여
                    풍부한 경험을 쌓아왔으며 모든 통 번역 분야를 통틀어서 단연 최장인 40년의 역사와
                    전통을 자랑합니다. 또, 본 협회는 고객의 신뢰를 바탕으로 정확하고 빠른 통 번역
                    서비스를 제공하고 있으며 국내 대기업뿐만 아니라 해외 기업에서도 오더를 받아
                    해외출장통역 및 국제행사통역을 맡아왔습니다.
                  </div>
                </div>
                <blockquote>
                  <i className="fa fa-quote-left" />
                  <div>
                    외대통역협회는 40년간의 노하우를 바탕으로 통 번역 분야에서 최고의 파트너가
                    되어드릴 것을 약속합니다. 감사합니다.
                  </div>
                  <div className="p-t30 col-md-offset-8 text-uppercase">
                    <strong className="pull-right">박은혜</strong>
                    <span>한국외국어대학교 외대통역협회 회장</span>
                  </div>
                  <i className="fa fa-quote-right" />
                </blockquote>
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
    word-break: keep-all;
  }
  blockquote {
    word-break: keep-all;
  }
  @media only screen and (max-width: 425px) {
    .blog-post {
      padding: 0;
    }
    .wt-post-text {
      blockquote {
        height: 200px;
        .fa-quote-left,
        .fa-quote-right {
          font-size: 40px;
        }
        .fa-quote-left {
          left: 15px;
          top: 15px;
        }
        div[class*='col-'] {
          float: right;
        }
      }
    }
  }
`;

export default Introduce;
