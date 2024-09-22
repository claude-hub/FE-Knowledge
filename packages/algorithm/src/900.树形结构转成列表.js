const data = [
  {
    id: '1',
    name: '父节点1',
    children: [
      {
        id: '1-1',
        name: '子节点1-1',
        children: [
          {
            id: '1-1-1',
            name: '子节点1-1-1'
          },
          {
            id: '1-1-2',
            name: '子节点1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: '父节点2',
    children: [
      {
        id: '2-1',
        name: '子节点2-1'
      }
    ]
  }
]

function treeToList(data) {
  let res = [];
  const dfs = (tree) => {
    tree.forEach((item) => {
      if (item.children) {
        dfs(item.children);
        delete item.children;
      }
      res.push(item);
    });
  };
  dfs(data);
  return res;
}

// function treeToList(data) {
//   if (!Array.isArray(data) && data.length === 0) return;
//   // 方式1
//   return data.reduce((prev, cur) => {
//     const { children } = cur;
//     return Array.isArray(children) && children.length > 0 ? prev.concat(treeToList(children), cur) : prev.concat(cur);
//   }, [])
// }

console.log(treeToList(data));