const resetMatrix = () => Array.from({length: 20}, () =>
  Array.from({ length: 20 }, () =>
    Math.random() < 0.30))

export default (state = resetMatrix(), action = null) => {
  switch (action.type) {
    case 'TICK':
      return state.map((row, x) => row.map((cell, y) => {
        const alive = state[x][y];
        const neighborCount = [-1, 0, 1].reduce((xCount, dx) => {
          return xCount + [-1, 0, 1].reduce((yCount, dy) => {
            if (dx == 0 && dy == 0) { // Same cell; cannot a neighbor.
              return yCount;
            }
            if (typeof state[x+dx] === 'undefined' // Off the grid.
	            || typeof state[x+dx][y+dy] === 'undefined') {
              return yCount;
            }
            if (!state[x+dx][y+dy]) { // Dead
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
      }));
    case 'RESET':
      return resetMatrix();
    default:
      return state;
  }
};
