#!/usr/bin/env node

// 交互式命令行
const inquirer = require('inquirer')
// 修改控制台字符串的样式
const chalk = require('chalk')
// node 内置文件模块
const fs = require('fs')
// 读取根目录下的 template.json
const template = require(`${__dirname}/../template`)

// 自定义交互式命令行的问题及简单的校验
let question = [
  {
    name: 'name',
    type: 'input',
    message: '请输入模板名称',
    validate(val) {
      if (val === '') {
        return '模板名称为必填项！'
      } else if (template[val]) {
        return '模板已经存在！'
      } else {
        return true
      }
    },
  },
  {
    name: 'url',
    type: 'input',
    message: '请输入模板地址',
    validate(val) {
      if (val === '') return '模板地址是必填项！'
      return true
    },
  },
]
const writeFileCallback = (err) => {
  if (err) console.log(err)
  console.log('\n')
  console.log(chalk.green('添加模板成功!\n'))
  console.log(chalk.grey('所有模板: \n'))
  console.log(template)
  console.log('\n')
}
inquirer.prompt(question).then((answers) => {
  // answers 就是用户输入的内容，是个对象
  let { name, url } = answers
  template[name] = url.replace(/[\u0000-\u0019]/g, '')
  // 把模板信息写入 template.json 文件中
  fs.writeFile(
    `${__dirname}/../template.json`,
    JSON.stringify(template),
    'utf-8',
    writeFileCallback
  )
})
