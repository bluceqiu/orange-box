/**
 * 1. 便利docs目录、获取文件名
 * 2. app.tsx 改写route生成模版
 * 3. 在menu组件生成menu.item
 */

const glob = require("glob");
const fs = require('fs');
const handlebars = require("handlebars");
const path = require('path');

const getName = filePath => path.basename(filePath.split('/').pop());

glob("src/docs/*.md", {}, function (er, files) {
  if (er) new Error(er);
  const routes = files.map(item => {
    // refresh(getName(item), item);
    return {
      item,
      name: getName(item)
    }
  })
  console.log(routes);
  compile({ routes }, './routerDemo.js', './template/router.js.hbs')

})

const refresh = async (name, filePath) => {
  // const list = fs.readdirSync("src/docs");
  // .filter(v => v !== "Home.vue")
  // .map(v => ({
  //   name: v.replace(".vue", '').toLowerCase(),
  //   file: 
  // }))

  // 生成路由定义
  // compile({ name }, './src/router.js', './template/router.js.hbs')

  // // 生成菜单
  // compile({ name }, './src/App.vue', './template/App.vue.hbs')
}
// refresh();

function compile(meta, filePath, templatePath) {
  if (fs.existsSync(templatePath)) {

    console.log("templatePath", templatePath);
    const content = fs.readFileSync(templatePath).toString();
    console.log(content);
    console.log(meta);
    const result = handlebars.compile(content)(meta)
    console.log(result);
    fs.writeFileSync(filePath, result);

    // console.log(symbols.success, chalk.green(`🔥${filePath}创建成功.`));
  }
}