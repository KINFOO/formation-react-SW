const initialstate = [
  { name: 'Learn React', done: false },
  { name: 'Learn CSS', done: true },
  { name: 'Web development', done: true }
];

const tasks = (state = initialstate, action) => {
  switch (action.type) {
    case 'UPDATE_TASKS':
      return { ...state, tasks: action.tasks };
    default:
      return state;
  }
};

export default tasks;
