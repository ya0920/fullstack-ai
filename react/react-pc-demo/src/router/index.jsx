import { useRoutes } from "react-router-dom";  // 路由出口，路由入口，路由匹配
import { Children, lazy } from "react";

const Login = lazy(() => import("../pages/login/index.jsx")); // 懒加载引入了login页面
const Layout = lazy(() => import("../pages/layout/index.jsx")); // 懒加载引入了layout页面
const ContentManage = lazy(() => import("../pages/content-manage/index.jsx")); // 懒加载引入了content-manage页面
const DataPreview = lazy(() => import("../pages/data-preview/index.jsx")); // 懒加载引入了data-preview页面

const routersList = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <DataPreview />
            },
            {
                path: "/content-manage",
                element: <ContentManage />
            },
            {
                path: "/data-preview",
                element: <DataPreview />
            }
        ]
    }
]

function WrappedRoutes() {
    return useRoutes(routersList); // 把路由列表传入useRoutes，解析生成html组件
}

export default WrappedRoutes; // 导出WrappedRoutes