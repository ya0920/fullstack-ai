import WrappedRoutes from "./router/index.jsx";
import { BrowserRouter } from "react-router-dom"; // 包裹所有代码，history模式

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WrappedRoutes />
      </BrowserRouter>
    </div>
  )
}
export default App