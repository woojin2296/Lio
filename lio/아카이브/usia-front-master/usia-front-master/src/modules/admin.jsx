import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [READ_ADMIN, READ_ADMIN_SUCCESS, READ_ADMIN_FAILURE] = createRequestActionTypes(
  'admin/READ_ADMIN'
);
const [CHANGE_ADMIN, CHANGE_ADMIN_SUCCESS, CHANGE_ADMIN_FAILURE] = createRequestActionTypes(
  'admin/CHANGE_ADMIN'
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('admin/LOGIN');
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('admin/CHECK');
const UNLOAD_ADMIN = 'admin/UNLOAD_ADMIN';
const UNLOAD_LOGIN = 'admin/UNLOAD_LOGIN';
const CHANGE_ADMININFO = 'admin/CHANGE_ADMININFO';

export const readAdmin = createAction(READ_ADMIN);
export const changeAdmin = createAction(CHANGE_ADMIN, ({ repName, name, tel, addr, email }) => ({
  repName,
  name,
  tel,
  addr,
  email,
}));
export const login = createAction(LOGIN, ({ uid, pw }) => ({ uid, pw }));
export const check = createAction(CHECK);
export const changeField = createAction(CHANGE_ADMININFO, ({ key, value }) => ({
  key,
  value,
}));
export const unloadAdmin = createAction(UNLOAD_ADMIN);
export const unloadLogin = createAction(UNLOAD_LOGIN);

const readAdminSaga = createRequestSaga(READ_ADMIN, api.readAdminInfo);
const changeAdminSaga = createRequestSaga(CHANGE_ADMIN, api.changeAdminInfo);
const loginSaga = createRequestSaga(LOGIN, api.login);
const checkSaga = createRequestSaga(CHECK, api.check);

export function* adminSaga() {
  yield takeLatest(READ_ADMIN, readAdminSaga);
  yield takeLatest(CHANGE_ADMIN, changeAdminSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(CHECK, checkSaga);
}

const initialState = {
  admin: [],
  information: null,
  adminLogin: null,
  adminCheck: null,
  checkError: null,
  adminError: null,
  infoError: null,
  loginError: null,
  repName: '',
  name: '',
  uid: '',
  pw1: '',
  pw2: '',
  email: '',
  tel: '',
  address: '',
};

export default handleActions(
  {
    [READ_ADMIN_SUCCESS]: (state, { payload: admin }) => ({
      ...state,
      admin,
      repName: admin.result.repName,
      name: admin.result.name,
      uid: admin.result.uid,
      tel: admin.result.tel,
      address: admin.result.addr,
      email: admin.result.email,
    }),
    [READ_ADMIN_FAILURE]: (state, { payload: adminError }) => ({
      ...state,
      adminError,
    }),
    [CHANGE_ADMIN_SUCCESS]: (state, { payload: information }) => ({
      ...state,
      information,
    }),
    [CHANGE_ADMIN_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      infoError,
    }),
    [LOGIN_SUCCESS]: (state, { payload: adminLogin }) => ({
      ...state,
      adminLogin,
    }),
    [LOGIN_FAILURE]: (state, { payload: loginError }) => ({
      ...state,
      loginError,
    }),
    [CHECK_SUCCESS]: (state, { payload: adminCheck }) => ({
      ...state,
      adminCheck,
    }),
    [CHECK_FAILURE]: (state, { payload: checkError }) => ({
      ...state,
      checkError,
    }),
    [CHANGE_ADMININFO]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [UNLOAD_ADMIN]: state => ({
      ...state,
      adminLogin: initialState.adminLogin,
      loginError: initialState.loginError,
      information: initialState.information,
      infoError: initialState.infoError,
    }),
  },
  initialState
);
