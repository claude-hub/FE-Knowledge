const path = require('path');
const { getPathFiles } = require('@claude-hub/node-utils');

const files = getPathFiles(path.resolve(__dirname, './src'), ['utils']);

files.forEach(file => {
  // 加载指定文件夹下的所有 js。
  require(file);
})
