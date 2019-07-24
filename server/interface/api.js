const Router = require('koa-router')
const api = require('../controller/index')

const router = new Router({
  prefix:'/v1'
})

router.get('/articleList', api.articleList)
router.get('/detail',api.articleDetail)

exports.router =router