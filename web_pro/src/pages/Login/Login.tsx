import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { signin, signup } from '@/api/login';
import { history } from 'umi';
import { LoginSignUp, LoginSignIn } from '@/type/login';
import styles from './Login.less';
const Login = () => {
  const [isUp, setIsUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('123456');
  const [email, setEmail] = useState('123@1223.com');
  // 用户注册
  const signupnew = async () => {
    const query: LoginSignUp = {
      username,
      password,
      email,
    };
    const result = await signup(query) as any;
    if (result.success) {
      setIsUp(false)
      setPassword('')
    }
  };
  // 切换模式
  const triggerSignUp = () => {
    setIsUp(!isUp);
  };

  // 输入事件
  const usernameHandle = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    if (type === 'password') {
      setPassword(e.target.value)
    } else if(type === 'username') {
      setUsername(e.target.value)
    } else if (type === 'email') {
      setEmail(e.target.value)
    }
  };

  // 用户登录
  const loginHandle = async () => {
    const query: LoginSignIn = {
      password,
      email,
    };
    const result = await signin(query) as any;
    if (result.success) {
      window.localStorage.setItem('userInfo', JSON.stringify(result.user));
      window.localStorage.setItem('token', result.user.token);
      history.push({
        pathname: '/home',
        // query: {
        //   a: 'b',
        // },
      });
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginform}>
        <div className={styles.logincontent}>
          {isUp ? (
            <Input
              placeholder="请输入用户名"
              size="large"
              onChange={(e) => usernameHandle(e, 'username')}
            ></Input>
          ) : null}
          <Input
            placeholder="请输入邮箱"
            size="large"
            autoComplete='newPassword'
            value={email}
            onChange={(e) => usernameHandle(e, 'email')}
          ></Input>
          <Input.Password
            placeholder="请输入密码"
            size="large"
            autoComplete='newPassword'
            style={{display: 'none'}}
          ></Input.Password>
          <Input.Password
            placeholder="请输入密码"
            size="large"
            autoComplete='newPassword'
            value={password}
            onChange={(e) => usernameHandle(e, 'password')}
          ></Input.Password>
        </div>
        {isUp ? (
          <div className={styles.loginfooter}>
            <Button type="link" onClick={triggerSignUp}>
              已有账号，去登录
            </Button>
            <Button type="link" onClick={signupnew}>
              注册账号
            </Button>
          </div>
        ) : (
          <div className={styles.loginfooter}>
            <Button type="link" onClick={loginHandle}>登录</Button>
            <Button type="link" onClick={triggerSignUp}>
              注册
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
