import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    this.props.updateTask(this.props.id);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <span>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <input type="checkbox" checked={this.props.done ? 'checked' : ''} onChange={this.handleClick} />
      </span>
    );
  }
}

export default Task;
