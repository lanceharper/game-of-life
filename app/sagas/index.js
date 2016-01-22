import { call, take, put } from 'redux-saga';
import actions from '../actions';

export const GENERATION_DURATION = 1000;

// wait :: Number -> Promise
export const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
);

export function* runOnce(getState) {
  while(yield take('ONE')) {
    yield put(actions.tick());
  }
}

export function* runTimer(getState) {
  // Wake up when user starts timer.
  while(yield take('START')) {
    while(true) {

      yield call(wait, GENERATION_DURATION);

      if (getState().status === 'Running') {
        yield put(actions.tick());

      } else {
        break;
      }
    }
  }
}

export default [ runTimer, runOnce ];
