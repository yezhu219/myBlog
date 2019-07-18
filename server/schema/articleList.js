const mongoose = require('mongoose')

const db=require('../db')

const articleListSchema = new mongoose.Schema({
  title: String,
  from: String,
  fromgImg: String,
  date: String,
  time: String,
  content: String
})

let articleListModel = db.model('articleList', articleListSchema)

module.exports = articleListModel

