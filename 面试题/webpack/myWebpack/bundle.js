const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const path = require('path');
const babel = require('@babel/core');

const getModuleInfo = (file) => {
    const body = fs.readFileSync(file, 'utf-8'); // 不加Sync的是同步方法
    const ast = parser.parse(body, {
        sourceType: 'module'  // 表示我们要解析的是ES模块
    });

    const deps = {}; // 依赖的模块
    traverse(ast, {
        ImportDeclaration({node}) {
            const dirname = path.dirname(file); // 当前文件所在的目录
            const abspath = './' + path.join(dirname, node.source.value);
            deps[node.source.value] = abspath;
        }
    });

    // 代码转换
    const {code} = babel.transformFromAst(ast, null, {
        presets: ['@babel/preset-env']  // 读取当前电脑的环境，进行代码转换
    });

    console.log(code);
    
};
getModuleInfo('./src/index.js');