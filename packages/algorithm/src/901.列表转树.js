let data = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 6, name: '部门6', pid: 0 },
]

function arrToTree(arr, parentId) {
  // 判断是否是顶层节点，如果是就返回。不是的话就判断是不是自己要找的子节点
  const filterArr = arr.filter(item => {
    return parentId === undefined ? item.pid === 0 : item.pid === parentId
  })

  // // 进行递归调用把子节点加到父节点的 childNode里面去
  filterArr.forEach(item => {
    item.childNode = arrToTree(arr, item.id)
  })

  return filterArr;
}
console.log(JSON.stringify(arrToTree(data)))