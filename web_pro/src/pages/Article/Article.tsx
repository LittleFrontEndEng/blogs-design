import React from 'react'
import { Button } from 'antd'
import { history } from 'umi'
const Article = () => {

  // 跳转创建页
  const jumptoTarget = () => {
    history.push({
      pathname: '/createarticle',
      // query: {
      //   a: 'b',
      // },
    });
  }
  return (
    <div>
      文章管理
      <Button type='primary' onClick={jumptoTarget}>创建文章</Button>
    </div>
  )
}

export default Article
