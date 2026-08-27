# 将 tsx 编译为 js
@babel/standalone  (babel的浏览器版本)
@types/babel__standalone  


# 资源处理
import { useState } from "react";
import Aaa from './Aaa.tsx'

需要用到：babel （parse、 transform、 generate） AST -- 抽象语法树

const url = URL.createObjectURL(new Blob([code1], {type: 'application/javascript'})) 将某份资源处理成一个 blob 地址，并在 babel 编译的过程中将 from "xxx" 修改成成 from "blob:https://xxxxxx"

# bebel
@babel/core
@types/babel__core


# 引入 react
<script type="importmap">
    {
      "imports": {
          "react": "https://esm.sh/react@18.2.0"
      }
    }
  </script>

  <script type="module">
    import React from "react";

    console.log(React);
  </script>


# 代码提示器
npm i @monaco-editor/react

# 预览
iframe 标签

左侧的 tsx 代码被编译，编译完后引入带一个 html文件中，并将这个 html 文件展示在iframe中


# allotment 拖拽组件


# 样式隔离
index.module.scss  将组件的样式隔离起来，不会影响到其他组件的样式


# 编辑器 @monaco-editor/react
第三方的库需要代码提示：npm i @typescript/ata



# 整体架构
1. 项目分为 代码编辑区域 和 预览区域 公共的头部
2. reactPlayground 组件 做了左右拖拽 
3. 封装了编辑组件 和 预览组件
4. 编辑组件 中 引入了 @monaco-editor/react 编辑器
5. 编辑组件中 @typescript/ata 将第三方库添加到运行时, 封装了文件列表组件，默认展示 react 项目该有初始文件，并语序创建新文件，引入了第三方的@monaco-editor/react 编辑器并做了代码提示
6. 预览组件 中 引入了 iframe 标签，将编译后的 js 代码引入到 iframe 中，展示在预览区域
7. 整个项目没有使用仓库，借助 react 的上下文对象来实现状态管理

 - 架构：
  1. 整体项目作为一个上层组件，包含编辑组件和预览组件
  2. 抽离出来编辑组件和预览组件，分别作为独立的组件存在
  3. 编辑功能涉及到 文件列表组件，新增文件的组件，为了结构清晰，将这组件按照功能分类，都定义在编辑组件的目录中
  4. 预览组件中，将模版文件，处理资源的工具函数，都定义在预览组件的目录中
  5. 在reactPlayground这个上层组件中，专门将模板文件统一存放在 templates 目录中，方便后续的维护和扩展
  6. 整个项目运行需要的工具函数，都定义在 utils 目录中，方便后续的维护和扩展




# GET 和 POST 请求
1. GET 的参数是添加在 url 上的，而 POST 的参数是添加在 request body 中的
2. GET 请求会被缓存，而 POST 请求不会被缓存
3. get 会留下浏览器历史记录，而 post 不会留下浏览器历史记录
4. get 请求参数不能超过 2048 字个字符，而 post 请求参数可以超过 2048 字个字符

# react 工作原理
1. 将 jsx 代码进行编译，得到 虚拟 DOM 对象 （靠babel编译）
2. 遍历虚拟 DOM 对象，将对象中的 jsx 语法，特殊属性 替换成 js 语法和普通属性
3. 拿着被修改后的虚拟 DOM 对象，生成真实的DOM 结构， 调用 react 的 render 方法，将真实的DOM 结构渲染到html 中

# fiber 架构
- fiber 架构的设计是为了将 虚拟 DOM 的对比过程分成 很多个小任务，每个任务都是一个 fiber 节点，这些节点组成一个树状结构，也就叫 fiber 树
- fiber 在 diff 的过程中可以中断，也可以排优先级 （边下边玩）




{
  tag: 'div',
  props: {
    id: 'app',
    className: 'app',
  },
  children: [
    'hello world'
  ]
}