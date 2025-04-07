import './App.css';
import React from 'react'

function HelloFn() { 

  const handler = (e) => {
    console.log('点我了', e);
  }


  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handler}>点我</button>
    </div>
  )
}


class HiFn extends React.Component {
  render() {
    return <h1>Hi World</h1>
  }
}

function List() {
  const list = [
    {id: 1, name: '张三'},
    {id: 2, name: '李四'},
    {id: 3, name: '王五'}
  ]

  const handler = (item) => {
    console.log(item.name);
  }

  return (
    <ul>
      {
        list.map((item, index) => {
          return <li onClick={() => handler(item)} key={item.id}>{item.name}</li>
        })
      }
    </ul>
  )
}




function App() {
  const name = '琪琪'
  const list = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'}
  ]
  const flag = true
  const styleObj = {
    color: 'blue'
  }
  const showTitle = true


  return (
    // <div className="App">
    //   Hello World -- {name}

    //   {/* 循环渲染 */}
    //   <ul>
    //     {
    //       list.map((item, index) => {
    //         return <li key={item.id}>{item.name}</li>
    //       })
    //     }
    //   </ul>

    //   {/* 条件 */}
    //   <div className="flag">{flag ? 'react真好玩' : 'vue 更有趣'}</div>
    //   <div className="flag">
    //     {
    //       flag ? 
    //       (
    //         <div>
    //           <h1>react真好玩</h1>
    //         </div>
    //       ) : 
    //       <h2>vue 更有趣</h2>
    //     }
    //   </div>

    //   {/* 样式 */}
    //   <div className="box" style={{color: 'red'}}>this is a box</div>
    //   <div style={styleObj} >this is a box</div>
    //   <div className="title">标题</div>
    //   <div className={showTitle ? 'title' : ''} >动态类名</div>

    // </div>

    <div className="App">
      <HelloFn></HelloFn>
      <HiFn />
      <List />
    </div>
  )
}

export default App;


// import React from 'react';
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increment
//         </button>
//       </div>
//     );
//   }
// }
// export default App;