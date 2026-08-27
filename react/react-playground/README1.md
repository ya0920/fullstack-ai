# 将tsx 编译为 js
@babel/standalone(babel的浏览器版本)
@types/babel__standalone

# 笔记
1. react怎么工作
使用源码里的react.createElement创建一个虚拟DOM对象，包含type、props、children等属性
react-dom根据虚拟DOM对象创建真实DOM元素，并插入到页面中

2. ref
ref是用useRef创建的对象，初始值为null，使用时通过.ref.current访问，值不会触发组件重新渲染，适合存储DOM元素或其他不需要响应式的数据
其他响应式是用useState创建的，值直接使用

# 资源处理
import {useState} from 'react';
import logo from './logo.tsxx';

需要用的：babel(parser、transform、generator) AST -- 抽象语法树

---

# 项目架构详解

## iframe 通信方式

iframe 的通信主要通过 **postMessage API** 实现。

### 单向通信（当前项目采用）
```javascript
// 父页面 → iframe
iframe.contentWindow.postMessage({ data: 'hello' }, '*')

// iframe → 父页面
window.parent.postMessage({ data: 'hello' }, '*')

// 接收消息
window.addEventListener('message', (event) => {
  console.log(event.data)
})
```

### 项目中的应用
目前采用的是**单向通信**——父页面将编译后的代码注入到iframe中执行，但没有反向通信。

---

## 项目文件结构详解

### 根目录文件
| 文件 | 用途 |
|------|------|
| **main.tsx** | 应用入口，初始化 React DOM |
| **App.tsx** | 顶层组件，包装 PlaygroundProvider |
| **App.scss** | 全局样式 |

