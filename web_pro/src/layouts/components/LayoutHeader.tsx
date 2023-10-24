import React, { useEffect } from 'react'
import { Avatar, Button } from 'antd';
import { history } from 'umi';
import styles from './LayoutHeader.less'
const LayoutHeader = (props: any) => {
  console.log('头部信息', props);

  const userInfo = JSON.parse(window.sessionStorage.getItem('userInfo') || 'null') || null
  useEffect(() => {
    if (userInfo == null) {
      history.push({
        pathname: '/login',
      })
    }
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.appIcon}>左</div>
      <div className={styles.headerMenu}>中</div>
      <div className={styles.userMenu}>
        <Avatar size={34} src={userInfo?.avatar} />
        <span>{ userInfo?.username }</span>
        <Button type='link' style={{ paddingLeft: 10, paddingRight: 0 }}>GitHub</Button>
      </div>
    </div>
  )
}

export default LayoutHeader
