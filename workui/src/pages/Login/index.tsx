import './index.less';

import hooks from '@/hooks';
import { useNavigate } from '@umijs/max';
import { Button, Card, Form, Input, message } from 'antd';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const { run: handleSubmit, loading } = hooks.services.user.useLogin({
    onSuccess: (res) => {
      message.success('登录成功');
      localStorage.setItem('token', res.token);
      navigate('/');
    },
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-sky-100">
      <Card title="登录">
        <Form
          className="w-96"
          labelCol={{ flex: '70px' }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
