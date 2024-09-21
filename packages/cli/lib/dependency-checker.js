const fs = require('fs');
const path = require('path');
const acorn = require('acorn');
const _ = require('lodash');
const { getPathFiles } = require('@claude-hub/node-utils');

// 解析文件中的 import 和 require 语句
function parseDependencies(fileContent) {
  const ast = acorn.parse(fileContent, { ecmaVersion: 2020 });
  const dependencies = [];

  function traverse(node) {
    if (node.type === 'ImportDeclaration') {
      dependencies.push(node.source.value);
    } else if (node.type === 'CallExpression' && node.callee.name === 'require') {
      dependencies.push(node.arguments[0].value);
    }
    for (let key in node) {
      if (node[key] && typeof node[key] === 'object') {
        traverse(node[key]);
      }
    }
  }

  traverse(ast);
  return dependencies;
}

// 构建依赖图
function buildDependencyGraph(files) {
  const graph = {};

  files.forEach(file => {
    if (path.extname(file) === '.js') {
      const fileContent = fs.readFileSync(file, 'utf-8');
      const dependencies = parseDependencies(fileContent);
      graph[file] = dependencies;
    }
  });
  return graph;
}

// 检查未使用的依赖
function checkUnusedDependencies(graph, packageJson) {
  const usedDependencies = new Set();
  Object.keys(graph).forEach(file => {
    graph[file].forEach(dependency => {
      usedDependencies.add(dependency);
    });
  });

  const unusedDependencies = Object.keys(packageJson.dependencies).filter(dep => !usedDependencies.has(dep));
  return unusedDependencies;
}

// 检查循环依赖
function checkCircularDependencies(graph) {
  const visited = new Set();
  const visiting = new Set();

  function hasCycle(node) {
    if (visiting.has(node)) return true;
    if (visited.has(node)) return false;

    visiting.add(node);
    for (const neighbor of graph[node] || []) {
      if (hasCycle(neighbor)) return true;
    }
    visiting.delete(node);
    visited.add(node);
    return false;
  }

  for (const node in graph) {
    if (hasCycle(node)) {
      return true;
    }
  }
  return false;
}

function dependencyChecker() {
  const projectDir = process.cwd();
  const files = getPathFiles(projectDir, ['node_modules']);
  const packageJson = JSON.parse(fs.readFileSync(path.join(projectDir, 'package.json'), 'utf-8'));

  const dependencyGraph = buildDependencyGraph(files);

  console.log(dependencyGraph)

  const unusedDependencies = checkUnusedDependencies(dependencyGraph, packageJson);
  if (unusedDependencies.length > 0) {
    console.log('未使用的依赖:');
    console.log(unusedDependencies);
  } else {
    console.log('没有未使用的依赖');
  }

  const hasCircularDependencies = checkCircularDependencies(dependencyGraph);
  if (hasCircularDependencies) {
    console.log('存在循环依赖');
  } else {
    console.log('没有循环依赖');
  }
}

module.exports = {
  dependencyChecker
}
