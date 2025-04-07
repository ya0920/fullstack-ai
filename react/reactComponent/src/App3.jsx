import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext()


function ComB() {
  return (
    <Consumer>
      {(val) => {
        return <div>ComB --- {val}</div>
      }}
    </Consumer>
  )
}

function ComA() {
  return (
    <div>
      ComA
      <ComB></ComB>
    </div>
  )
}



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 50
    }
    console.log('construct');
  }

  add() {
    this.setState({
      age: this.state.age + 1
    })
  }
  
  render() {
    console.log('render');
    
    return (
      <Provider value={this.state.age}>
        <div onClick={() => this.add()}>
          App3
          <ComA></ComA>
        </div>
      </Provider>
      
    )
  }

  componentDidMount() {
    console.log('didmount');
  }

  shouldComponentUpdate() {
    console.log('shouldupdate');
    return true
  }

}
