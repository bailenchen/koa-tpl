/*
 * @Description: book API 路由
 * @Author: Len
 */

const router = require('koa-router')()


router.prefix('/api/book')

const { getBookList } = require('../../controller/book')

// 获取图书列表
router.get('/list', async (ctx, next) => {
  ctx.body = await getBookList()
})


module.exports = router
