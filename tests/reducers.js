import test from 'tape';
import reducer from '../app/reducers';

test('start reducer test', function (assert) {
  const INITIAL_STATE = {
    status: 'Stopped',
    seconds: 0,
    matrix: [[]]
  };

  const action = {
    type: 'START'
  }

  const nextState = reducer(INITIAL_STATE, action);

  assert.plan(1);
  assert.equal(nextState.status, 'Running', 'must change status to Starting');
  assert.end();
});

test('stop reducer test', function (assert) {
  const INITIAL_STATE = {
    status: 'Starting',
    seconds: 0,
    matrix: [[]]
  };

  const action = {
    type: 'STOP'
  }

  const nextState = reducer(INITIAL_STATE, action);

  assert.plan(1);
  assert.equal(nextState.status, 'Stopped', 'must change status to Stopped');
  assert.end();
});

test('reset reducer test', function (assert) {
  const INITIAL_STATE = {
    seconds: 10,
    matrix: [[]]
  };

  const action = {
    type: 'RESET'
  }

  const nextState = reducer(INITIAL_STATE, action);

  assert.plan(1);
  assert.equal(nextState.seconds, 0, 'must reset seconds to zero');
  assert.end();
});

test('tick block reducer test', function (assert) {
  const INITIAL_STATE = {
    seconds: 0,
    matrix: [
      [ false, false, false, false ],
      [ false, true,  true,  false ],
      [ false, true,  true,  false ],
      [ false, false, false, false ],
    ]
  };

  const action = {
    type: 'TICK'
  }

  const nextState = reducer(INITIAL_STATE, action);

  assert.plan(2);
  assert.equal(nextState.seconds, 1, 'must increment seconds');
  assert.deepEqual(nextState.matrix, INITIAL_STATE.matrix, 'must return block');
  assert.end();
});

test('tick blinker reducer test', function (assert) {
  const INITIAL_STATE = {
    seconds: 0,
    matrix: [
      [ false, true, false, false ],
      [ false, true,  false,  false ],
      [ false, true,  false,  false ],
      [ false, false, false, false ],
    ]
  };

  const action = {
    type: 'TICK'
  }

  const nextState = reducer(INITIAL_STATE, action);

  const expectedMatrix = [
    [ false, false, false, false ],
    [ true,  true,  true,  false ],
    [ false, false, false, false ],
    [ false, false, false, false ],
  ];

  assert.plan(2);
  assert.equal(nextState.seconds, 1, 'must increment seconds');
  assert.deepEqual(nextState.matrix, expectedMatrix, 'must return blinker');
  assert.end();
});

test('tick beehive reducer test', function (assert) {
  const INITIAL_STATE = {
    seconds: 0,
    matrix: [
      [ false, true,  true,  false ],
      [ true,  false, false, true  ],
      [ false, true,  true,  false ],
      [ false, false, false, false ],
    ]
  };

  const action = {
    type: 'TICK'
  }

  const nextState = reducer(INITIAL_STATE, action);

  const expectedMatrix = [
    [ false, true,  true,  false ],
    [ true,  false, false, true  ],
    [ false, true,  true,  false ],
    [ false, false, false, false ],
  ];

  assert.plan(2);
  assert.equal(nextState.seconds, 1, 'must increment seconds');
  assert.deepEqual(nextState.matrix, expectedMatrix, 'must return beehive');
  assert.end();
});

test('tick beacon reducer test', function (assert) {
  const INITIAL_STATE = {
    seconds: 0,
    matrix: [
      [ true,  true,  false, false ],
      [ true,  true,  false, false ],
      [ false, false, true,  true  ],
      [ false, false, true,  true  ],
    ]
  };

  const action = {
    type: 'TICK'
  }

  const nextState = reducer(INITIAL_STATE, action);

  const expectedMatrix = [
    [ true,  true,  false, false ],
    [ true,  false,  false, false ],
    [ false, false, false,  true  ],
    [ false, false, true,  true  ],
  ];

  assert.plan(2);
  assert.equal(nextState.seconds, 1, 'must increment seconds');
  assert.deepEqual(nextState.matrix, expectedMatrix, 'must return beacon');
  assert.end();
});
