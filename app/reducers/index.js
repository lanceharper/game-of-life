const resetMatrix = () => Array.from({length: 20}, () =>
  Array.from({length: 20}, () =>
    Math.random() < 0.30))

const INITIAL_STATE = {
  status: 'Stopped',
  seconds: 0,
  matrix: resetMatrix()
};

export default (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case 'START':
      return { ...state, status: 'Running' };
    case 'STOP':
      return { ...state, status: 'Stopped' };
    case 'TICK':
      return { ...state,
      seconds: state.seconds + 1,
      matrix: state.matrix.map((row, x) => row.map((cell, y) => {
        const alive = state.matrix[x][y];
        const neighborCount = [-1, 0, 1].reduce((xCount, dx) => {
          return xCount + [-1, 0, 1].reduce((yCount, dy) => {
            if (dx == 0 && dy == 0) { // Same cell; cannot a neighbor.
              return yCount;
            }
            if (typeof state.matrix[x+dx] === 'undefined' // Off the grid.
							|| typeof state.matrix[x+dx][y+dy] === 'undefined') {
              return yCount;
            }
            if (!state.matrix[x+dx][y+dy]) { // Dead
              return yCount;
            }
            return yCount + 1; // Alive
					}, 0);
        }, 0);

        if (!alive && neighborCount === 3) {
          return true;
        }

        if (alive && (neighborCount === 2 || neighborCount === 3)) {
          return true;
        }

        return false;
      }))
    };
    case 'RESET':
      return { ...state, seconds: 0, matrix: resetMatrix() };
    default:
      return state;
  }
};
