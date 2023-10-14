module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const articleSchema = new Schema({
    title: {
      type: String,
      require: true,
    },
    cover: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    author: {
      type: mongoose.ObjectId,
      ref: 'User',
      require: true,
    },
    viewsCount: { // 观看次数
      type: Number,
      default: 0,
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

  return mongoose.model('User', articleSchema);
};
