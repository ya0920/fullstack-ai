import { 
  HashRouter, 
  Routes, 
  Route, 
  Link, 
  useNavigate, 
  useSearchParams,
  useParams
} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <h2>首页</h2>
      <button onClick={() => navigate('/about/1001', {replace: true})}>go about</button>
    </div>
  )
}

function About() {
  // const [params, setParams] = useSearchParams()
  const params = useParams()
  console.log(params)
  
  return (
    <div>
      <h2>关于 -- {params.id}</h2>
    </div>
  )
}




function App() {
  return (
    <div className="App">
      {/* 路由配置区域 */}

      <HashRouter>
        <Link to='/'>首页</Link>
        <Link to='/about'>关于</Link>
        
        {/* 路由出口 */}
        <Routes> 
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about/:id' element={<About/>}></Route>
        </Routes>

      </HashRouter>
    </div>
  )
}

export default App