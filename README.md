# 云智易文档中心

## 环境安装

> 本说明文档默认编辑者已安装 Node.js 环境

云智易文档中心使用 [Hexo](https://hexo.io/) 生成，先全局安装 Hexo：

```
npm install hexo -g
```

安装所需的 node 模块包。

```
cd <项目根目录>
npm install
```

## 编辑

开启 Hexo 本地服务器：

```
cd <项目根目录>
hexo server
```

编辑 source 目录下的 markdown 文件，打开浏览器，访问 `http://localhost:4000/` 浏览效果。

## 发布

**发布预览版**

```
hexo deploy
```

**发布正式版**

```
. ./bin/deploy.sh
```
