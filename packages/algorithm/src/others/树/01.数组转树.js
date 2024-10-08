var arr = [
  ['a', 'aa', 'aaa', 'aaaa'],
  ['b', 'bb', 'bbb'],
  ['a', 'ab', 'aba'],
  ['a', 'aa', 'aab']
];
// 将arr转为下面结构
var result = [{
  'name': 'a',
  'child': [
    {
      'name': 'aa',
      'child': [
        {
          'name': 'aaa',
          'child': [
            {
              'name': 'aaaa',
              'child': []
            }
          ]
        },
        {
          'name': 'aab',
          'child': []
        }
      ]
    },
    {
      'name': 'ab',
      'child': [
        {
          'name': 'aba',
          'child': []
        }
      ]
    }
  ]
}, {
  'name': 'b',
  'child': [
    {
      'name': 'bb',
      'child': [
        {
          'name': 'bbb',
          'child': []
        }
      ]
    }
  ]
}];

function toTree(arr) {
  const obj = {};
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const item = arr[i][j];
      if (!obj[item]) {
        obj[item] = {
          name: item,
          child: [],
        };
      }
      if (j > 0) {
        const parent = obj[arr[i][j - 1]];
        if (parent) {
          if (parent.child.indexOf(obj[item]) < 0) {
            parent.child.push(obj[item]);
          }
        }
      } else {
        if (res.indexOf(obj[item]) < 0) {
          res.push(obj[item]);
        }
      }
    }
  }
  console.log(obj)
  return res;
}

console.log(JSON.stringify(toTree(arr)));
