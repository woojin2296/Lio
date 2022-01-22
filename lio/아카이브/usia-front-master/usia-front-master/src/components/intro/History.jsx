import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import banner from 'src/images/intro/banner2.jpg';

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
                  <h2 className="text-white">연혁</h2>
                </div>
              </div>

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>협회소개</li>
                  <li>
                    <Link to="/intro/introduce">연혁</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SubTitle>

      <div className="section-full small-device  p-tb80">
        <div className="container">
          <ul className="timeline">
            <li>
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2018년</h4>
                </div>
                <div className="timeline-body">
                  <p className="history-p">12월</p>
                  <ul>
                    <li className="history-li">한국원자력산업회 번역</li>
                    <li className="history-li">주식회사 CSM 번역</li>
                  </ul>
                  <p className="history-p">11월</p>
                  <ul>
                    <li className="history-li">밀크코리아 번역</li>
                    <li className="history-li">서울지방경찰청 번역</li>
                  </ul>
                  <p className="history-p">10월</p>
                  <ul>
                    <li className="history-li">듀폰코리아 번역</li>
                    <li className="history-li">Idiada 통역</li>
                    <li className="history-li">세진정밀공업 전화통역</li>
                  </ul>
                  <p className="history-p">9월</p>
                  <ul>
                    <li className="history-li">전국농촌체험휴양마을협의회</li>
                  </ul>
                  <p className="history-p">8월</p>
                  <ul>
                    <li className="history-li">금천예술공장 통역</li>
                    <li className="history-li">디즈니 통역</li>
                    <li className="history-li">버버리 번역</li>
                    <li className="history-li">미국 숲 유치원 통역 및 번역</li>
                    <li className="history-li">두산매거진 번역</li>
                  </ul>
                  <p className="history-p">7월</p>
                  <ul>
                    <li className="history-li">한화에너지 번역</li>
                  </ul>
                  <p className="history-p">6월</p>
                  <ul>
                    <li className="history-li">대일항쟁기강제동원피해자연합회 통역</li>
                    <li className="history-li">영음아트 번역</li>
                    <li className="history-li">미디어링스커뮤니케이션 번역</li>
                    <li className="history-li">법무법인 써밋 번역</li>
                    <li className="history-li">부산 비멘날레 번역</li>
                  </ul>
                  <p className="history-p">5월</p>
                  <ul>
                    <li className="history-li">듀코젠 통역</li>
                    <li className="history-li">미래엔 번역</li>
                  </ul>
                  <p className="history-p">4월</p>
                  <ul>
                    <li className="history-li">한국브이알에이알콘텐츠진흥협회 통역</li>
                    <li className="history-li">NYK BULKSHIP KOREA 번역</li>
                  </ul>
                  <p className="history-p">3월</p>
                  <ul>
                    <li className="history-li">수출상담회 통역</li>
                    <li className="history-li">강원무역센터 통역</li>
                    <li className="history-li">피알원 번역</li>
                    <li className="history-li">W코리아매거진 번역</li>
                    <li className="history-li">명소아이엠씨 번역</li>
                  </ul>
                  <p className="history-p">2월</p>
                  <ul>
                    <li className="history-li">디즈니코리아 통역</li>
                    <li className="history-li">CJ 제일제당 통역</li>
                    <li className="history-li">세진정밀공업 전화통역</li>
                    <li className="history-li">네오팩트 번역</li>
                    <li className="history-li">아람교역 번역</li>
                    <li className="history-li">외대역사관 번역</li>
                  </ul>
                  <p className="history-p">1월</p>
                  <ul>
                    <li className="history-li">국립현대미술관 번역</li>
                    <li className="history-li">(주)넥스트 인터네셔널 번역</li>
                    <li className="history-li">TNS 미디어 번역</li>
                    <li className="history-li">비엠제이코리아 번역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2017년</h4>
                </div>
                <div className="timeline-body">
                  <p className="history-p">12월</p>
                  <ul>
                    <li className="history-li">스페인 대사관 번역</li>
                  </ul>
                  <p className="history-p">11월</p>
                  <ul>
                    <li className="history-li">한국인삼공사 번역</li>
                  </ul>
                  <p className="history-p">10월</p>
                  <ul>
                    <li className="history-li">피알원 번역</li>
                    <li className="history-li">Sakhalin Energy Investment Co. Ltd. 통역</li>
                  </ul>
                  <p className="history-p">9월</p>
                  <ul>
                    <li className="history-li">KBS 번역</li>
                    <li className="history-li">더블유 번역</li>
                    <li className="history-li">트루커뮤니케이션스 번역</li>
                  </ul>
                  <p className="history-p">7월</p>
                  <ul>
                    <li className="history-li">에네스지 번역</li>
                  </ul>
                  <p className="history-p">4월</p>
                  <ul>
                    <li className="history-li">CJ제일제당 통역</li>
                    <li className="history-li">외교부 번역</li>
                    <li className="history-li">더블유 번역</li>
                  </ul>
                  <p className="history-p">3월</p>
                  <ul>
                    <li className="history-li">우촌초등학교 통역</li>
                    <li className="history-li">왈츠와 닥터만 번역</li>
                    <li className="history-li">비제이코리아 번역</li>
                  </ul>
                  <p className="history-p">2월</p>
                  <ul>
                    <li className="history-li">디즈니 통역</li>
                    <li className="history-li">네오팩트 번역</li>
                  </ul>
                  <p className="history-p">1월</p>
                  <ul>
                    <li className="history-li">대한물산 기획실 번역</li>
                    <li className="history-li">명소 번역</li>
                    <li className="history-li">국립현대미술관 번역</li>
                    <li className="history-li">세진정밀공역 통역</li>
                    <li className="history-li">CJ 통역</li>
                    <li className="history-li">이화박물관 번역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2016년</h4>
                </div>
                <div className="timeline-body">
                  <p>12월</p>
                  <ul>
                    <li className="history-li">미래엔출판사 통역</li>
                    <li className="history-li">W 매거진 번역</li>
                    <li className="history-li">한국외대 역사관 번역</li>
                  </ul>
                  <p className="history-p">11월</p>
                  <ul>
                    <li className="history-li">인사혁신처 통역</li>
                    <li className="history-li">한국문화재재단 번역</li>
                  </ul>
                  <p className="history-p">10월</p>
                  <ul>
                    <li className="history-li">서울외신기자클럽 통역</li>
                  </ul>
                  <p className="history-p">8월</p>
                  <ul>
                    <li className="history-li">동원식품 통역</li>
                    <li className="history-li">코엑스 K웹스트영화제 통번역 공식 파트너</li>
                    <li className="history-li">아모레퍼시픽 통역</li>
                    <li className="history-li">TS 엔터테인먼트 통역</li>
                    <li className="history-li">대구사진비엔날레조직위원회 번역 공식 파트너</li>
                  </ul>
                  <p className="history-p">7월</p>
                  <ul>
                    <li className="history-li">CJ 제일제당 통역</li>
                    <li className="history-li">한진관광 통역</li>
                    <li className="history-li">태권도협회 통역</li>
                    <li className="history-li">대구사진비엔날레조직위원회 번역 공식 파트너</li>
                  </ul>
                  <p className="history-p">6월</p>
                  <ul>
                    <li className="history-li">청와대 경호실 통역</li>
                    <li className="history-li">LG생활건강 번역</li>
                    <li className="history-li">수원시청 번역</li>
                  </ul>
                  <p className="history-p">5월</p>
                  <ul>
                    <li className="history-li">유럽단편영화제 통역</li>
                    <li className="history-li">대구사진비에날레 조직위원회 통역</li>
                    <li className="history-li">서울시 교육청 통역</li>
                  </ul>
                  <p className="history-p">4월</p>
                  <ul>
                    <li className="history-li">CJ 통역</li>
                    <li className="history-li">국민대학교 통역</li>
                  </ul>
                  <p className="history-p">3월</p>
                  <ul>
                    <li className="history-li">코엑스 통역</li>
                    <li className="history-li">이화박물관 번역</li>
                    <li className="history-li">외교통상부 번역</li>
                    <li className="history-li">대구사진비에날레 조직위원회 통역</li>
                  </ul>
                  <p className="history-p">2월</p>
                  <ul>
                    <li className="history-li">대구사진비에날레 조직위원회 통역</li>
                  </ul>
                  <p className="history-p">1월</p>
                  <ul>
                    <li className="history-li">한국공항공사 번역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2015년</h4>
                </div>
                <div className="timeline-body">
                  <p className="history-p">11월</p>
                  <ul>
                    <li className="history-li">JTBC 출장번역</li>
                  </ul>
                  <p className="history-p">10월</p>
                  <ul>
                    <li className="history-li">한국도로공사 통역</li>
                    <li className="history-li">수원시청 통역</li>
                    <li className="history-li">대한축구협회 통역</li>
                  </ul>
                  <p className="history-p">7월</p>
                  <ul>
                    <li className="history-li">KBS 생로병사의비밀팀 인터뷰 통역</li>
                  </ul>
                  <p className="history-p">6월</p>
                  <ul>
                    <li className="history-li">디즈니 통역</li>
                    <li className="history-li">한국국제관광 사무국 통역</li>
                  </ul>
                  <p className="history-p">5월</p>
                  <ul>
                    <li className="history-li">SBS윤리경영팀 번역</li>
                    <li className="history-li">CJ제일제당 통역</li>
                  </ul>
                  <p className="history-p">4월</p>
                  <ul>
                    <li className="history-li">울산과학기술대학교 번역</li>
                  </ul>
                  <p className="history-p">3월</p>
                  <ul>
                    <li className="history-li">왈츠와닥터만 번역</li>
                  </ul>
                  <p className="history-p">2월</p>
                  <ul>
                    <li className="history-li">수성엔지니어링 통역</li>
                  </ul>
                  <p className="history-p">1월</p>
                  <ul>
                    <li className="history-li">인텔리전스코리아 순차통역</li>
                    <li className="history-li">아람교역 담당 번역 업체</li>
                    <li className="history-li">한국외국어대학교 역사관 전문번역</li>
                    <li className="history-li">문화재재단 번역</li>
                    <li className="history-li">한국콘텐츠진흥원 통역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2014년</h4>
                </div>
                <div className="timeline-body">
                  <p>12월</p>
                  <ul>
                    <li className="history-li">미래엔출판사 번역</li>
                  </ul>
                  <p className="history-p">11월</p>
                  <ul>
                    <li className="history-li">한양대학교 인문학포럼 통역</li>
                    <li className="history-li">아시아문화개발원 번역</li>
                  </ul>
                  <p className="history-p">9월</p>
                  <ul>
                    <li className="history-li">한아도시연구소 번역</li>
                    <li className="history-li">대한축구협회 통역</li>
                  </ul>
                  <p className="history-p">8월</p>
                  <ul>
                    <li className="history-li">전남 여수시청 통역</li>
                  </ul>
                  <p className="history-p">7월</p>
                  <ul>
                    <li className="history-li">이비스버젯동대문호텔 통역</li>
                  </ul>
                  <p className="history-p">6월</p>
                  <ul>
                    <li className="history-li">AXN Korea 번역</li>
                    <li className="history-li">월트디즈니 통역</li>
                  </ul>
                  <p className="history-p">5월</p>
                  <ul>
                    <li className="history-li">세부퍼시픽항공 통역</li>
                  </ul>
                  <p className="history-p">3월</p>
                  <ul>
                    <li className="history-li">한국문화재재단 번역</li>
                    <li className="history-li">LG상사 통역</li>
                  </ul>
                  <p className="history-p">2월</p>
                  <ul>
                    <li className="history-li">한밤의TV연예 전화통역</li>
                    <li className="history-li">대검찰청 통역</li>
                  </ul>
                  <p className="history-p">1월</p>
                  <ul>
                    <li className="history-li">KBS 영상번역</li>
                    <li className="history-li">한국윤활학회 번역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2013년</h4>
                </div>
                <div className="timeline-body">
                  <p>12월</p>
                  <ul>
                    <li className="history-li">대한출판문화협회 통역</li>
                    <li className="history-li">성북정보도서관 번역</li>
                  </ul>
                  <p className="history-p">11월</p>
                  <ul>
                    <li className="history-li">한국문화재보호재단 번역</li>
                    <li className="history-li">SBS ESPN IOC회의 통역</li>
                    <li className="history-li">LPGA골프 번역</li>
                  </ul>
                  <p className="history-p">10월</p>
                  <ul>
                    <li className="history-li">한국도로공사 통역</li>
                  </ul>
                  <p className="history-p">8월</p>
                  <ul>
                    <li className="history-li">서울대다문화교육원 통역</li>
                    <li className="history-li">한국농촌경제연구원 통역, 번역</li>
                  </ul>
                  <p className="history-p">7월</p>
                  <ul>
                    <li className="history-li">동작구청 통역</li>
                    <li className="history-li">웅진씽크빅 번역</li>
                  </ul>
                  <p className="history-p">5월</p>
                  <ul>
                    <li className="history-li">CJ제일제당 통역</li>
                    <li className="history-li">JTBC 번역</li>
                    <li className="history-li">한국인삼공사 통역</li>
                  </ul>
                  <p className="history-p">4월</p>
                  <ul>
                    <li className="history-li">수원지방법원 통역</li>
                  </ul>
                  <p className="history-p">3월</p>
                  <ul>
                    <li className="history-li">월트디즈니 통역</li>
                  </ul>
                  <p className="history-p">2월</p>
                  <ul>
                    <li className="history-li">르완다대사관 번역</li>
                  </ul>
                  <p className="history-p">1월</p>
                  <ul>
                    <li className="history-li">평창 스페셜 올림픽 성화봉송 순차통역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2012년</h4>
                </div>
                <div className="timeline-body">
                  <p>12월</p>
                  <ul>
                    <li className="history-li">디즈니 통역</li>
                  </ul>
                  <p className="history-p">10월</p>
                  <ul>
                    <li className="history-li">현대자동차 통역</li>
                  </ul>
                  <p className="history-p">9월</p>
                  <ul>
                    <li className="history-li">국회사무처 통역</li>
                    <li className="history-li">세계 청소년 야구 선수권 대회 단체 통역</li>
                  </ul>
                  <p className="history-p">6월</p>
                  <ul>
                    <li className="history-li">네오위즈 번역</li>
                  </ul>
                  <p className="history-p">5월</p>
                  <ul>
                    <li className="history-li">의정부 국제음악축제 동시통역</li>
                    <li className="history-li">국제시청 국제교류 통역</li>
                    <li className="history-li">메리츠 화재 번역</li>
                  </ul>
                  <p className="history-p">4월</p>
                  <ul>
                    <li className="history-li">밸라루스 대사관 통역</li>
                    <li className="history-li">서울남부지방법원 통역</li>
                    <li className="history-li">
                      세계 여수 박람회에서 활동-국제관 및 조직위원회 일동
                    </li>
                  </ul>
                  <p className="history-p">3월</p>
                  <ul>
                    <li className="history-li">SBS 모닝와이드 E&C 동시통역</li>
                    <li className="history-li">아리랑TV 통역</li>
                    <li className="history-li">호주정부관광청 통역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2011년</h4>
                </div>
                <div className="timeline-body">
                  <p className="history-p">8월</p>
                  <ul>
                    <li className="history-li">㈜앤프라니 홀리카 번역 업체 선정</li>
                    <li className="history-li">㈜세스미디어 회의 통역</li>
                    <li className="history-li">Li&S 회의 통역</li>
                  </ul>
                  <p className="history-p">7월</p>
                  <ul>
                    <li className="history-li">월트디즈니 코리아 회계감사 통역</li>
                  </ul>
                  <p className="history-p">4월</p>
                  <ul>
                    <li className="history-li">삼성물산 수행통역</li>
                  </ul>
                  <p className="history-p">2월</p>
                  <ul>
                    <li className="history-li">대우인터내셔널 계약서 번역</li>
                  </ul>
                  <p className="history-p">1월</p>
                  <ul>
                    <li className="history-li">MBC 뉴스데스크 전화통역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2012년</h4>
                </div>
                <div className="timeline-body">
                  <p>12월</p>
                  <ul>
                    <li className="history-li">디즈니 통역</li>
                  </ul>
                  <p className="history-p">10월</p>
                  <ul>
                    <li className="history-li">현대자동차 통역</li>
                  </ul>
                  <p className="history-p">9월</p>
                  <ul>
                    <li className="history-li">국회사무처 통역</li>
                    <li className="history-li">세계 청소년 야구 선수권 대회 단체 통역</li>
                  </ul>
                  <p className="history-p">6월</p>
                  <ul>
                    <li className="history-li">네오위즈 번역</li>
                  </ul>
                  <p className="history-p">5월</p>
                  <ul>
                    <li className="history-li">의정부 국제음악축제 동시통역</li>
                    <li className="history-li">국제시청 국제교류 통역</li>
                    <li className="history-li">메리츠 화재 번역</li>
                  </ul>
                  <p className="history-p">4월</p>
                  <ul>
                    <li className="history-li">밸라루스 대사관 통역</li>
                    <li className="history-li">서울남부지방법원 통역</li>
                    <li className="history-li">
                      세계 여수 박람회에서 활동-국제관 및 조직위원회 일동
                    </li>
                  </ul>
                  <p className="history-p">3월</p>
                  <ul>
                    <li className="history-li">SBS 모닝와이드 E&C 동시통역</li>
                    <li className="history-li">아리랑TV 통역</li>
                    <li className="history-li">호주정부관광청 통역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2011년</h4>
                </div>
                <div className="timeline-body">
                  <p className="history-p">8월</p>
                  <ul>
                    <li className="history-li">㈜앤프라니 홀리카 번역 업체 선정</li>
                    <li className="history-li">㈜세스미디어 회의 통역</li>
                    <li className="history-li">Li&S 회의 통역</li>
                  </ul>
                  <p className="history-p">7월</p>
                  <ul>
                    <li className="history-li">월트디즈니 코리아 회계감사 통역</li>
                  </ul>
                  <p className="history-p">4월</p>
                  <ul>
                    <li className="history-li">삼성물산 수행통역</li>
                  </ul>
                  <p className="history-p">2월</p>
                  <ul>
                    <li className="history-li">대우인터내셔널 계약서 번역</li>
                  </ul>
                  <p className="history-p">1월</p>
                  <ul>
                    <li className="history-li">MBC 뉴스데스크 전화통역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2010년</h4>
                </div>
                <div className="timeline-body">
                  <p>12월</p>
                  <ul>
                    <li className="history-li">SK건설 순차통역</li>
                    <li className="history-li">서울여자대학교 번역</li>
                  </ul>
                  <p className="history-p">9월</p>
                  <ul>
                    <li className="history-li">동부증권 회사 소개자료 번역</li>
                  </ul>
                  <p className="history-p">7월</p>
                  <ul>
                    <li className="history-li">삼성전자 단체 번역</li>
                  </ul>
                  <p className="history-p">5월</p>
                  <ul>
                    <li className="history-li">국립방재교육연구원 통역</li>
                  </ul>
                  <p className="history-p">3월</p>
                  <ul>
                    <li className="history-li">W매거진 기사 번역</li>
                    <li className="history-li">KBS 추적 60분 통역</li>
                  </ul>
                  <p className="history-p">1월</p>
                  <ul>
                    <li className="history-li">삼성전자 단체 번역</li>
                    <li className="history-li">보스턴컨설팅그룹 보안자료 번역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2009년</h4>
                </div>
                <div className="timeline-body">
                  <p className="history-p">10월</p>
                  <ul>
                    <li className="history-li">대한축구협회 통역</li>
                  </ul>
                  <p className="history-p">6월</p>
                  <ul>
                    <li className="history-li">라이나생명보험, 메리츠화재 통번역</li>
                  </ul>
                  <p className="history-p">2월</p>
                  <ul>
                    <li className="history-li">노스웨스트 항공사 회의 통역</li>
                  </ul>
                  <p className="history-p">1월</p>
                  <ul>
                    <li className="history-li">월트디즈니 코리아 회계감사 통역</li>
                    <li className="history-li">
                      SBS E! Entertainment 합작 채널 런칭행사 VIP 수행통역
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2008년</h4>
                </div>
                <div className="timeline-body">
                  <p>10월</p>
                  <ul>
                    <li className="history-li">서울시청 교통정책과 통역</li>
                  </ul>
                  <p className="history-p">4월</p>
                  <ul>
                    <li className="history-li">멕시코대사관 통역</li>
                  </ul>
                  <p className="history-p">3월</p>
                  <ul>
                    <li className="history-li">K-1 통역</li>
                    <li className="history-li">기아자동차 통역</li>
                  </ul>
                  <p className="history-p">1월</p>
                  <ul>
                    <li className="history-li">BMW 코리아 통역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">2000 ~ 2007년</h4>
                </div>
                <div className="timeline-body">
                  <p className="history-p">2007년 6월</p>
                  <ul>
                    <li className="history-li">KBS 스펀지 통역</li>
                  </ul>
                  <p className="history-p">2006년 10월</p>
                  <ul>
                    <li className="history-li">KOTRA 순차통역</li>
                  </ul>
                  <p className="history-p">2005년 3월</p>
                  <ul>
                    <li className="history-li">싸이월드 영문판 번역</li>
                  </ul>
                  <p className="history-p">2004년 11월</p>
                  <ul>
                    <li className="history-li">SBS 슈퍼모델 선발대회 행사 관련 수행통역</li>
                  </ul>
                  <p className="history-p">2003년 1월</p>
                  <ul>
                    <li className="history-li">월트디즈니 텔레비전 오디션 통역</li>
                  </ul>
                  <p className="history-p">2002년 1월</p>
                  <ul>
                    <li className="history-li">한일월드컵 조직위원회 귀빈 안내 통역</li>
                  </ul>
                  <p className="history-p">2001년 3월</p>
                  <ul>
                    <li className="history-li">인천국제공항 개항식 통역</li>
                  </ul>
                  <p className="history-p">2000년 3월</p>
                  <ul>
                    <li className="history-li">한글과 컴퓨터 매뉴얼 번역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">1990 ~ 1999년</h4>
                </div>
                <div className="timeline-body">
                  <p className="history-p">1999년 4월</p>
                  <ul>
                    <li className="history-li">COEX 모터쇼 단체통역</li>
                  </ul>
                  <p className="history-p">1998년 4월</p>
                  <ul>
                    <li className="history-li">프랑스 국영방송국 France2 기자단 통역</li>
                  </ul>
                  <p className="history-p">1997년 4월</p>
                  <ul>
                    <li className="history-li">페루 국회의장 방한 환영회 서어통역</li>
                  </ul>
                  <p className="history-p">1996년 2월</p>
                  <ul>
                    <li className="history-li">쌍용배 용평리조트 스키대회 통역</li>
                  </ul>
                  <p className="history-p">1995년 4월</p>
                  <ul>
                    <li className="history-li">서울 국제 여자 역전 마라톤대회 통역</li>
                  </ul>
                  <p className="history-p">1994년 6월</p>
                  <ul>
                    <li className="history-li">프랑스 바스티유 오페라단 내한공연 통역</li>
                  </ul>
                  <p className="history-p">1993년 10월</p>
                  <ul>
                    <li className="history-li">1기 오성식 선배님 초청 강연회 통역</li>
                  </ul>
                  <p className="history-p">1992년 5월</p>
                  <ul>
                    <li className="history-li">관세청 해외 공무원 협력훈련 세미나 통역</li>
                  </ul>
                  <p className="history-p">1991년 10월</p>
                  <ul>
                    <li className="history-li">제2회 대한 미용사 중앙회 아시아 미용대회 통역</li>
                  </ul>
                  <p className="history-p">1990년 5월</p>
                  <ul>
                    <li className="history-li">국제 친선 어린이 민속잔치 통역</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge info" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">1980 ~ 1989년</h4>
                </div>
                <div className="timeline-body">
                  <p className="history-p">1989년 5월</p>
                  <ul>
                    <li className="history-li">국제 안과 학술대회 통역</li>
                  </ul>
                  <p className="history-p">1988년 5월</p>
                  <ul>
                    <li className="history-li">프레올림픽쇼 통역</li>
                  </ul>
                  <p className="history-p">1987년 4월</p>
                  <ul>
                    <li className="history-li">서울 국제마라톤대회 통역</li>
                  </ul>
                  <p className="history-p">1986년 9월</p>
                  <ul>
                    <li className="history-li">아시안게임 통신사 및 방송국 통역</li>
                  </ul>
                  <p className="history-p">1985년 8월</p>
                  <ul>
                    <li className="history-li">광복 40주년 기념 KBS 레이저 쇼 통역</li>
                  </ul>
                  <p className="history-p">1984년 9월</p>
                  <ul>
                    <li className="history-li">비엔나 국립발레단 내한공연 통역</li>
                  </ul>
                  <p className="history-p">1983년 6월</p>
                  <ul>
                    <li className="history-li">대통령배 국제축구대회 통역</li>
                  </ul>
                  <p className="history-p">1982년 9월</p>
                  <ul>
                    <li className="history-li">아시아 소아과 국제 학술대회 통역</li>
                  </ul>
                  <p className="history-p">1981년 5월</p>
                  <ul>
                    <li className="history-li">MBC 국제가요제 통역</li>
                  </ul>
                  <p className="history-p">1980년 10월</p>
                  <ul>
                    <li className="history-li">외대통역협회 발족</li>
                    <li className="history-li">아시아청소년 배구대회 통역</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
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

export default Introduce;
