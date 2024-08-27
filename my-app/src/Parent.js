import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentText: 'Hello'
    };
  }

  updateText = () => {
    this.setState({ parentText: 'Hello, World!' });
  }

  render() {
    return (
      <div>
        <Child text={this.state.parentText} />
        <button onClick={this.updateText}>更新文本</button>
      </div>
    );
  }
}

export default Parent;
