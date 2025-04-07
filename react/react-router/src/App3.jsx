import WrapperRoutes from './router/index.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <WrapperRoutes />
    </BrowserRouter>
  )
}

export default App;