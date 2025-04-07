import { useContext, createContext } from 'react';
const Context = createContext();  // 创建上下文对象

// function Bar() {
//   return (
//     <Consumer>
//       {
//         value => (
//           <div>
//             <h2>bar -- {value}</h2>
//           </div>
//         )
//       }
//     </Consumer>
//   )
// }

function Bar() {
  const val = useContext(Context);
  return (
    <div>
      <h2>bar -- {val}</h2>
    </div>
  )
}


function Foo() {
  return (
    <div>
      <h2>foo</h2>
      <Bar />
    </div>
  )
}


function App() {
  return (
    <Context.Provider value={'来自 app 的数据'}>
      <div>
        <h1>app</h1>
        <Foo />
      </div>
    </Context.Provider>
  )
}

export default App;