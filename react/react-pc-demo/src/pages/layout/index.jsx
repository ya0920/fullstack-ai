import { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { LikeTwoTone } from '@ant-design/icons';
import './index.scss';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
import { Outlet } from 'react-router-dom';


function LayoutApp() {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false); // 控制菜单栏的展开和收缩
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const changeMenu = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        // console.log(key)
        navigate(key)
      }
    return (
        <Layout style={{ height: '100%' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical">
                    <LikeTwoTone style={{ fontSize: '30px' }} />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['/data-preview']}
                    onSelect={changeMenu}
                    items={[
                        {
                            key: '/data-preview',
                            icon: <UserOutlined />,
                            label: '数据预览',
                        },
                        {
                            key: '/content-manage',
                            icon: <VideoCameraOutlined />,
                            label: '内容管理',
                        },
                        {
                            key: '/publish-article',
                            icon: <UploadOutlined />,
                            label: '发布文章',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    );
}
export default LayoutApp;