import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { HiOutlineMail, HiOutlineTranslate } from 'react-icons/hi';
import { BsFileEarmarkArrowDown } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { GrLanguage } from 'react-icons/gr';
import { FaRegUserCircle } from 'react-icons/fa';
import BootstrapTable from 'react-bootstrap-table-next';
import useRead from 'src/hooks/consult/useRead';

const Consult = () => {
  const {
    onReadConsult,
    consult,
    consultFile,
    consults,
    consultLoading,
    consultsLoading,
  } = useRead();
  const [readModal, setReadModal] = useState(false);
  const onReadModalShow = () => setReadModal(true);
  const onReadModalHide = () => setReadModal(false);
  const onReadShow = row => {
    onReadConsult(row.id);
    onReadModalShow();
  };
  const rowEvents = {
    onClick: (e, row) => {
      if (e.target.localName === 'button') return;
      if (e.target.localName !== 'button') onReadShow(row);
    },
  };
  const columns = [
    {
      dataField: 'id',
      text: 'Index',
      headerAlign: 'center',
      align: 'center',
      headerStyle: { width: '5%' },
      style: {
        width: '5%',
        verticalAlign: 'middle',
      },
    },
    {
      dataField: 'title',
      text: '제목',
      headerAlign: 'center',
      headerStyle: { width: '20%' },
      style: {
        width: '20%',
        verticalAlign: 'middle',
      },
    },
    {
      dataField: 'content',
      text: '내용',
      headerAlign: 'center',
      headerStyle: { width: '30%' },
      style: {
        width: '30%',
        verticalAlign: 'middle',
      },
    },
    {
      dataField: 'email',
      text: 'E-Mail',
      headerAlign: 'center',
      headerStyle: { width: '17%' },
      style: {
        width: '17%',
        verticalAlign: 'middle',
      },
    },
    {
      dataField: 'tel',
      text: '전화번호',
      headerAlign: 'center',
      align: 'center',
      headerStyle: { width: '8%' },
      style: {
        width: '8%',
        verticalAlign: 'middle',
      },
    },
    {
      dataField: 'createdAt',
      text: '작성일자',
      headerAlign: 'center',
      align: 'center',
      headerStyle: { width: '10%' },
      style: {
        width: '10%',
        verticalAlign: 'middle',
      },
      formatter: cell => {
        return moment(cell).format('YYYY. MM. DD.');
      },
    },
  ];
  const bodyStyle = {
    fontSize: '2rem',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.025)',
    padding: '1.5rem',
    background: 'white',
    borderRadius: '2px',
    color: 'black !important',
  };
  return (
    <div id="right-panel" className="right-panel">
      <div className="breadcrumbs">
        <div className="col-sm-4">
          <div className="page-header float-left">
            <div className="page-title">
              <h1>온라인문의</h1>
            </div>
          </div>
        </div>
      </div>
      <StyledModal
        size="lg"
        show={readModal}
        onHide={onReadModalHide}
        aria-labelledby="contained-modal-title-vcenter"
        scrollable={false}
        animation={false}
      >
        <Modal.Body style={bodyStyle}>
          {consult && !consultLoading && (
            <div className="consult-body">
              <h2>{consult.title}</h2>
              <div className="body-form">
                <div className="body-name">
                  <FaRegUserCircle />
                  <span>이름</span>
                  {consult.name}
                </div>
                <div className="body-email">
                  <HiOutlineMail />
                  <span>이메일</span>
                  {consult.email}
                </div>
                <div className="body-tel">
                  <FiPhoneCall />
                  <span>전화번호</span>
                  {consult.tel}
                </div>
                <div className="body-type">
                  <HiOutlineTranslate />
                  <span>분류</span>
                  {consult.type === 'translate' ? '번역' : '통역'}
                </div>
                <div className="body-language">
                  <GrLanguage />
                  <span>언어</span>
                  {consult.langId === 1 && '영어'}
                  {consult.langId === 2 && '일본어'}
                  {consult.langId === 3 && '중국어'}
                  {consult.langId === 4 && '스페인어'}
                  {consult.langId === 5 && '독일어'}
                  {consult.langId === 6 && '불어'}
                  {consult.langId === 7 && '그 외 언어'}
                  {consult.langId === 8 && '러시아어'}
                </div>
              </div>
              <p className="body-content">{consult.content}</p>
              <div className="body-file">
                <BsFileEarmarkArrowDown />
                <span>파일</span>
                {consultFile && (
                  <a href={`http://usia.co.kr/api/down/${consultFile.sid}`}>
                    {consultFile.src}
                  </a>
                )}
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button type="button" onClick={onReadModalHide} className="btn btn-lg">
            닫기
          </button>
        </Modal.Footer>
      </StyledModal>
      {consults && !consultsLoading && (
        <div className="data-tables">
          <BtsTable>
            <BootstrapTable
              bootstrap4
              keyField="id"
              data={consults}
              columns={columns}
              rowEvents={rowEvents}
              hover
              striped
              noDataIndication={() => <div>온라인문의 내역이 없습니다.</div>}
            />
          </BtsTable>
        </div>
      )}
    </div>
  );
};

const BtsTable = styled.div`
  table {
    table-layout: fixed;
  }
  tr {
    cursor: pointer;
  }
  td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const StyledModal = styled(Modal)`
  .modal-body {
    min-height: 500px;
    height: 100%;
  }
  .consult-body {
    h2 {
      margin-bottom: 4rem;
      color: black;
    }
    .body-email,
    .body-name,
    .body-tel,
    .body-type,
    .body-language {
      font-size: 1.5rem;
      display: flex;
      color: black;
    }
    .body-content {
      margin-top: 3rem;
      font-size: 2rem;
      color: black;
      min-height: 300px;
      height: 100%;
    }
  }
  .modal-dialog {
    top: 12%;
    left: 5%;
  }
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    border-top: 0;
  }
  .body-form {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    div {
      width: 50%;
      margin-bottom: 1rem;
      span {
        width: 100px;
      }
      svg {
        width: 20px;
        height: 20px;
        margin-top: 1px;
        margin-right: 5px;
      }
    }
  }
  .body-file {
    span {
      width: 40px;
    }
    svg {
      margin-right: 5px;
    }
  }
`;

export default Consult;
