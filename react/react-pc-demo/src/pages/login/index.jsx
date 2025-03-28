import "./index.scss";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Button, Checkbox, Form, Input, Flex, message } from 'antd';
import { useNavigate } from "react-router-dom";

function login() {
  
  const navegate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = (values) => {
    messageApi.success('登录成功!');
    setTimeout(() => {
      navegate('/', { replace: true });
    }, 1000);
  }

  return (
    <div className="login">
      {contextHolder}
      <Card className="login-container">
        <h3 className="title">旅梦后台管理</h3>
        <Form
          name="login"
          initialValues={{
            remember: true,
            username: 'admin',
            password: '123456',
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入账号!',
              },
              {
                min: 5,
                message: '账号长度不能小于5'
              }
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="账号" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
              {
                min: 6,
                message: '密码长度不能小于6'
              }
            ]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="密码" size="large" />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
              </Form.Item>
              <a href="">忘记密码</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" size="large">
              登录
            </Button>
            或 <a href="">现在注册!</a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
export default login;