# 手动实现一个打包工具
 1. 实现一个打包工具，能读取我们写的高级语法，并生成浏览器能读懂的低版本语法。
 2. 借助 babel 实现代码的分析和转换。 @babel/parser
   - 分析：将代码字符解析成 AST 语法树 （对象）
        ps. vue 会把 template 会把这个读成字符串，解析成虚拟dom，也是AST 
   - 依赖收集：遍历 AST 语法树，将代码中用到的模块收集起来  @babel/traverse
   - 将 AST 语法树转换成浏览器能识别的代码   @babel/core    @babel/preset-env
   - 获取依赖