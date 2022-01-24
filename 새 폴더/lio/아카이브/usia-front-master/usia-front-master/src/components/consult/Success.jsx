import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import banner from 'src/images/consult/banner1.jpg';
import check from 'src/images/check.png';

const Success = () => {
  return (
    <div className="page-content ">
      <SubTitle>
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${banner})`, backgroundPosition: '0 -300px' }}
        >
          <div className="overlay-main bg-black opacity-07" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="text-white">온라인문의</h2>
                </div>
              </div>

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="/consult/submit">온라인문의</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SubTitle>
      <ConsultWrap>
        <div className="success-box">
          <div>
            <img src={check} alt="" />
            문의가 완료되었습니다.
          </div>
        </div>
      </ConsultWrap>
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

const ConsultWrap = styled.div`
  min-height: 400px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  .success-box {
    margin: 10rem 0;
    font-size: 36px;
    img {
      width: 60px;
      margin-right: 3rem;
    }
    div {
      display: flex;
      align-items: center;
    }
  }
`;

export default Success;
