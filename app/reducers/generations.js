export default (state = 0, action = null) => {
  switch (action.type) {
    case 'TICK':
      return state + 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};
