const articleListModel = require('../schema/articleList')

module.exports = {
  async articleList(ctx) {
    try {
      let req = ctx.request.query;
      let { parseInt } = Number;
      // let page = parseInt((req.page - 1) * req.pagesize);
      // let pagesize = parseInt(req.pagesize);
      let front = await articleListModel.find({}).skip(1).limit(10).sort({ '_id': -1 });
      let frontCount = await articleListModel.count({});
      ctx.body = {
        error: 0,
        count: frontCount,
        front
      }
    } catch (e) {
      //handle error
      ctx.body = { error: 1, info: e }
    }
  }
}