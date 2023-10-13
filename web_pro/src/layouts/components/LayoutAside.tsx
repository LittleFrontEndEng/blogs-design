import React, { useState, useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { history } from 'umi';
import styles from './LayoutAside.less';
const LayoutAside = (props: any) => {
  const { routeInfo } = props;
  const [defaultRoute, setDefaultRoute] = useState('');
  useEffect(() => {
    setDefaultRoute(window.location.pathname);
  }, []);
  const items: any[] = routeInfo?.map((item: any, index: number) => {
    return {
      label: item.name,
      key: item.path,
    };
  });

  const onClick: MenuProps['onClick'] = (e) => {
    setDefaultRoute(e.key);
    history.push({
      pathname: e.key,
      // query: {
      //   a: 'b',
      // },
    });
  };
  return (
    <div className={styles.container}>
      <Menu
        onClick={(e) => onClick(e)}
        style={{ width: 256 }}
        selectedKeys={[defaultRoute]}
        defaultOpenKeys={['sub1']}
        items={items}
      />
    </div>
  );
};

export default LayoutAside;
