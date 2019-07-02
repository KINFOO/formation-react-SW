import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateTask(this.props.key);
  }

  render() {
    return (
      <span>
        <input type="text" value={this.props.name} />
        <input type="checkbox" checked={this.props.done ? 'checked' : ''} onClick={this.handleClick} />
      </span>
    );
  }
}

export default Task;
