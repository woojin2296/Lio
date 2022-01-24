import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Slider from 'react-slick';
import useCreate from 'src/hooks/consult/useCreate';
import banner from 'src/images/consult/banner1.jpg';
import flag1 from 'src/images/service/flag/1_flag_gb.gif';
import flag2 from 'src/images/service/flag/2_flag_jp.gif';
import flag3 from 'src/images/service/flag/3_flag_china.gif';
import flag4 from 'src/images/service/flag/4_flag_ru.gif';
import flag5 from 'src/images/service/flag/5_flag_en.gif';
import flag6 from 'src/images/service/flag/6_flag_fr.gif';
import flag7 from 'src/images/service/flag/7_flag_deu.gif';
import flag8 from 'src/images/service/flag/8_flag_usia.gif';

const Contents = ({ history }) => {
  const {
    onSubmit,
    onChangeField,
    onUnload,
    langId,
    name,
    email,
    tel,
    title,
    content,
    type,
  } = useCreate(history);
  const { innerWidth } = window;
  const [transActive, setTransActive] = useState(false);
  const [interActive, setInterActive] = useState(false);
  const [slideMove, setSlideMove] = useState(0);
  const [setBrowswerWidth] = useState(0);
  const [flagActive, setFlagActive] = useState({
    uk: false, // 1
    jp: false, // 2
    cn: false, // 3
    es: false, // 4
    de: false, // 5
    fr: false, // 6
    other: false, // 7
    ru: false, // 8
  });
  const onChangeTitle = e => onChangeField({ key: 'title', value: e.target.value });
  const onChangeContent = e => onChangeField({ key: 'content', value: e.target.value });
  const onChangeName = e => onChangeField({ key: 'name', value: e.target.value });
  const onChangeEmail = e => onChangeField({ key: 'email', value: e.target.value });
  const onChangeTEL = e => onChangeField({ key: 'tel', value: e.target.value });
  const onChangeFile = e => onChangeField({ key: 'file', value: e.target.files[0] });
  const onTransChange = e => {
    if (interActive) setInterActive(false);
    setTransActive(e.target.checked);
    if (e.target.checked) onChangeField({ key: 'type', value: 'translate' });
    if (!e.target.checked) onChangeField({ key: 'type', value: '' });
  };
  const onInterChange = e => {
    if (transActive) setTransActive(false);
    setInterActive(e.target.checked);
    if (e.target.checked) onChangeField({ key: 'type', value: 'interpreter' });
    if (!e.target.checked) onChangeField({ key: 'type', value: '' });
  };
  const onFlagChange = e => {
    setFlagActive({
      ...{
        uk: false, // 1
        jp: false, // 2
        cn: false, // 3
        es: false, // 4
        de: false, // 5
        fr: false, // 6
        other: false, // 7
        ru: false, // 8
      },
      [e.target.name]: e.target.checked,
    });
    if (e.target.checked) onChangeField({ key: 'langId', value: e.target.value });
    if (!e.target.checked) onChangeField({ key: 'langId', value: '' });
  };
  useEffect(() => {
    return () => onUnload();
  }, []);
  useEffect(() => {
    setBrowswerWidth(innerWidth);
    window.addEventListener('resize', setBrowswerWidth);
  }, [innerWidth]);
  const NextArrow = props => {
    const { currentSlide, onClick } = props;
    const onNextClick = () => {
      if (currentSlide === 0 && type === '') {
        swal('선택된 항목이 없습니다!', '', 'error');
        return;
      }
      if (currentSlide === 1 && langId === '') {
        swal('선택된 언어가 없습니다!', '', 'error');
        return;
      }
      setTimeout(onClick, 100);
      setSlideMove(slideMove + 1);
    };
    if (slideMove === 2) return null;
    return (
      <button type="button" onClick={onNextClick} className="btn btn-info next-btn">
        다음
      </button>
    );
  };

  const PrevArrow = props => {
    const { onClick } = props;
    const onPrevClick = () => {
      setTimeout(onClick, 100);
      setSlideMove(slideMove - 1);
    };
    if (slideMove === 0) return null;
    return (
      <button
        type="button"
        onClick={onPrevClick}
        className="btn btn-info prev-btn"
        style={{ zIndex: 99 }}
      >
        이전
      </button>
    );
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    touchMove: false,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="page-content">
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
      <StyledSlider {...settings} slideMove={slideMove} innerWidth={innerWidth}>
        <ConsultWrap>
          <div className="first-box">
            <div className="select-box">
              <label className={`type-box ${transActive ? 'active' : ''}`}>
                번역
                <input
                  type="checkbox"
                  name="translate"
                  onChange={onTransChange}
                  checked={transActive}
                />
              </label>
              <label className={`type-box ${interActive ? 'active' : ''}`}>
                통역
                <input
                  type="checkbox"
                  name="interprete"
                  onChange={onInterChange}
                  checked={interActive}
                />
              </label>
            </div>
          </div>
        </ConsultWrap>
        <ConsultWrap>
          <div className="second-box">
            <div className="select-box">
              <label className={`type-box ${flagActive.uk ? 'active' : ''}`}>
                <img src={flag1} alt="" />
                영어
                <input
                  type="checkbox"
                  name="uk"
                  onChange={onFlagChange}
                  checked={flagActive.uk}
                  value={1}
                />
              </label>
              <label className={`type-box ${flagActive.jp ? 'active' : ''}`}>
                <img src={flag2} alt="" />
                일본어
                <input
                  type="checkbox"
                  name="jp"
                  onChange={onFlagChange}
                  checked={flagActive.jp}
                  value={2}
                />
              </label>
              <label className={`type-box ${flagActive.cn ? 'active' : ''}`}>
                <img src={flag3} alt="" />
                중국어
                <input
                  type="checkbox"
                  name="cn"
                  onChange={onFlagChange}
                  checked={flagActive.cn}
                  value={3}
                />
              </label>
              <label className={`type-box ${flagActive.ru ? 'active' : ''}`}>
                <img src={flag4} alt="" />
                러시아어
                <input
                  type="checkbox"
                  name="ru"
                  onChange={onFlagChange}
                  checked={flagActive.ru}
                  value={8}
                />
              </label>
              <label className={`type-box ${flagActive.es ? 'active' : ''}`}>
                <img src={flag5} alt="" />
                스페인어
                <input
                  type="checkbox"
                  name="es"
                  onChange={onFlagChange}
                  checked={flagActive.es}
                  value={4}
                />
              </label>
              <label className={`type-box ${flagActive.fr ? 'active' : ''}`}>
                <img src={flag6} alt="" />
                불어
                <input
                  type="checkbox"
                  name="fr"
                  onChange={onFlagChange}
                  checked={flagActive.fr}
                  value={6}
                />
              </label>
              <label className={`type-box ${flagActive.de ? 'active' : ''}`}>
                <img src={flag7} alt="" />
                독일어
                <input
                  type="checkbox"
                  name="de"
                  onChange={onFlagChange}
                  checked={flagActive.de}
                  value={5}
                />
              </label>
              <label className={`type-box ${flagActive.other ? 'active' : ''}`}>
                <img src={flag8} alt="" />
                그 외 언어
                <input
                  type="checkbox"
                  name="other"
                  onChange={onFlagChange}
                  checked={flagActive.other}
                  value={7}
                />
              </label>
            </div>
          </div>
        </ConsultWrap>
        <ConsultWrap>
          <div className="third-box">
            <form className="comment-form" onSubmit={onSubmit}>
              <label htmlFor="repName">제목</label>
              <input
                className="form-control"
                type="text"
                value={title}
                name="title"
                onChange={onChangeTitle}
              />
              <label htmlFor="name">내용</label>
              <textarea
                className="form-control"
                type="text"
                value={content}
                name="name"
                onChange={onChangeContent}
                rows={5}
              />

              <label htmlFor="pw1">이름</label>
              <input
                className="form-control"
                type="text"
                value={name}
                name="uid"
                onChange={onChangeName}
              />
              <label htmlFor="pw2">이메일</label>
              <input
                className="form-control"
                type="email"
                value={email}
                name="email"
                onChange={onChangeEmail}
                defaultValue={email}
              />

              <label htmlFor="repName">전화번호</label>
              <input
                className="form-control"
                type="tel"
                value={tel}
                name="tel"
                onChange={onChangeTEL}
                defaultValue={tel}
              />
              <label htmlFor="name">파일</label>
              <input type="file" name="file" onChange={onChangeFile} />
              <button className="btn btn-info btn-lg consult-btn" type="submit">
                문의하기
              </button>
            </form>
          </div>
        </ConsultWrap>
      </StyledSlider>
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

const StyledSlider = styled(Slider)`
  position: relative;
  max-height: 900px;
  .next-btn,
  .prev-btn {
    position: absolute;
    top: 5%;
  }
  .next-btn {
    right: 10%;
  }
  .prev-btn {
    left: 10%;
  }
  .slick-track {
    display: flex;
  }
  .slick-track .slick-slide {
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 1024px) {
    .slick-slide {
      width: ${props => `${props.innerWidth}px`}!important;
    }
    .slick-track {
      width: ${props => `${props.innerWidth * 3}px`} !important;
      transform: ${props =>
        `translate3d(${-props.innerWidth * props.slideMove}px, 0px, 0px)`}!important;
    }
    .slick-list {
      padding: 0 !important;
    }
  }
`;

const ConsultWrap = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  .type-box {
    cursor: pointer;
    font-size: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background: white;
    border-radius: 5px;
    input {
      display: none;
    }
  }
  .active {
    background: #50aab2;
    border-color: white;
    color: white;
  }
  .button-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 2rem;
    width: 1200px;
    position: relative;
  }
  .process {
    position: absolute;
    left: 49%;
  }
  .select-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .first-box {
    margin: auto auto;
    .type-box {
      width: 300px;
      height: 200px;
    }
    .type-box + .type-box {
      margin-left: 5rem;
    }
  }
  .second-box {
    margin: 10rem auto;
    margin-top: 15rem;
    label {
      display: flex;
      flex-direction: column;
    }
    img {
      margin-bottom: 1rem;
    }
    .select-box {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 880px;
      margin: 0 auto;
    }
    .type-box {
      margin: 1rem;
      width: 200px;
      height: 150px;
      font-size: 24px;
    }
    .button-box {
      justify-content: space-between;
    }
  }
  .third-box {
    margin: 10rem auto;
    margin-top: 15rem;
    width: 100vw;
    padding: 0 20rem;
    .comment-form {
      margin: 0;
    }
    textarea {
      resize: none;
    }
    label {
      margin-top: 2rem;
    }
    .button-box {
      justify-content: flex-start;
    }
    .consult-btn {
      margin-top: 2rem;
      float: right;
    }
  }
  @media only screen and (max-width: 1024px) {
    .second-box {
      width: 100vw;
      .select-box {
        width: 100vw;
      }
      .type-box {
        width: 20%;
      }
    }
    .third-box {
      width: 100vw;
      margin-top: 10rem;
      padding: 0 10rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .second-box {
      width: 100vw;
      .select-box {
        width: 100vw;
      }
      .type-box {
        width: 20%;
      }
    }
    .third-box {
      width: 100vw;
      margin-top: 10rem;
      padding: 0 8rem;
    }
  }
  @media only screen and (max-width: 425px) {
    .select-box {
      flex-wrap: wrap;
      width: auto !important;
    }
    .first-box {
      width: 425px;
      .type-box {
        width: 70%;
        height: 250px;
        font-size: 32px;
      }
      .type-box + .type-box {
        margin: 0;
      }
    }
    .second-box {
      .select-box {
        label {
          font-size: 15px;
        }
        img {
          width: 70%;
        }
      }
      .type-box {
        width: 40%;
      }
    }
    .third-box {
      width: 100vw;
      margin-top: 10rem;
      padding: 0;
    }
    .comment-form {
      margin: 0 4rem !important;
    }
  }
`;

export default Contents;
