一个基于Koa2的web开发模板

采用经典的MVC架构，保证了各层级的单一职责，帮助开发者更好的规划项目架构。

不仅可以开发API接口，还可以直接书写模板(ejs)，进行服务端渲染。

集成了一些常用中间件和NPM包

* koa-router
* koa-bodyparser
* ejs
* mysql2
* sequelize
* ...

安装依赖

```shell
yarn
```

运行项目

```shell
yarn dev
```

数据库配置

/src/config/db.js

```JS
let MYSQL_CONF = {
  host: 'localhost',
  user: '',
  password: '',
  port: 3306,
  database: '',
}
```

同步数据库

```shell
node src/db/sync.js
```