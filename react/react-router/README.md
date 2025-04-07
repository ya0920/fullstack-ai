# react-router-dom
 1. BrowserRouter -- 声明一个 history 模式的路由， HashRouter 是声明一个 hash 模式的路由
 2. Routes -- 声明路由的容器 （路由出口）
 3. Route -- 声明一个路由
 4. Link -- 声明一个链接

 路由中提供的组件都要在 BrowserRouter 中生效

 - 路由传参
 1. navigate('/about?id=1001') --- 传参       useSearchParams() --- 接收参数   
 2. navigate('/about/1001') --- 传参       useParams() --- 接收参数   


 - 二级路由
  1. <Route> <Route></Route> </Route>     <Outlet/>  二级路由出口

 - 集中式路由配置 