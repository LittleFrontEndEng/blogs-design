import React, { useState, useEffect } from 'react'
import MyEditor from '@/components/MyEditor/MyEditor'
import UploadFile from '@/components/UploadFile/UploadFile'
import { Input, Button } from 'antd';
import styles from './CreateArticle.less'
const CreateArticle = () => {
  const [html, setHtml] = useState('<p>hello</p>');
  const [title, setTitle] = useState('')
  useEffect(() => {
    // console.log('编辑器', editor);
  })

  const getHtml = (html: string) => {
    setHtml(html);
  }

  const articleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setTitle('<h2>' + e.target.value + '</h2>');
  }
  return (
    <div className={styles.container}>
      <div className={styles.articleTitle}>
        <div className={styles.left}>
          文章封面：<UploadFile />
          <span style={{marginLeft: 16}}>{'文件名'}</span>
        </div>
        <div className={styles.right}>
          <Button style={{marginRight: 16}}>取消</Button>
          <Button type='primary'>创建</Button>
        </div>
      </div>
      <div className={styles.create}>
        <div className={styles.editBox}>
          <MyEditor title={title} setValue='<p>123</p>' getHtml={getHtml}/>
        </div>
        <div className={styles.previewBox}>
          <div style={{ marginTop: '15px' }} dangerouslySetInnerHTML={{__html: html}}></div>
        </div>
      </div>
    </div>
  )
}

export default CreateArticle
