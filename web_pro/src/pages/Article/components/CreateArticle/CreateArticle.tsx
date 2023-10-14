import React, { useState, useEffect } from 'react'
import MyEditor from '@/components/MyEditor/MyEditor'
import styles from './CreateArticle.less'
const CreateArticle = () => {
  const [editor, setEditor] = useState(null);
  const [html, setHtml] = useState('<p>hello</p>');
  useEffect(() => {
    console.log('编辑器', editor);
  })

  const getHtml = (html: string) => {
    setHtml(html);
  }
  return (
    <div className={styles.container}>
      <div className={styles.editBox}>
        <MyEditor title="<h2>标题</h2>" setValue='<p>123</p>' getHtml={getHtml}/>
      </div>
      <div className={styles.previewBox}>
        <div style={{ marginTop: '15px' }} dangerouslySetInnerHTML={{__html: html}}></div>
      </div>
    </div>
  )
}

export default CreateArticle
