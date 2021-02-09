# blog 服务端

#### start

推荐使用 yarn

```bash
yarn
yarn start // 本地开发mock模式
yarn build // build生产环境资源
```

#### 对应文件及文件夹作用

1、models: 存放操作数据库的文件  
2、public: 存放静态文件  
3、routes: 存放路由文件  
4、controllers: 存放控制器文件  
5、index.js: 程序主文件  
6、.eslintrc.js: ESLint 检查规则  
7、.editorconfig: 保持缩进风格的一致的工具,VS Code 需要装一个插件：EditorConfig for VS Code

#### 对应模块的作用

1、koa: web 框架  
2、koa-router: koa 的路由中间件  
3、ESLint: 代码规范和语法错误检查工具
