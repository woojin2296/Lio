import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [CREATE_CONSULT, CREATE_CONSULT_SUCCESS, CREATE_CONSULT_FAILURE] = createRequestActionTypes(
  'consult/CREATE_CONSULT'
);
const [READ_CONSULT, READ_CONSULT_SUCCESS, READ_CONSULT_FAILURE] = createRequestActionTypes(
  'consult/READ_CONSULT'
);
const [
  READ_CONSULTLIST,
  READ_CONSULTLIST_SUCCESS,
  READ_CONSULTLIST_FAILURE,
] = createRequestActionTypes('consult/READ_CONSULTLIST');
const UNLOAD_CONSULT = 'consult/UNLOAD_CONSULT';
const CHANGE_CONSULT = 'consult/CHANGE_CONSULT';

export const createConsult = createAction(CREATE_CONSULT, fd => fd);
export const readConsult = createAction(READ_CONSULT, boardId => boardId);
export const readConsultList = createAction(READ_CONSULTLIST);
export const unloadConsult = createAction(UNLOAD_CONSULT);
export const changeField = createAction(CHANGE_CONSULT, ({ key, value }) => ({
  key,
  value,
}));

const createConsultSaga = createRequestSaga(CREATE_CONSULT, api.createConsult);
const readConsultSaga = createRequestSaga(READ_CONSULT, api.readConsult);
const readConsultListSaga = createRequestSaga(READ_CONSULTLIST, api.readConsultList);

export function* consultSaga() {
  yield takeLatest(CREATE_CONSULT, createConsultSaga);
  yield takeLatest(READ_CONSULT, readConsultSaga);
  yield takeLatest(READ_CONSULTLIST, readConsultListSaga);
}

const initialState = {
  consult: [],
  consultFile: [],
  consults: [],
  createC: [],
  createError: null,
  consultError: null,
  consultsError: null,
  title: '',
  content: '',
  langId: '',
  type: '',
  tel: '',
  email: '',
  name: '',
  file: null,
};

export default handleActions(
  {
    [CREATE_CONSULT_SUCCESS]: (state, { payload: create }) => ({
      ...state,
      consult: state.consult.concat(create.result),
    }),
    [CREATE_CONSULT_FAILURE]: (state, { payload: createError }) => ({
      ...state,
      createError,
    }),
    [READ_CONSULT_SUCCESS]: (state, { payload: consult }) => ({
      ...state,
      consult: consult.result,
      consultFile: consult.result.file.result,
    }),
    [READ_CONSULT_FAILURE]: (state, { payload: consultError }) => ({
      ...state,
      consultError,
    }),
    [READ_CONSULTLIST_SUCCESS]: (state, { payload: consults }) => ({
      ...state,
      consults: consults.result,
    }),
    [READ_CONSULTLIST_FAILURE]: (state, { payload: consultsError }) => ({
      ...state,
      consultsError,
    }),
    [CHANGE_CONSULT]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [UNLOAD_CONSULT]: state => ({
      ...state,
      consult: initialState.consult,
      consultError: initialState.consultError,
      title: initialState.title,
      content: initialState.content,
      langId: initialState.langId,
      type: initialState.type,
      tel: initialState.tel,
      email: initialState.email,
      name: initialState.name,
      file: initialState.file,
    }),
  },
  initialState
);
