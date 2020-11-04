#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')
const template = require(`${__dirname}/../template`)

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

url = template[templateName]

console.log(chalk.white('\n Start generating... \n'))
// 出现加载图标
const spinner = ora('Downloading...')
spinner.start()
// 执行下载方法并传入参数
download(url, projectName, (err) => {
  if (err) {
    spinner.fail()
    console.log(chalk.red(`Generation failed. ${err}`))
    return
  }
  // 结束加载图标
  spinner.succeed()
  console.log(chalk.cyan('\n Generation completed!'))
  console.log(chalk.cyan('\n To get started'))
  console.log(chalk.cyan(`\n    cd ${projectName} \n`))
})
