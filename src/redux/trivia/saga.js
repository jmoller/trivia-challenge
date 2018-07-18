import { put, takeEvery, fork, call, takeLatest } from 'redux-saga/effects';
import {FETCH_TRIVIA_SUCCESS, FETCH_TRIVIA_FAIL, FETCH_TRIVIA} from './types';
import { apiUrl } from '../../settings/config';
import axios from 'axios';

export function getTrivia() {
  return axios.get(apiUrl).then(
    (res) => {
      return res.data.results;
    }
  );
}

export function* fetchTrivia() {
  try {
    const triviaResults = yield call(getTrivia);
    yield put({type: FETCH_TRIVIA_SUCCESS, payload: triviaResults});
 } catch (e) {
    yield put({type: FETCH_TRIVIA_FAIL, payload: e.message});
 }
}
export default function* rootSaga() {
  yield takeLatest(FETCH_TRIVIA, fetchTrivia);
}
