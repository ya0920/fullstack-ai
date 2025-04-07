import React, { Component } from 'react'

function SonA(props) {
  return <div>
    <span>SonA</span>
    <button onClick={props.changeCount}>add</button>
  </div>
}

// function SonB(props) {
//   return <div>SonB -- {props.count}</div>
// }

class SonB extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  render() {
    return <div>SonB -- {this.props.count}</div>
  }
}


export default class App extends Component {
  state = {
    count: 0
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h2> 父组件</h2>
        <SonA changeCount={this.changeCount}/>
        <SonB count={this.state.count} />
      </div>
    )
  }
}
