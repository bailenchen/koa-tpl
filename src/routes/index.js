/*
 * @Description: index 路由 
 * @Author: Len
 */

const router = require('koa-router')()


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa-template'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa json'
  }
})


module.exports = router
