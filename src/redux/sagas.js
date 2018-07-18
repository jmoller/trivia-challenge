import { all } from 'redux-saga/effects';
import triviaSagas from './trivia/saga';

export default function* rootSaga(getState) {

  yield all ([
    triviaSagas()
  ])

}