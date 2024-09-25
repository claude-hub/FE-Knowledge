let data = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 6, name: '部门6', pid: 0 },
]

/**
 * 数组转列表
 */
function arrToTree(arr, parentId) {
  // 判断是否是顶层节点，如果是就返回。不是的话就判断是不是自己要找的子节点
  const filterArr = arr.filter(item => {
    return parentId === undefined ? item.pid === 0 : item.pid === parentId
  })

  // 进行递归调用把子节点加到父节点的 children 里面去
  filterArr.forEach(item => {
    item.children = arrToTree(arr, item.id)
  })

  return filterArr;
}

console.log(JSON.stringify(arrToTree(data)));

/**
 * 广度优先遍历
 */
function bfs(root) {
  const queue = root; // 初始化队列，将根节点加入队列
  const result = []; // 用于存储遍历结果

  while (queue.length > 0) {
    const node = queue.shift(); // 取出队列中的第一个节点
    result.push({
      id: node.id,
      name: node.name,
      pid: node.pid
    }); // 将当前节点加入结果数组

    // 将当前节点的子节点加入队列
    if (node.children && node.children.length > 0) {
      queue.push(...node.children);
    }
  }
  return result;
}

const tree = arrToTree(data);

console.log(bfs(tree))