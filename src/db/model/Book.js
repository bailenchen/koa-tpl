/*
 * @Description: 图书数据模型
 * @Author: Len
 * @LastEditors: Please set LastEditors
 * @banner: 
 */

const seq = require('../seq')
const { STRING } = require('../types')

const Book = seq.define('book', {
  bookName: {
    type: STRING,
    allowNull: false,
    comment: '书名'
  },
  author: {
    type: STRING,
    allowNull: false,
    comment: '作者'
  },
  ISBN: {
    type: STRING,
    allowNull: false,
    comment: '编码'
  },
  publisher: {
    type: STRING,
    allowNull: false,
    comment: '出版社'
  }
})


module.exports = Book
