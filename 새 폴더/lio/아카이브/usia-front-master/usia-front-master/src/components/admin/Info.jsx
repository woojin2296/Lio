import React from 'react';
import styled from 'styled-components';
import useChange from 'src/hooks/admin/useChange';

const Consult = () => {
  const { onChangeField, onChangeSubmit, repName, name, uid, tel, address, email } = useChange();
  const onChangeRep = e => onChangeField({ key: 'repName', value: e.target.value });
  const onChangeName = e => onChangeField({ key: 'name', value: e.target.value });
  const onChangeID = e => onChangeField({ key: 'uid', value: e.target.value });
  const onChangeTEL = e => onChangeField({ key: 'tel', value: e.target.value });
  const onChangeAddr = e => onChangeField({ key: 'address', value: e.target.value });
  const onChangeEmail = e => onChangeField({ key: 'email', value: e.target.value });
  return (
    <div id="right-panel" className="right-panel">
      <div className="breadcrumbs">
        <div className="col-sm-4">
          <div className="page-header float-left">
            <div className="page-title">
              <h1>정보변경</h1>
            </div>
          </div>
        </div>
      </div>
      <StyledForm>
        <div className="comment-respond m-t30" id="respond">
          <form className="comment-form" onSubmit={onChangeSubmit}>
            <p className="comment-form-author">
              <label htmlFor="repName">대표자이름</label>
              <input
                className="form-control"
                type="text"
                value={repName}
                name="repName"
                onChange={onChangeRep}
                defaultValue={repName}
              />
            </p>
            <p className="comment-form-email">
              <label htmlFor="name">단체명</label>
              <input
                className="form-control"
                type="text"
                value={name}
                name="name"
                onChange={onChangeName}
                defaultValue={name}
              />
            </p>

            <p className="comment-form-email">
              <label htmlFor="pw1">아이디</label>
              <input
                className="form-control"
                type="text"
                value={uid}
                name="uid"
                onChange={onChangeID}
                defaultValue={uid}
                disabled
              />
            </p>
            <p className="comment-form-email">
              <label htmlFor="pw2">이메일</label>
              <input
                className="form-control"
                type="text"
                value={email}
                name="email"
                onChange={onChangeEmail}
                defaultValue={email}
              />
            </p>

            <p className="comment-form-author">
              <label htmlFor="repName">전화번호</label>
              <input
                className="form-control"
                type="tel"
                value={tel}
                name="tel"
                onChange={onChangeTEL}
                defaultValue={tel}
              />
            </p>
            <p className="comment-form-email">
              <label htmlFor="name">주소</label>
              <input
                className="form-control"
                type="text"
                value={address}
                name="address"
                onChange={onChangeAddr}
                defaultValue={address}
              />
            </p>

            <p className="form-submit">
              <button className="btn btn-info btn-lg" type="submit" style={{ float: 'right' }}>
                변경하기
              </button>
            </p>
          </form>
        </div>
      </StyledForm>
    </div>
  );
};

const StyledForm = styled.div`
  margin: 0 5rem;
`;

export default Consult;
