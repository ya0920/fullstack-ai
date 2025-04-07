import './index.css'
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <div className="menu">
        <ul>
          <li><Link to='/home'>首页</Link></li>
          <li><Link to='/about'>关于</Link></li>
          <li><Link to='/contact'>联系</Link></li>
        </ul>
      </div>

      <div className="content">
        {/* 二级路由出口 */}
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Layout;