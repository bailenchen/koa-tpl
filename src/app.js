const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')


// routes
const index = require('./routes/index')
const bookViewRouter = require('./routes/view/book')
const bookAPIRouter = require('./routes/api/book')
const errorViewRouter = require('./routes/view/error')

// error handler
let onerrorConf = {}
onerrorConf = {
  redirect: '/error',
}
onerror(app, onerrorConf)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// register routes
app.use(index.routes(), index.allowedMethods())
app.use(bookViewRouter.routes(), bookViewRouter.allowedMethods())
app.use(bookAPIRouter.routes(), bookAPIRouter.allowedMethods())
app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})


module.exports = app
