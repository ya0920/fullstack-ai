import React from 'react'

function Son(props) {
  // console.log(props);
  
  const msg = '来自子组件的信息'

  const handle = () => {
    props.getMsg(msg)
  }

  return (
    <div>
      <h3> 子组件 -- {props.count}</h3>
      <button onClick={handle}>子</button>
    </div>
  )
}



class App extends React.Component {
  constructor() {
    super()
    this.state = {  // 组件的状态
      count: 0
    }
  }

  add() {
    console.log(this);
    // this.state.count++
    this.setState({
      count: this.state.count + 1
    })
  }

  getMsg(msg) {
    console.log(msg);
  }

  render() { 
    return (
      <div>
        <button onClick={this.add.bind(this)}>{this.state.count}</button>
        <Son count={this.state.count} getMsg={this.getMsg}/>
      </div>
    )
  }
}

export default App