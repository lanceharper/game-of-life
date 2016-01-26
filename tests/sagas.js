import test from 'tape';
import { call, take, put } from 'redux-saga';
import { runOnce, runTimer, wait, GENERATION_DURATION } from '../app/sagas';
import * as actions from '../app/actions';

const getState = () => {};

const runningState = () => ({ status: 'Running' });

const stoppedState = () => ({ status: 'Stopped' });

test('runOnce saga test', function (assert) {
  const generator = runOnce(getState);

  let next = generator.next();
  assert.deepEqual(next.value, take('ONE'), 'must yield one action');

  next = generator.next(actions.tick());
  assert.deepEqual(next.value, put(actions.tick()), 'must yield tick action');

  assert.plan(2);
  assert.end();
});

test('runTimer saga test running', function (assert) {
  const generator = runTimer(runningState);

  let next = generator.next();
  assert.deepEqual(next.value, take('START'), 'must yield start action');

  next = generator.next(actions.start());
  assert.deepEqual(next.value, call(wait, GENERATION_DURATION), 'must yield wait');

  next = generator.next(actions.tick());
  assert.deepEqual(next.value, put(actions.tick()), 'must yield tick action');

  assert.plan(3);
  assert.end();
});

test('runTimer saga test stopped', function (assert) {
  const generator = runTimer(stoppedState);

  let next = generator.next();
  assert.deepEqual(next.value, take('START'), 'must yield start action');

  next = generator.next(actions.start());
  assert.deepEqual(next.value, call(wait, GENERATION_DURATION), 'must yield wait');

  next = generator.next();
  assert.deepEqual(next.value, take('START'), 'must yield start action');

  assert.plan(3);
  assert.end();
});
