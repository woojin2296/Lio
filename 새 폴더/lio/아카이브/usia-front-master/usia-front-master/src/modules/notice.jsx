import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [CREATE_NOTICE, CREATE_NOTICE_SUCCESS, CREATE_NOTICE_FAILURE] = createRequestActionTypes(
  'notice/CREATE_NOTICE'
);
const [READ_NOTICE, READ_NOTICE_SUCCESS, READ_NOTICE_FAILURE] = createRequestActionTypes(
  'notice/READ_NOTICE'
);
const [UPDATE_NOTICE, UPDATE_NOTICE_SUCCESS, UPDATE_NOTICE_FAILURE] = createRequestActionTypes(
  'notice/UPDATE_NOTICE'
);
const [DELETE_NOTICE, DELETE_NOTICE_SUCCESS, DELETE_NOTICE_FAILURE] = createRequestActionTypes(
  'notice/DELETE_NOTICE'
);
const [
  READ_NOTICELIST,
  READ_NOTICELIST_SUCCESS,
  READ_NOTICELIST_FAILURE,
] = createRequestActionTypes('notice/READ_NOTICELIST');
const UNLOAD_NOTICE = 'notice/UNLOAD_NOTICE';
const CHANGE_NOTICE = 'notice/CHANGE_NOTICE';

export const createNotice = createAction(CREATE_NOTICE, fd => fd);
export const readNotice = createAction(READ_NOTICE, boardId => boardId);
export const readNoticeList = createAction(READ_NOTICELIST);
export const updateNotice = createAction(UPDATE_NOTICE, ({ boardId, title, content }) => ({
  boardId,
  title,
  content,
}));
export const deleteNotice = createAction(DELETE_NOTICE, boardId => boardId);
export const unloadNotice = createAction(UNLOAD_NOTICE);
export const changeField = createAction(CHANGE_NOTICE, ({ key, value }) => ({
  key,
  value,
}));

const createNoticeSaga = createRequestSaga(CREATE_NOTICE, api.createNotice);
const readNoticeSaga = createRequestSaga(READ_NOTICE, api.readNotice);
const readNoticeListSaga = createRequestSaga(READ_NOTICELIST, api.readNoticeList);
const updateNoticeSaga = createRequestSaga(UPDATE_NOTICE, api.updateNotice);
const deleteNoticeSaga = createRequestSaga(DELETE_NOTICE, api.deleteNotice);

export function* noticeSaga() {
  yield takeLatest(CREATE_NOTICE, createNoticeSaga);
  yield takeLatest(READ_NOTICE, readNoticeSaga);
  yield takeLatest(READ_NOTICELIST, readNoticeListSaga);
  yield takeLatest(UPDATE_NOTICE, updateNoticeSaga);
  yield takeLatest(DELETE_NOTICE, deleteNoticeSaga);
}

const initialState = {
  notice: [],
  notices: [],
  create: [],
  update: [],
  deleteN: [],
  createError: null,
  updateError: null,
  deleteError: null,
  noticeError: null,
  noticesError: null,
  title: '',
  content: '',
};

export default handleActions(
  {
    [CREATE_NOTICE_SUCCESS]: (state, { payload: create }) => ({
      ...state,
      create,
    }),
    [CREATE_NOTICE_FAILURE]: (state, { payload: createError }) => ({
      ...state,
      createError,
    }),
    [READ_NOTICE_SUCCESS]: (state, { payload: notice }) => ({
      ...state,
      notice: notice.result,
    }),
    [READ_NOTICE_FAILURE]: (state, { payload: noticeError }) => ({
      ...state,
      noticeError,
    }),
    [READ_NOTICELIST_SUCCESS]: (state, { payload: notices }) => ({
      ...state,
      notices: notices.result,
    }),
    [READ_NOTICELIST_FAILURE]: (state, { payload: noticesError }) => ({
      ...state,
      noticesError,
    }),
    [UPDATE_NOTICE_SUCCESS]: (state, { payload: update }) => ({
      ...state,
      update,
    }),
    [UPDATE_NOTICE_FAILURE]: (state, { payload: updateError }) => ({
      ...state,
      updateError,
    }),
    [DELETE_NOTICE_SUCCESS]: (state, { payload: deleteN }) => ({
      ...state,
      deleteN,
      notices: state.notices.filter(n => n.id !== parseInt(deleteN.result, 10)),
    }),
    [DELETE_NOTICE_FAILURE]: (state, { payload: deleteError }) => ({
      ...state,
      deleteError,
    }),
    [CHANGE_NOTICE]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [UNLOAD_NOTICE]: state => ({
      ...state,
      notice: initialState.notice,
      noticeError: initialState.noticeError,
      title: initialState.title,
      content: initialState.content,
    }),
  },
  initialState
);
