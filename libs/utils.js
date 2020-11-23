const template = require("../template")
const chalk = require('chalk')
const map = {
  add: '添加',
  del: '删除'
}
const getTemplate = (type='add') => {
  console.log('\n')
  console.log(chalk.green(`${map[type]}模板成功!\n`))
  console.log(chalk.grey('所有模板: \n'))
  console.log(template)
  console.log('\n')
}
const addFileCallback = (err) => {
  if (err) console.log(err)
  getTemplate('add')
}

const deleteFileCallback = (err) => {
  if (err) console.log(err)
  getTemplate('del')
}

module.exports = {
  addFileCallback,
  deleteFileCallback,
}
