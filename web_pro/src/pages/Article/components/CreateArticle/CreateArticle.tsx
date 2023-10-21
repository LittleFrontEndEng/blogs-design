import React, { useState, useEffect } from 'react'
import { createArticleApi } from '@/api/article'
import { CreateArticleType } from '@/type/article'
import MyEditor from '@/components/MyEditor/MyEditor'
import UploadFile from '@/components/UploadFile/UploadFile'
import { Input, Button, message } from 'antd';
import styles from './CreateArticle.less'
const CreateArticle = () => {
  const [html, setHtml] = useState('');
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState({
    fileName: '',
    url: '',
  })
  useEffect(() => {
    // console.log('编辑器', editor);
  })

  const getHtml = (html: string) => {
    setHtml(html);
  }

  const articleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
    setHtml(html);
  }

  const getFile = (fileName: string, url: string) => {
    setCover({
      fileName,
      url,
    })
  }

  const createArticle = async () => {
    if (!cover.url) {
      message.error("请上传文章封面")
    }
    const query: CreateArticleType = {
      title,
      cover: cover.url,
      content: html,
    }

    const result = await createArticleApi(query)
    console.log(result);
    
  }
  return (
    <div className={styles.container}>
      <div className={styles.articleTitle}>
        <div className={styles.left}>
          文章封面：<UploadFile getFile={getFile}/>
          <span style={{marginLeft: 16, marginRight: 16}}>{cover.fileName}</span>
          文章标题：<Input placeholder='请输入文章标题' onChange={articleTitleChange}/>
        </div>
        <div className={styles.right}>
          <Button style={{marginRight: 16}}>取消</Button>
          <Button type='primary' onClick={createArticle}>创建</Button>
        </div>
      </div>
      <div className={styles.create}>
        <div className={styles.editBox}>
          <MyEditor setValue='' getHtml={getHtml}/>
        </div>
        <div className={styles.previewBox}>
          <div style={{ marginTop: '15px' }} dangerouslySetInnerHTML={{__html: ('<h1>' + title + '</h1>' + html)}}></div>
        </div>
      </div>
    </div>
  )
}

export default CreateArticle
