import { useEffect, useRef, Component } from 'react';

function Son(){
  return <h2>Son</h2>
}

class Son2 extends Component {
  render() {
    return <h2>Son2</h2>
  }
}


function App() {
  const h1Ref = useRef(null);
  const sonRef = useRef(null);
  const son2Ref = useRef(null);

  useEffect(() => {
    console.log(sonRef);
    console.log(son2Ref);
  }, [])
  

  return (
    <div>
      <h1 ref={h1Ref}>Hello World</h1>
      <Son ref={sonRef}/>
      <Son2 ref={son2Ref}/>
    </div>
  )
}
export default App;