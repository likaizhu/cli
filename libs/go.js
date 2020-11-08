const ora = require('ora')
const chalk = require('chalk')
const download = require('download-git-repo')
const go = (next, url) => {
  next.then((projectName) => {
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
  })
}
module.exports = go
