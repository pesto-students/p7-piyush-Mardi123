import React, { Component } from 'react';

export class ClassCounter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    increment_count = () =>{
        this.setState({
        count: this.state.count+1
        })
    }

    decrement_count = () =>{
      this.setState({
        count: this.state.count-1
      })
    }
  render() {
    return (
      <div>
        <button onClick={this.increment_count}>Count:{this.state.count}</button>
        <button  onClick={this.decrement_count} > decrement</button>
      </div>
    );
  }
}

export default ClassCounter;
