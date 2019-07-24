const articleListModel = require('../schema/articleList')
const articleDetialModel = require('../schema/articleDetail')
const mongoose = require('mongoose')
const md = require('markdown').markdown

module.exports = {
  async articleList(ctx) {
    try {
      let req = ctx.request.query;
      let list = await articleListModel.find({}).skip(1).limit(10).sort({ '_id': -1 })
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
  },
  async articleDetail(ctx) {
    try {
      let req = ctx.request.query
      let id = mongoose.Types.ObjectId(req.id)
      let data = await articleListModel.findOne({ "_id": id })
      console.log(data.content,'++++++++++++++++1')
      data.content=md.toHTML(data.content)
      console.log(data.content,'++++++++++++++++')
      ctx.body = {
        error: 0,
        data
      }
    } catch (e) {
      //handle error
      ctx.body = { error: 1, info: e }
    }
  }
}