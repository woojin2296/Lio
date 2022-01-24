import React, { useState } from 'react';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import BootstrapTable from 'react-bootstrap-table-next';
import useCreate from 'src/hooks/notice/useCreate';
import useRead from 'src/hooks/notice/useRead';
import useUpdate from 'src/hooks/notice/useUpdate';
import useDelete from 'src/hooks/notice/useDelete';

const Notice = () => {
  const { notices, noticesLoading } = useRead();
  const { onUpdateSubmit, onChangeField } = useUpdate();
  const { deletedNotice } = useDelete();
  const { onCreateSubmit } = useCreate();
  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentNotice, setCurrentNotice] = useState({});
  const [currentId, setCurrentId] = useState();
  const onChangeTitle = e => onChangeField({ key: 'title', value: e.target.value });
  const onChangeContent = e => onChangeField({ key: 'content', value: e.target.value });
  const onChangeThumb = e => {
    onChangeField({ key: 'thumbnail', value: e.target.files[0] });
  };
  const onCreateModalShow = () => setCreateModal(true);
  const onCreateModalHide = () => setCreateModal(false);
  const onUpdateModalShow = () => setUpdateModal(true);
  const onUpdateModalHide = () => setUpdateModal(false);
  const onDeleteModalShow = () => setDeleteModal(true);
  const onDeleteModalHide = () => setDeleteModal(false);
  const onUpdateShow = row => {
    onChangeField({ key: 'title', value: row.title });
    onChangeField({ key: 'content', value: row.content });
    setCurrentNotice(row);
    onUpdateModalShow();
  };
  const onCreate = e => {
    onCreateSubmit(e);
    onCreateModalHide();
  };
  const onUpdate = e => {
    onUpdateSubmit(e);
    onUpdateModalHide();
  };
  const onDeleteShow = e => {
    onDeleteModalShow();
    setCurrentId(e.target.value);
  };
  const onDelete = () => {
    deletedNotice(currentId);
    onDeleteModalHide();
  };
  const rowEvents = {
    onClick: (e, row) => {
      if (e.target.localName === 'button') return;
      if (e.target.localName !== 'button') onUpdateShow(row);
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
      headerStyle: { width: '75%' },
      style: {
        width: '75%',
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
    {
      dataField: 'deleteButton',
      text: '',
      align: 'center',
      headerStyle: { width: '10%' },
      style: {
        width: '10%',
        verticalAlign: 'middle',
      },
      formatter: (cell, row) => (
        <button
          value={row.id}
          onClick={onDeleteShow}
          className="btn btn-danger btn-lg"
          type="button"
        >
          삭제
        </button>
      ),
    },
  ];
  const bodyStyle = {
    fontSize: '2rem',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.025)',
    padding: '1.5rem',
    background: 'white',
    borderRadius: '2px',
  };
  return (
    <div id="right-panel" className="right-panel">
      <div className="breadcrumbs">
        <div className="col-sm-12">
          <div className="page-header float-left">
            <PageTitle>
              <h1>공지사항</h1>
              <button onClick={onCreateModalShow} className="btn btn-success" type="button">
                공지사항 작성
              </button>
            </PageTitle>
          </div>
        </div>
      </div>
      <StyledModal
        size="lg"
        show={createModal}
        onHide={onCreateModalHide}
        aria-labelledby="contained-modal-title-vcenter"
        scrollable={false}
        animation={false}
      >
        <Modal.Body style={bodyStyle}>
          <UpdateForm encType="multipart/form-data" onSubmit={onCreateSubmit}>
            <input onChange={onChangeTitle} />
            <textarea rows={30} onChange={onChangeContent} />
            <input className="fileUpload" type="file" onChange={onChangeThumb} />
            <div className="btn-submit">
              <button
                value={currentNotice.id}
                type="submit"
                onClick={onCreate}
                className="btn btn-success btn-lg"
              >
                작성
              </button>
            </div>
          </UpdateForm>
          <div className="btn-close">
            <button type="button" onClick={onCreateModalHide} className="btn btn-lg">
              닫기
            </button>
          </div>
        </Modal.Body>
      </StyledModal>
      <StyledModal
        size="lg"
        show={updateModal}
        onHide={onUpdateModalHide}
        aria-labelledby="contained-modal-title-vcenter"
        scrollable={false}
        animation={false}
      >
        <Modal.Body style={bodyStyle}>
          <UpdateForm onSubmit={onUpdateSubmit}>
            <input onChange={onChangeTitle} defaultValue={currentNotice.title} />
            <textarea
              rows={30}
              cols={100}
              onChange={onChangeContent}
              defaultValue={currentNotice.content}
            />
            <div className="btn-submit">
              <button type="submit" onClick={onUpdate} className="btn btn-success btn-lg">
                수정
              </button>
            </div>
          </UpdateForm>
          <div className="btn-close">
            <button type="button" onClick={onUpdateModalHide} className="btn btn-lg">
              닫기
            </button>
          </div>
        </Modal.Body>
      </StyledModal>
      <StyledModal
        size="sm"
        show={deleteModal}
        onHide={onDeleteModalHide}
        aria-labelledby="contained-modal-title-vcenter"
        scrollable={false}
        centered
        animation={false}
      >
        <Modal.Body style={bodyStyle}>정말 삭제하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <div>
            <button type="button" onClick={onDelete} className="btn btn-danger btn-lg">
              삭제
            </button>
          </div>
          <div>
            <button type="button" onClick={onDeleteModalHide} className="btn btn-secondary btn-lg">
              닫기
            </button>
          </div>
        </Modal.Footer>
      </StyledModal>
      {notices && !noticesLoading && (
        <div className="data-tables">
          <BtsTable>
            <BootstrapTable
              keyField="id"
              data={notices}
              columns={columns}
              rowEvents={rowEvents}
              hover
              striped
              noDataIndication={() => <div>공지사항이 없습니다.</div>}
              animation={false}
            />
          </BtsTable>
        </div>
      )}
    </div>
  );
};

const PageTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 50px;
  }
`;

const BtsTable = styled.div`
  table {
    table-layout: fixed;
  }
  tr {
    cursor: pointer;
  }
  td {
    width: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const StyledModal = styled(Modal)`
  .modal-body {
    position: relative;
    margin-bottom: 7rem;
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
  .modal-footer div + div {
    margin-left: 1rem;
  }
  .btn-submit {
    position: absolute;
    bottom: -50px;
    right: 100px;
  }
  .btn-close {
    position: absolute;
    bottom: -50px;
    right: 15px;
  }
`;

const UpdateForm = styled.form`
  width: 100%;
  .fileUpload {
    font-size: 2rem;
  }
  input {
    display: block;
    width: 100%;
    font-size: 3rem;
    padding: 0.5rem;
    margin-bottom: 1.5rem;
  }
  textarea {
    overflow: auto;
    resize: none;
    font-size: 1.5rem;
    width: 100%;
    height: 100%;
  }
`;

export default Notice;
