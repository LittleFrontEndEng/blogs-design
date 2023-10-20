/**
 * 使用方法
 * 导入 uploadFile 方法
 * import uploadFile from './utils/up-oss'
 * 在获取文件源对象区域调用 uploadFile 方法
 * uploadFile(文件对象,callback)
 * 调用 uploadFile 方法时，使用回调函数，请使用回调函数来获取url
 * uploadFile(fileSource, (percent, url) => {
 *   console.log(percent)
 *   console.log("地址",url);
 *   console.log(url);
 * })
 * 注意: 该方法只能上传图片和视频，如果需要上传其他包含中文的文件，请注意编码格式，会出现乱码格式
 * 特别提醒: 上传的文件是文件源对象， 例如: 如果是antd组件上传时，该源对象是 file["originFileObj"]
 * 案例源码地址: https://gitee.com/li-si-yuan/up-oss.git
 */
const OSS = require('ali-oss')

const client = new OSS({
  accessKeyId: 'LTAI5tNtCeJTwe8fMd63ax8q',
  accessKeySecret: 'DR9y87cQVlJvwtzxxvbcN6ahZPbuKi',
  region: 'oss-cn-beijing',
  bucket: 'lsy-avatarbucket',
})

function uploadFile (file: Blob, type: string, cb: any) {
  let fileName = '';
  if (type === 'avatar') {
    // 头像
    fileName = 'avatar' + new Date().getTime() + '_' + file.name;
  } else if (type === 'cover') {
    // 封面
    fileName = 'article_cover/' + new Date().getTime() + '_' + file.name;
  } else if (type === 'title') {
    // 文本图片
    fileName = 'article_image/' + new Date().getTime() + '_' + file.name;
  }
  return put(fileName,file, cb)
}

const headers = {
  // 指定Object的存储类型。
  // 'x-oss-storage-class': 'Standard',
  // 指定Object标签，可同时设置多个标签。
  'x-oss-tagging': 'Tag1=1&Tag2=2',
  // 指定初始化分片上传时是否覆盖同名Object。此处设置为true，表示禁止覆盖同名Object。
  'x-oss-forbid-overwrite': 'true'
}

async function put (fileName: string, file: any, cb: any) {
  try {
    let result = await client.multipartUpload(fileName, file, {
      headers,
      partSize: 1 * 1024 * 1024,
      progress: (p: any, _checkpoint: any) => {
        cb && cb(p)
      }
    });
    if(result) {
      let url = result.res.requestUrls[0]
      cb && cb(1, url.split('?')[0])
    } else {
      return Promise.reject("无数据")
    }
  } catch (e) {
    console.log(e);
    return Promise.reject("无数据")
  }
}

export default uploadFile