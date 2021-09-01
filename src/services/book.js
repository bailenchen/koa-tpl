/*
 * @Description: book service
 * @Author: Len
 */

const { Book } = require('../db/model/index')


/**
 * @description: 获取图书列表
 * @author: Len
 * @return {*}
 */
async function queryList() {
  // 查询
  const result = await Book.findAll({
    attributes: ['id', 'bookName', 'author', 'isbn', 'publisher'],
  })
  if (result == null) {
    // 未找到
    return result
  }  

  let blogList = result.length ? result.map(book => book.dataValues) : null
  return blogList
}


module.exports = {
  queryList
}
