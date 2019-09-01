import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count : 0
  }
  add = () => {
    this.setState(current => ({ count : current.count + 1 }))
    // setState을 호출할때마다 새로운 state와 함께 render function을 호출한다
  };
  minus = () => {
    this.setState(current => ({ count : current.count - 1 }))
  };
  // state 바꾸고 싶은 데이터를 넣는다
  render(){
    return <div>
      <p>number is : {this.state.count}</p>
      <button onClick={this.add}>Plus</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
