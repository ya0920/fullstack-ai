# 构建工具 webPack vite 

# 模块化语法
 - 将不同的功能模块放在不同的文件中，方便管理，提高代码的可读性



最原始的js语法：<script src="/learnWebPack/src/main.js"></script>


# 自动化构建工具
 - webPack 用 node 打造的，只能识别 js 代码
    1. 用插件来识别其他的文件
    2. 用 loader 来识别其他的文件
    3. 用 bable 来识别 es6的代码，并降级转成 es5 的代码
