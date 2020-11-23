#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const glob = require('glob')
const path = require('path')
const template = require(`${__dirname}/../template`)
const validate = require('../libs/validate')
const go = require('../libs/go')
program.usage('<template-name> [project-name]')
program.parse(process.argv)
// 当没有输入参数的时候给个提示
if (program.args.length < 1) return program.help()

// 好比 vue init webpack project-name 的命令一样，第一个参数是 webpack，第二个参数是 project-name
let templateName = program.args[0]
let projectName = program.args[1]
// 小小校验一下参数
if (!template[templateName]) {
  console.log(chalk.red('\n 模板不存在！ \n '))
  return
}
if (!projectName) {
  console.log(chalk.red('\n 项目名称不能为空！ \n '))
  return
}

let url = template[templateName]

const list = glob.sync('*')
const rootName = path.basename(process.cwd())
// 校验文件夹是否已经存在
let next = validate(list, projectName, rootName)
next && go(next, url, projectName)
