import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"
import NotFound from "./pages/404/Index.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Route>

        <Route path="*" element={<NotFound/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;