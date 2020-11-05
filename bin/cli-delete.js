#!/usr/bin/env node
// 交互式命令行
const inquirer = require('inquirer')
// 修改控制台字符串的样式
const chalk = require('chalk')
// node 内置文件模块
const fs = require('fs')
const { deleteFileCallback } = require('../utils')
// 读取根目录下的 template.json
const template = require(`${__dirname}/../template`)

const question = [
  {
    name: 'name',
    message: '请输入要删除的模板名称',
    validate(val) {
      if (val === '') {
        return '模板名称不能为空!'
      } else if (!template[val]) {
        return '该模板不存在!'
      } else {
        return true
      }
    },
  },
]

inquirer.prompt(question).then((answer) => {
  let name = answer.name
  delete template[name]
  fs.writeFile(
    `${__dirname}/../template.json`,
    JSON.stringify(template),
    deleteFileCallback
  )
})
