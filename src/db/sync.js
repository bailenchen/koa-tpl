/*
 * @Description: 同步数据库
 * @Author: Len
 */

const seq = require('./seq')

require('./model/index')

seq
  .authenticate()
  .then(() => {
    console.log('ok')
  })
  .catch(() => {
    console.log('err')
  })


// 执行同步
seq.sync({force: true}).then(()=> {
  console.log('sync ok')
  process.exit()
})