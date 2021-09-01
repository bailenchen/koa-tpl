/*
 * @Description: Result 的数据模型
 * @Author: Len
 */

/**
 * @description: 基础模型
 * @author: Len
 * @param {*}
 * @return {*}
 */
class BaseModel {
  constructor({errno, data, message}) {
    this.errno = errno
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

/**
 * @description: 成功的数据模型
 * @author: Len
 * @param {Number} errno
 * @param {String} message
 * @return {Object}
 */
class SuccessModel extends BaseModel {
  constructor(data = {}) {
    super({
      errno: 0,
      data
    })
  }
}

/**
 * @description: 失败的数据模型
 * @author: Len
 * @param {Number} errno
 * @param {String} message
 * @return {Object}
 */
class ErrorModel extends BaseModel {
  constructor({ errno, message }) {
    super({
      errno,
      message
    })
  }
}


module.exports = {
  SuccessModel,
  ErrorModel
}
