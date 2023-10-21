import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import uploadFile from '@/utils/up-oss'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
type InsertFnType = (url: string, alt: string, href: string) => void
function MyEditor(props: any) {
  const { getHtml, setValue, title = '' } = props;
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null)   // TS 语法
  // const [editor, setEditor] = useState(null)                   // JS 语法

  // 编辑器内容
  const [html, setHtml] = useState('')

  useEffect(() => {
    updateHtml();
  }, [title, setValue])

  const updateHtml = () => {
    // setHtml(title + setValue)
    editor?.dangerouslyInsertHtml(title + setValue)
  }

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = { }  // TS 语法
  // const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {    // TS 语法
  // const editorConfig = {                         // JS 语法
    placeholder: '请输入内容...',
    MENU_CONF: {
      uploadImage: {
        fieldName: 'custom-field-name',
        allowedFileTypes: ['image/*'],
        withCredentials: true,

        async customUpload(file: File, insertFn: InsertFnType) {  // TS 语法
          uploadFile(file, 'title', (percent: number, url: string) => {
            if (url) {
              let filename = decodeURI(url).split('/')[4].split('_')[1];
              insertFn(url, filename, url)
            }
          })
        }
      }
    }
  }

    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    return (
        <>
          <div style={{ border: '1px solid #ccc', zIndex: 100}}>
              <Toolbar
                  editor={editor}
                  defaultConfig={toolbarConfig}
                  mode="default"
                  style={{ borderBottom: '1px solid #ccc' }}
              />
              <Editor
                  defaultConfig={editorConfig}
                  value={html}
                  onCreated={setEditor}
                  onChange={editor => {
                    setHtml(editor.getHtml())
                    getHtml(editor.getHtml())
                  }}
                  mode="default"
                  style={{ height: '500px', overflowY: 'hidden' }}
              />
          </div>
        </>
    )
}

export default MyEditor