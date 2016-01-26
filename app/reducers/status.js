export default (state = 'Stopped', action = null) => {
  switch (action.type) {
    case 'START':
      return 'Running';
    case 'STOP':
      return 'Stopped';
    default:
      return state;
  }
};
