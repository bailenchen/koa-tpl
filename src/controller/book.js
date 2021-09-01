/*
 * @Description: book controller
 */

const { queryList } = require('../services/book')
const { SuccessModel, ErrorModel } = require('../model/ResultModel')
const { bookNotExistInfo } = require('../model/ErrorInfo')


/**
 * @description: 获取图书列表
 * @author: Len
 * @return {*}
 */
async function getBookList() {
  const bookList = await queryList()
  if (bookList) {
    return new SuccessModel(bookList)
  } else {
    return new ErrorModel(bookNotExistInfo)
  }
}


module.exports = {
  getBookList
}
