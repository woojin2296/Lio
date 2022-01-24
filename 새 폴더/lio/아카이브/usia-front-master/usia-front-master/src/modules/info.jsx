import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from 'src/api/api';
import createRequestSaga, { createRequestActionTypes } from 'src/api/createRequestSaga';

const [READ_INFO, READ_INFO_SUCCESS, READ_INFO_FAILURE] = createRequestActionTypes(
  'info/READ_INFO'
);

export const readInfo = createAction(READ_INFO);

const readInfoSaga = createRequestSaga(READ_INFO, api.readInfo);

export function* infoSaga() {
  yield takeLatest(READ_INFO, readInfoSaga);
}

const initialState = {
  info: [],
  infoError: null,
};

export default handleActions(
  {
    [READ_INFO_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      info: info.result,
    }),
    [READ_INFO_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      infoError,
    }),
  },
  initialState
);
