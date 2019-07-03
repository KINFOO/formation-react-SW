import React from 'react';

import Task from './Task.js';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: props.tasks };
    this.updateTask = this.updateTask.bind(this);
  }

  updateTask(key) {
    const tasks = this.state.tasks;
    tasks[key].done = !tasks[key].done;
    this.setState({ tasks });
  }

  render() {
    return (
      <form>
        {this.state.tasks.map((task, index) => (
          <Task key={index} id={index} name={task.name} done={task.done} updateTask={this.updateTask} />
        ))}
      </form>
    );
  }
}

export default List;
