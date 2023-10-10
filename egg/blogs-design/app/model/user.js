module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const defaultAvatar = 'https://lsy-avatarbucket.oss-cn-beijing.aliyuncs.com/default-avatar/%E5%A4%B4%E5%83%8F.png';
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
