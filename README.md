# gl-table

[![NPM version](https://img.shields.io/npm/v/gl-table.svg?style=flat)](https://npmjs.org/package/gl-table)
[![NPM downloads](http://img.shields.io/npm/dm/gl-table.svg?style=flat)](https://npmjs.org/package/gl-table)

gl-table 是一个基于 webGL 技术所构建的 table 表格

## Usage

TODO

## Options

TODO

## Branch

- **main** 稳定分支
- **test** 测试分支
- **dev** 开发分支

## 提交消息规范

项目采用 [约定式提交消息规范](https://www.conventionalcommits.org/zh-hans/)。

### 提交格式

```
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

### 提交类型

用于说明本次提交的作用类型，常用的提交类型有：

- **feat** 在代码库中新增了一个功能
- **fix** 在代码库中修复了一个 bug
- **docs** 文档相关变更
- **build** 在代码库中改动了构建过程或额外依赖（例如：vite、eslint、npm 等）
- **perf** 在代码库中提交了用于改善代码性能的变更
- **refactor** 既非增加功能、又非修复 bug 的代码变更
- **chore** 其他琐碎代码变更（类似 refactor，但这些变更不会对用户产生影响）
- **style** 代码格式的变更（不会对代码含义造成任何影响，例如空格、缩进、格式化、增删分号等）
- **test** 增加或修改测试相关代码
- **revert** 回滚某个更早之前的提交
- **ci** 修改了 CI 配置文件和脚本

## Development

```bash
# install dependencies
$ yarn install

# develop library by docs demo
$ yarn start

# build library source code
$ yarn run build

# build library source code in watch mode
$ yarn run build:watch

# build docs
$ yarn run docs:build

# check your project for potential problems
$ yarn run doctor
```

## LICENSE

MIT
