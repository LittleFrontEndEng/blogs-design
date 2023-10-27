import React, { useEffect } from 'react'
import type { MenuProps } from 'antd';
import { history } from 'umi';
import LayoutHeader from './components/LayoutHeader'
import LayoutAside from './components/LayoutAside'
import styles from './index.less'
const index = (props: any) => {
  const { children, route } = props
  console.log('布局属性', props);
  console.log('当前路由', route.routes);
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
      <LayoutHeader></LayoutHeader>
      <div className={styles.contentBox}>
        <div className={styles.navAside}>
          <LayoutAside routeInfo={route.routes}></LayoutAside>
        </div>
        <div className={styles.appContent}>
          { children }
        </div>
      </div>
    </div>
  )
}

export default index
