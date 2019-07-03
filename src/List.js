import React from 'react';

import Task from './Task.js';
import { connect } from 'react-redux';
import { updateTasks } from './actions';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: props.tasks };
    this.updateTask = this.updateTask.bind(this);
  }

  updateTask(key) {
    const tasks = this.state.tasks;
    tasks[key].done = !tasks[key].done;
    this.props.updateTasks(tasks);
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

const mapStateToProps = state => ({ tasks: state.tasks });

const mapDispatchToProps = dispatch => ({
  updateTasks: tasks => dispatch(updateTasks(tasks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
