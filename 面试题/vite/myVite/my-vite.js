const http = require('http');
const fs = require('fs');
const path = require('path');
const compilerSFC = require('@vue/compiler-sfc');
const compilerDOM = require('@vue/compiler-dom');

function rewriteImport(content) {
  return content.replace(/ from ['|"]([^'"]+)['|"]/g, function(s0, s1) {
    if (s1[0] !== '.' && s1[1] !== '/') {  // 不是有效路径
      return ` from '/@modules/${s1}'`
    } else {
      return s0;
    }
  })
}

const server = http.createServer((req, res) => {
  const {url} = req;
  const query = new URL(req.url, `http://${req.headers.host}`).searchParams

  if (url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let content = fs.readFileSync('./index.html', 'utf-8');
    res.end(content);
  } else if (url.endsWith('.js')) {
    const p = path.resolve(__dirname, url.slice(1));
    res.writeHead(200, {'Content-Type': 'application/javascript'});
    let content = fs.readFileSync(p, 'utf-8');
    res.end(rewriteImport(content));
  } else if (url.startsWith('/@modules/')) {
    const prefix = path.resolve(__dirname, 'node_modules', url.replace('/@modules/', ''));
    const module = require(prefix + '/package.json').module;
    const p = path.resolve(prefix, module);
    const content = fs.readFileSync(p, 'utf-8');
    res.writeHead(200, {'Content-Type': 'application/javascript'});
    res.end(rewriteImport(content));
  } else if (url.indexOf('.vue') !== -1) {
    const p = path.resolve(__dirname, url.split('?')[0].slice(1));
    const { descriptor } = compilerSFC.parse(fs.readFileSync(p, 'utf8'))

    if (!query.get('type')) {
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      const content = `
        ${rewriteImport(descriptor.script.content.replace('export default', 'const __script = '))}
        import {render as __render} from "${url}?type=template"
        __script.render = __render
        export default __script
      `
      res.end(content)
    } else if (query.get('type') === 'template') {
      const template = descriptor.template
      const render = compilerDOM.compile(template.content, {mode: 'module'}).code
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.end(rewriteImport(render))
    }
    
  }
})




server.listen(5173, () => {
  console.log('Server is running on port 5173');
})





