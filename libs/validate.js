const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const validate = (list, projectName, rootName) => {
  let next
  if (list.length) {
    const filters = list.filter((name) => {
      const filename = path.resolve(process.cwd(), path.join('.', name))
      const isDir = fs.statSync(filename).isDirectory()
      return name.indexOf(projectName) !== -1 && isDir
    })
    if (filters.length) {
      console.log(`项目${projectName}已经存在`)
      return
    }
    next = Promise.resolve(projectName)
  } else if (rootName === projectName) {
    next = inquirer
      .prompt([
        {
          name: 'buildInCurrent',
          message:
            '当前目录为空，且目录名称和项目名称相同，是否直接在当前目录下创建新项目？',
          type: 'confirm',
          default: true,
        },
      ])
      .then((answer) => {
        return Promise.resolve(answer.buildInCurrent ? projectName : '.')
      })
  } else {
    next = Promise.resolve(projectName)
  }
  return next
}
module.exports = validate
