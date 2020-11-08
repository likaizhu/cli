const ora = require('ora')
const chalk = require('chalk')
const fs = require('fs')
const inquirer = require('inquirer')
const download = require('../libs/download')
const go = (next, url) => {
  next
    .then((projectRoot) => {
      if (projectRoot !== '.') {
        fs.mkdirSync(projectRoot)
      }
      return download(projectRoot, url).then((target) => {
        return {
          name: projectRoot,
          root: projectRoot,
          target: target,
        }
      })
    })
    .then((res) => {
      // 成功用绿色显示，给出积极的反馈
      console.log(chalk.cyan('\n Generation completed!'))
      console.log(chalk.cyan('\n To get started'))
      if(res.name!=='.')console.log(chalk.cyan(`\n    cd ${res.name} \n`))
    })
    .catch((err) => {
      // 失败了用红色，增强提示
      console.log(chalk.red(`Generation failed. ${err}`))
    })
}
module.exports = go