### ReactPlayground 文件夹（核心逻辑）
| 文件 | 用途 |
|------|------|
| **PlaygroundContext.tsx** | React Context，管理全局文件状态 |
| **files.ts** | 初始化项目文件 |
| **index.tsx** | 主布局组件，分割左右两个面板 |
| **utils.ts** | 工具函数 |
| **template/** | 模板文件夹，存放初始代码模板 |

### CodeEditor 文件夹（代码编辑区）
| 文件 | 用途 |
|------|------|
| **index.tsx** | 代码编辑器主组件 |
| **Editor.tsx** | Monaco 编辑器封装 |
| **FileNameList.tsx** | 文件选项卡列表 |
| **FileNameItem.tsx** | 单个文件选项卡组件 |
| **Editor/ata.ts** | TypeScript 自动补全服务 |

### Preview 文件夹（实时预览区）
| 文件 | 用途 |
|------|------|
| **index.tsx** | 预览组件主逻辑 |
| **compiler.ts** | 核心编译器，用 Babel 编译 TSX → JS |
| **iframe.html** | iframe 模板文件 |

---

## 状态管理：PlaygroundProvider + Context

### PlaygroundProvider 的作用
是一个**全局状态管理容器**，主要作用：
1. 管理所有文件
2. 管理当前选中文件
3. 提供文件操作方法（添加、删除、重命名）
4. 通过 Context 传递给所有子组件

### useContext 的用法
`useContext` 是 React 提供的 Hook，用来**获取 Context 中的值**。

```tsx
import { useContext } from 'react'
import { PlaygroundContext } from '../../ReactPlayground/PlaygroundContext'

export default function CodeEditor() {
  // 从 PlaygroundContext 中获取所有状态和方法
  const { files, selectedFileName, setFiles } = useContext(PlaygroundContext)
  
  console.log(files)
  console.log(selectedFileName)
  setFiles(...)
}
```

### Props vs Context 对比

| 特性 | Props | Context |
|------|-------|---------|
| **传值深度** | 逐层传递 | 全局获取 |
| **中间组件** | 需要转发 | 无需参与 |
| **适用场景** | 相邻组件通信 | 跨层级全局状态 |

---

## 文件语言识别

### getFileNameLanguage 的用途
根据文件后缀名返回**编辑器要用的语言标识**。

```typescript
export const getFileNameLanguage = (fileName: string) => {
  const suffix = fileName.split('.').pop() as string
  const languageMap = {
    js: 'javascript',
    tsx: 'typescript',
    ts: 'typescript',
    jsx: 'javascript',
    css: 'css',
    json: 'json',
  }
  return languageMap[suffix as keyof LanguageMap] || 'javascript'
}
```

**用途**：
- ✅ 代码高亮
- ✅ 语法提示（IntelliSense）
- ✅ 语言特定的快捷键

---

## 文件下载机制

### 下载 ZIP 的原理

```typescript
export async function downLoadFiles(files: Files) {
  // 1️⃣ 创建 ZIP 压缩包对象
  const zip = new JSZip()
  
  // 2️⃣ 将所有文件添加到 ZIP 中
  Object.keys(files).forEach(name => {
    zip.file(name, files[name].value)
  })

  // 3️⃣ 生成 Blob（二进制数据）
  const blob = await zip.generateAsync({ type: 'blob' })
  
  // 4️⃣ 调用 file-saver 库下载
  saveAs(blob, `react-playground-${Date.now()}.zip`)
}
```

### 两种下载方式对比

| 方面 | 手动 a 标签（Vue） | file-saver 库（React） |
|------|------------------|-------------------|
| **代码量** | ❌ 更多 | ✅ 更少 |
| **兼容性** | ⚠️ 部分浏览器有问题 | ✅ 跨浏览器兼容好 |
| **大文件** | ⚠️ 可能内存溢出 | ✅ 处理更稳定 |
| **依赖** | ✅ 无额外依赖 | ❌ 需要引入库 |

**推荐**：使用 `file-saver` 库，这是业界标准。

---

## iframe 隔离机制

### 四层隔离

#### 1️⃣ 独立 DOM 树
```
父页面                   iframe（沙箱）
<html>                  <html>（独立）
  <body>                  <body>（独立）
    <div id="root"/>      <div id="root"/>（独立）
    <iframe/>
  </body>
</html>
```

#### 2️⃣ 独立全局作用域
```javascript
// 父页面
window.myVar = 'parent'

// iframe 内部
window.myVar  // ❌ undefined（独立的 window 对象）
window.parent.myVar  // ✅ 'parent'（通过 window.parent 访问）
```

#### 3️⃣ 独立的脚本执行环境
- ✅ 代码在独立的全局作用域执行
- ✅ 异常不会崩溃主应用
- ✅ 网络请求独立管理

#### 4️⃣ 样式隔离
- ✅ 父页面样式不影响 iframe
- ✅ iframe 有自己的 CSS 上下文

### 隔离对比

| 隔离层面 | iframe | script 标签 |
|--------|--------|-----------|
| **DOM** | ✅ 完全隔离 | ❌ 共享 |
| **window** | ✅ 独立 window | ❌ 共享 window |
| **全局变量** | ✅ 隔离 | ❌ 污染全局 |
| **样式** | ✅ 隔离 | ❌ 全局影响 |
| **异常** | ✅ 不影响主应用 | ❌ 可能崩溃 |

---

## Blob URL 详解

### 什么是 Blob URL

**Blob** = **B**inary **L**arge **Ob**ject（二进制大对象）

```javascript
// 创建一个 Blob 对象
const blob = new Blob([htmlContent], { type: 'text/html' })

// 创建指向二进制对象的 URL
const blobUrl = URL.createObjectURL(blob)
// 返回：blob:http://localhost:5173/abc123def456
```

### URL 类型对比

```
http://example.com/file.html
↑ HTTP URL - 指向服务器上的文件

file:///C:/Users/file.html
↑ File URL - 指向本地磁盘文件

blob:http://localhost:5173/abc123def456
↑ Blob URL - 指向浏览器内存中的二进制对象
```

### 为什么用 Blob URL

- 🎯 **跨浏览器兼容** - IE/Edge/Chrome/Firefox 都支持
- 🎯 **大文件处理** - 不会卡死或内存溢出
- 🎯 **代码简洁** - 无需手动处理 DOM
- 🎯 **流式处理** - 适合大型文件下载

---

## 完整实现流程

### 从编辑到预览的完整过程

```
用户编辑代码
  ↓
CodeEditor 捕获变化
  ↓
更新 PlaygroundContext（文件状态）
  ↓
Preview 监听文件变化
  ↓
compiler.ts 用 Babel 编译代码
  ↓
将编译代码 + 导入映射插入 iframe.html 模板
  ↓
转换为 Blob + 创建虚拟 URL
  ↓
iframe 加载 Blob URL
  ↓
实时显示结果（隔离执行）
```

### getIframeUrl 函数详解

```typescript
const getIframeUrl = () => {
  // Step 1: 获取原始 HTML 模板
  // iframeRaw 是 iframe.html 的文本内容
  
  // Step 2: 插入导入映射（npm 包映射）
  const res = iframeRaw.replace(
    '<script type="importmap"></script>',
    `<script type="importmap">${files[IMPORT_MAP_FILE_NAME].value}</script>`,
  )
  
  // Step 3: 插入编译后的代码
  .replace(
    '<script type="module" id="appSrc"></script>',
    `<script type="module" id="appSrc">${compiledCode}</script>`,
  )
  
  // Step 4: 转换为 Blob
  const blob = new Blob([res], { type: 'text/html' })
  
  // Step 5: 创建虚拟 URL
  return URL.createObjectURL(blob)
}
```

---

## 项目类型澄清

这个项目：
- ❌ **不是** React 官方仓库
- ❌ **不是** 状态管理库（如 Redux/Vuex）
- ✅ **只是** 用 React + Context API 写的一个普通应用

这是一个 **React Playground 应用**（在线编辑器），使用了 React 框架来构建。

---

# React 编译原理 & 渲染原理

这个项目深度涉及 React 的编译和渲染原理。

## React 编译原理（JSX → JavaScript）

### 原理概述

```
JSX 代码                     Babel 编译器                  JavaScript 代码
├─ <App />        ──────────────────────────→   React.createElement(App, null)
├─ <div>hello</div>                             React.createElement('div', null, 'hello')
└─ {condition ? <A/> : <B/>}                   condition ? React.createElement(A) : React.createElement(B)
```

### 项目中的应用

这个项目在 **compiler.ts** 中使用了 **Babel** 来编译 JSX：

```typescript
import { transform } from "@babel/standalone"

export const babelTransform = (filename: string, code: string, files: Files) => {
  // 1️⃣ 预处理：如果是 TSX/JSX，自动导入 React
  let _code = beforeTransformCode(filename, code)
  
  // 2️⃣ 使用 Babel 编译
  let result = transform(_code, {
    presets: ['react', 'typescript'],  // ← 使用 React 和 TypeScript 预设
    filename,
    plugins: [customResolver(files)],   // ← 自定义插件处理本地导入
    retainLines: true,
  }).code!
  
  return result
}
```

### Babel 的作用

| 步骤 | 功能 |
|------|------|
| **Parser** | 将 JSX 代码解析成 AST（抽象语法树） |
| **Transform** | 转换 AST，处理 JSX、TypeScript 等 |
| **Generator** | 将转换后的 AST 生成为 JavaScript 代码 |

### 具体编译过程

```
输入代码：
import React from 'react'
export default function App() {
  return <div>Hello React</div>
}

  ↓ Babel Parser

AST 抽象语法树（树状结构）
{
  type: 'Program',
  body: [
    {
      type: 'ImportDeclaration',
      source: { value: 'react' }
    },
    {
      type: 'FunctionDeclaration',
      name: 'App',
      body: {
        type: 'JSXElement',
        openingElement: { name: 'div' },
        children: ['Hello React']
      }
    }
  ]
}

  ↓ Babel Transform (react 预设处理)

转换后的 AST
{
  type: 'CallExpression',
  callee: { name: 'React.createElement' },
  arguments: [
    'div',
    null,
    'Hello React'
  ]
}

  ↓ Babel Generator

输出代码：
import React from 'react';
export default function App() {
  return React.createElement('div', null, 'Hello React');
}
```

### 自定义 Babel 插件（项目中的核心）

项目使用自定义插件处理**本地模块导入**：

```typescript
function customResolver(files: Files): PluginObj {
  return {
    visitor: {
      ImportDeclaration(path) {
        const modulepath = path.node.source.value  // './App.tsx'
        
        if (modulepath.startsWith('.')) {
          const file = getModuleFile(files, modulepath)
          
          if (file.name.endsWith('.css')) {
            // CSS 文件转换为 JavaScript
            path.node.source.value = CssToJS(file)
          } else if (file.name.endsWith('.json')) {
            // JSON 文件转换为 JavaScript
            path.node.source.value = JsonToJS(file)
          } else {
            // 其他文件递归编译，转换为 Blob URL
            path.node.source.value = URL.createObjectURL(
              new Blob([babelTransform(file.name, file.value, files)], 
                      { type: 'application/javascript' })
            )
          }
        }
      }
    }
  }
}
```

**作用**：
- ✅ 处理相对路径导入
- ✅ CSS/JSON 转换成 JS 可执行的形式
- ✅ 递归编译依赖的本地模块
- ✅ 生成 Blob URL 供浏览器加载

---

## React 渲染原理（虚拟 DOM → 真实 DOM）

### 核心概念

```
用户编写的 JSX 代码
  ↓
编译后的 React.createElement() 调用
  ↓
生成虚拟 DOM 对象（JavaScript 对象）
  ↓
React-DOM 将虚拟 DOM 转换为真实 DOM
  ↓
挂载到 HTML 页面
  ↓
用户看到渲染结果
```

### 虚拟 DOM 的结构

```javascript
// 虚拟 DOM 对象（由 React.createElement 创建）
{
  type: 'div',                    // ← HTML 标签名
  key: null,
  ref: null,
  props: {
    children: [
      {
        type: 'span',
        props: { children: 'Hello' }
      },
      {
        type: 'button',
        props: { 
          onClick: () => {...},
          children: 'Click Me'
        }
      }
    ]
  }
}

对应的 JSX：
<div>
  <span>Hello</span>
  <button onClick={() => {}}>Click Me</button>
</div>
```

### 项目中的渲染过程

在 iframe 中，编译后的代码执行：

```html
<!-- iframe.html 模板 -->
<html>
  <script type="importmap">
    {
      "imports": {
        "react": "https://esm.sh/react@18",
        "react-dom/client": "https://esm.sh/react-dom@18/client"
      }
    }
  </script>
  
  <script type="module" id="appSrc">
    // 编译后的代码（来自 compiler.ts）
    import React from 'react'
    import { createRoot } from 'react-dom/client'
    
    function App() {
      return React.createElement('div', null, 'Hello World')
      // ↑ 创建虚拟 DOM 对象
    }
    
    // 使用 createRoot API（React 18+）
    const root = createRoot(document.getElementById('root'))
    root.render(React.createElement(App))
    // ↑ React-DOM 将虚拟 DOM 转换为真实 DOM 并挂载
  </script>
  
  <div id="root"></div>  <!-- ← 挂载点 -->
</html>
```

### 渲染流程详解

```
Step 1: 创建虚拟 DOM
└─ React.createElement('div', null, 'Hello World')
   返回虚拟 DOM 对象：{ type: 'div', props: { children: 'Hello World' } }

Step 2: 调用 root.render()
└─ root.render(virtualDOM)

Step 3: React-DOM 的 Reconciliation（协调）
└─ 比较新旧虚拟 DOM（第一次是空的）
└─ 生成需要修改的操作列表

Step 4: DOM Mutation（DOM 操作）
└─ 执行真实的 DOM 操作
└─ document.createElement('div')
└─ div.textContent = 'Hello World'

Step 5: 挂载到页面
└─ document.getElementById('root').appendChild(div)

结果：
页面中出现：
<div id="root">
  <div>Hello World</div>
</div>
```

### 更新过程（状态变化）

```javascript
// 用户组件中有状态
function Counter() {
  const [count, setCount] = React.useState(0)
  
  return React.createElement('div', null,
    React.createElement('p', null, `Count: ${count}`),
    React.createElement('button', { 
      onClick: () => setCount(count + 1) 
    }, 'Increment')
  )
}

// Step 1: 初次渲染
// 虚拟 DOM: { type: 'div', props: { children: [<p>Count: 0</p>, <button>...] } }
// 真实 DOM: <div><p>Count: 0</p><button>Increment</button></div>

// Step 2: 用户点击 button → setCount(1)
// React 重新调用 Counter() 创建新的虚拟 DOM
// 虚拟 DOM: { type: 'div', props: { children: [<p>Count: 1</p>, <button>...] } }

// Step 3: React 对比（Diff）
// 旧：<p>Count: 0</p>
// 新：<p>Count: 1</p>
// 差异：文本内容从 '0' 变成 '1'

// Step 4: 最小化更新
// 只修改 <p> 的 textContent，不重新创建整个 DOM

// 结果：页面更新为
// <div><p>Count: 1</p><button>Increment</button></div>
```

---

## Babel AST（抽象语法树）

### AST 是什么

AST 是代码的**树状结构表示**，每个节点代表代码的一个部分。

```
JSX 代码：<App name="test" />

AST 表示：
{
  type: 'JSXElement',
  openingElement: {
    type: 'JSXOpeningElement',
    name: { type: 'JSXIdentifier', name: 'App' },
    attributes: [
      {
        type: 'JSXAttribute',
        name: { name: 'name' },
        value: { value: 'test' }
      }
    ]
  }
}
```

### 项目中 AST 的使用

```typescript
// Babel 的工作流：
代码字符串 
  ↓ Parser
AST （抽象语法树）
  ↓ Transform
修改后的 AST
  ↓ Generator
输出的代码字符串
```

---

## 学习要点总结

### 这个项目演示了

| 概念 | 在项目中的体现 |
|------|--------------|
| **JSX 编译** | compiler.ts 使用 Babel 将 JSX 转成 React.createElement() |
| **虚拟 DOM** | iframe 中的 React 代码创建虚拟 DOM 对象 |
| **DOM 挂载** | createRoot() + render() 将虚拟 DOM 挂载到真实 DOM |
| **组件更新** | 编辑代码 → 重新编译 → Blob URL 更新 → iframe 重新加载 → 虚拟 DOM 重新渲染 |
| **Babel 插件** | customResolver 自定义处理模块导入 |
| **AST 遍历** | Babel 的 visitor 模式遍历和修改 AST |

### 为什么要学这个

- ✅ 理解 React 的工作流程
- ✅ 理解 Babel 的编译过程
- ✅ 理解虚拟 DOM 和 Reconciliation
- ✅ 理解如何构建在线代码编辑器
- ✅ 学会使用 Babel 插件系统 