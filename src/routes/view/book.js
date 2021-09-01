/*
 * @Description: book view 路由
 * @Author: Len
 */

const router = require('koa-router')()


// 图书列表
router.get('/list', async (ctx, next) => {
  await ctx.render('book/list', {
    title: '图书列表页'
  })
})


module.exports = router