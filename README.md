## 关于lerna

|      API      |                           说明                           |
| :-----------: | :------------------------------------------------------: |
|  lerna clean  |                删除各个包下的node_modules                |
|  lerna init   |                     创建新的lerna库                      |
|  lerna list   |                     显示package列表                      |
| lerna changed |     显示自上次relase tag以来有修改的包， 选项通 list     |
|  lerna diff   | 显示自上次relase tag以来有修改的包的差异， 执行 git diff |
|  lerna exec   |                在每个包目录下执行任意命令                |
|   lerna run   |            执行每个包package.json中的脚本命令            |
|   lerna add   |   添加一个包的版本为各个包的依赖（将会为每一个包安装）   |
| lerna import  |                       引入package                        |
|  lerna link   |                     链接互相引用的库                     |
| lerna create  |                       新建package                        |
| lerna publish |                           发布                           |

一个包管理工具，详情参考这里 [lerna](https://github.com/lerna/lerna)。
