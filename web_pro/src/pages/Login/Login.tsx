import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { signin, signup } from '@/api/login';
import { LoginSignUp, LoginSignIn } from '@/type/login';
import styles from './Login.less';
const Login = () => {
  const [isUp, setIsUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // 用户注册
  const signupnew = async () => {
    const query: LoginSignUp = {
      username,
      password,
      email,
    };
    await signup(query);
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
            onChange={(e) => usernameHandle(e, 'username')}
          ></Input>
          <Input
            placeholder="请输入密码"
            size="large"
            onChange={(e) => usernameHandle(e, 'username')}
          ></Input>
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
            <Button type="link">登录</Button>
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
