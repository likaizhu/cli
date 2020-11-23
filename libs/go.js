const chalk = require('chalk')
const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const download = require('../libs/download')
const generator = require('../libs/generate')
const go = (next, url, projectName) => {
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
    .then((context) => {
      const name =
        context.name === '.' ? path.basename(process.cwd()) : context.name
      return inquirer
        .prompt([
          {
            name: 'projectName',
            message: '项目的名称',
            default: name,
          },
          {
            name: 'projectVersion',
            message: '项目的版本号',
            default: '1.0.0',
          },
          {
            name: 'projectDescription',
            message: '项目的简介',
            default: `A project named ${name}`,
          },
          {
            name: 'projectAuthor',
            message: '项目的创建人',
            default: `likaizhu`,
          },
        ])
        .then((answers) => {
          return {
            ...context,
            metadata: {
              ...answers,
            },
          }
        })
    })
    .then((context) => {
      return generator(
        context.metadata,
        context.target,
        path.parse(context.target).dir
      )
    })
    .then(() => {
      // 成功用绿色显示，给出积极的反馈
      console.log(chalk.cyan('\n Generation completed!'))
      console.log(chalk.cyan('\n To get started'))
      if (projectName !== '.')
        console.log(chalk.cyan(`\n    cd ${projectName} \n`))
    })
    .catch((err) => {
      // 失败了用红色，增强提示
      console.log(chalk.red(`Generation failed. ${err}`))
    })
}
module.exports = go
