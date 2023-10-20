import React, { useState, useEffect } from 'react'
import { Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import type { UploadProps } from 'antd';
import uploadFile from '@/utils/up-oss'
import style from './UploadFile.less';
interface OSSDataType {
  dir: string;
  expire: string;
  host: string;
  accessId: string;
  policy: string;
  signature: string;
};
const UploadAllFile = (props: any) => {
  const { value, getFile, type = 'cover', multiple, maxCount, accept } = props;

  const beforeUpload: UploadProps['beforeUpload'] = async file => {
    uploadFile(file, type, (percent: number, url: string) => {
      console.log(percent)
      console.log(url);
      if (url) {
        let filename = decodeURI(url).split('/')[4].split('_')[1];
        getFile(filename, url)
      }
    })
    return file;
  };

  const uploadProps: UploadProps = {
    showUploadList: false,
    fileList: value,
    beforeUpload,
  };
  return (
    <Upload {...uploadProps}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  )
}

export default UploadAllFile
