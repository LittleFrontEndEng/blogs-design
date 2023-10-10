module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const defaultAvatar = 'https://lsy-avatarbucket.oss-cn-beijing.aliyuncs.com/default-avatar/%E5%A4%B4%E5%83%8F.png?Expires=1696903462&OSSAccessKeyId=TMP.3KfJgXwoXRNpxEQUVpnEL16obgUpNEeW8tj6s8cQ7Q7aHhrtN8GBb8obriaFbXWzg6tTcN8uDCWDhWa8nffiuBCbW4k626&Signature=0pmSiekd1GMHA%2BjrtU16t7wu6OE%3D';
  const UserSchema = new Schema({
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    avatar: {
      type: String,
      default: defaultAvatar,
    },
    createdAt: { // 创建时间
      type: Date,
      default: Date.now,
    },
    updatedAt: { // 更新时间
      type: Date,
      default: Date.now,
    },
  });

  return mongoose.model('User', UserSchema);
};
