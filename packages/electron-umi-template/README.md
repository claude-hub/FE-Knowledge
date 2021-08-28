# electron + umi 模板库

模板来自于: [electron-react-umi-tpl](https://github.com/qld-cf/electron-react-tpl)

### 本地开启

```
npm i // 安装不成功请用yarn
npm start
npm run pack // 默认根据当前系统打包
npm run pack-mac // 打包mac平台
npm run pack-windows // 打包windows平台
npm run pack-all // 打包所有平台
```


### 目录树
```
|-- project
    |-- .editorconfig
    |-- .eslintrc.js
    |-- .gitignore
    |-- .gitlab-ci.yml
    |-- .prettierignore
    |-- .prettierrc.js
    |-- directoryList.md
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- tsconfig.json
    |-- typings.d.ts
    |-- eslint-rules 自定义eslint配置
    |   |-- base.js
    |   |-- react.js
    |   |-- ts.js
    |-- src
        |-- main 主进程
        |   |-- app-update.yml 生产环境自动更新配置
        |   |-- bundle.js 自动生成
        |   |-- bundle.js.map
        |   |-- dev-app-update.yml 开发环境自动更新配置
        |   |-- index.js 入口
        |   |-- loading.html
        |   |-- preload.js
        |   |-- README.md
        |   |-- config 编译配置
        |   |   |-- config.js
        |   |   |-- webpack.config.js
        |   |-- controls 控制集
        |   |   |-- AppAutoUpdater.js
        |   |   |-- AppMainWindow.js
        |   |   |-- AppTray.js
        |   |   |-- electron-helper.js
        |   |-- public 附件
        |   |   |-- icon.ico
        |   |   |-- icon.png
        |   |   |-- tray.png
        |   |-- script 编译脚本
        |       |-- build.js
        |-- render 渲染进程
            |-- .env
            |-- .umirc.ts
            |-- app.ts
            |-- global.less
            |-- README.md
            |-- .umi umi自动生成配置和插件等
            |   |-- umi.ts
            |   |-- core
            |   |-- plugin-dva
            |   |-- plugin-initial-state
            |   |-- plugin-model
            |   |-- plugin-request
            |-- api 接口集合
            |   |-- api.list.ts
            |-- assets 附件
            |   |-- image
            |   |   |-- yay.jpg
            |   |-- style
            |       |-- bootstrap-part.less
            |       |-- common.less
            |-- common 通用
            |   |-- enum.ts
            |   |-- global.ts
            |-- components 组件
            |   |-- readme.md
            |   |-- AutoUpdate
            |   |   |-- index.tsx
            |   |   |-- style.less
            |   |-- FormCps
            |   |   |-- index.tsx
            |   |   |-- readme.md
            |   |-- TableCps
            |       |-- index.tsx
            |       |-- readme.md
            |-- config 配置
            |   |-- iconfont.ts
            |   |-- menus.tsx
            |-- dist 本地打包生成文件
            |-- layouts 布局
            |   |-- index.less
            |   |-- index.tsx
            |   |-- header
            |   |   |-- index.less
            |   |   |-- index.tsx
            |   |-- loading
            |   |   |-- index.less
            |   |   |-- index.tsx
            |   |-- menu
            |       |-- index.less
            |       |-- index.tsx
            |-- mock
            |   |-- foo.ts
            |-- models redux
            |   |-- xxStore.ts
            |-- pages
            |   |-- home.normal.less
            |   |-- index.tsx
            |   |-- Foo 示例
            |   |   |-- index.tsx
            |   |   |-- components
            |   |   |   |-- TableList.tsx
            |   |   |-- models
            |   |   |   |-- foo.ts
            |   |   |-- services
            |   |       |-- foo.ts
            |   |-- Home 业务
            |       |-- Edge
            |       |   |-- index.tsx
            |       |-- WebSocket
            |           |-- index.tsx
            |-- utils 工具集

```

### log

- 本地调试日志

```js
const log = require('electron-log');
// log.transports.file.file = 'xx/record.log' 本地可指定文件
// 默认日志存放
// on Linux: ~/.config/{appName}/log.log
// on macOS: ~/Library/Logs/{appName}/log.log
// on Windows: user\AppData\Roaming\{appName}\log.log
log.info('Hello, log');
log.warn('Some problem appears');
```

### 注意事项

1. 下载依赖和打包运行错误，请用cnpm或者配置npm config的electron ERROR路径
2. 任何地方的component文件夹名不可首字母大写 会被umi识别为路由而影响热加载等
3. 卡在node install.js : npm config edit 添加：electron_mirror="https://npm.taobao.org/mirrors/electron/"
4. 下载electron 9.1一直失败，请删除包，然后安装全局的9.1版本的electron即可
5. 最新版本electron也可以尝试，求稳本地用9.1.0
6. umi版本随着业务量增大，tsx数量暴涨后，热加载效率会变低，可以尝试配置路由而不选用动态路由
```
// .umirc.ts
const routes = [] // 自定义路由，来自src/render/.umi/core/routes.ts
routes: closeFlexRoute ? routes : undefined,
```

### 参考

[官方electron文档](https://www.electronjs.org/docs)

[官方umi文档](https://umijs.org/)
