import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import notice, { noticeSaga } from './notice';
import consult, { consultSaga } from './consult';
import admin, { adminSaga } from './admin';
import info, { infoSaga } from './info';

export function* rootSaga() {
  yield all([noticeSaga(), consultSaga(), adminSaga(), infoSaga()]);
}

export default combineReducers({
  loading,
  notice,
  consult,
  admin,
  info,
});
