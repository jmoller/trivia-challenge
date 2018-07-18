import { put, call } from 'redux-saga/effects';
import { fetchTrivia, getTrivia } from "../saga";
import { expectSaga } from "redux-saga-test-plan";
import {FETCH_TRIVIA_SUCCESS} from '../types';
import { results } from '../__mocks__/results';



describe("Trivia Sagas", () => {
  it("puts the `FETCH_TRIVIA_SUCCESS` action with the results from api call", () => {
    
    return expectSaga(fetchTrivia)
    .provide([[call(getTrivia), results]])
    .put({ type: FETCH_TRIVIA_SUCCESS, payload: results })
    .run();
  });
});
