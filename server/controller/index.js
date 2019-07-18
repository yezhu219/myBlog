const articleListModel = require('../schema/articleList')

module.exports = {
  async articleList(ctx) {
    try {
      let req = ctx.request.query;
      let list = await articleListModel.find({}).skip(1).limit(10).sort({ '_id': -1 });
      let frontCount = await articleListModel.count({});
      ctx.body = {
        error: 0,
        count: frontCount,
        list
      }
    } catch (e) {
      //handle error
      ctx.body = { error: 1, info: e }
    }
  }
}