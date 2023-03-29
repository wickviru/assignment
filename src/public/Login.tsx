import { Button, Form, Input, message, Typography } from 'antd';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import { PAGE_PATHS } from '@/helpers/constants/pagePaths.constants';
import useAuth from '@/hooks/useAuth';
import { signIn } from '@/services/SignIn.service';

import styles from './Login.module.scss';
const { Title, Text } = Typography;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setAuth, auth } = useAuth();
  const [errMsg, setErrMsg] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const res: any = await signIn(values.username, values.password);
      setLoading(false);
      const accessToken = res?.accessToken?.jwtToken;
      const refreshToken = res?.refreshToken?.token;
      const idToken = res?.idToken?.jwtToken;
      const username = values?.username;
      setAuth({ username, accessToken, refreshToken, idToken });
      setCookie('refreshToken', refreshToken, { path: '/' });
      navigate(`${PAGE_PATHS.DASHBOARD}`);
    } catch (err: any) {
      setLoading(false);

      if (!err?.response) {
        setErrMsg(err.message);
        setIsAuthenticated(!isAuthenticated);
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles['loginContainer']}>
      <Title className={styles['loginContainer__title']} level={5}>
        Login
      </Title>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        {!isAuthenticated && (
          <div className={styles['loginContainer__error']}>
            <Text type="danger">{errMsg}</Text>
          </div>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
