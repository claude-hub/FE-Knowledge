// 数据如下：
const data = [
  {
    url: "/business",
    name: "商务",
    children: [
      {
        url: "/product-reporting",
        name: "产品申报",
        children: [],
      },
      {
        url: "/offerlist",
        name: "报价列表",
        children: [],
      },
    ],
  },
  {
    url: "/product",
    name: "产品",
    children: [
      {
        url: "/certification",
        name: "产品包装认证",
        children: [
          {
            url: "/cert1",
            name: "包装认证1",
            children: [],
          }, {
            url: "/cert2",
            name: "包装认证2",
            children: [],
          },
        ],
      },
      {
        url: "/catalog",
        name: "产品类目",
        children: [],
      },
    ],
  },
  {
    url: "/order",
    name: "订单",
    children: [],
  },
]

// 输出：
// [
//   '/business/product-reporting',
//   '/business/offerlist',
//   '/product/certification/cert1',
//   '/product/certification/cert2',
//   '/product/catalog',
//   '/order'
// ]

const treeToData = (data) => {
  const res = [];
  const dsf = (data, realUrl) => {
    data.forEach(item => {
      const newUrl = realUrl ? `${realUrl}${item.url}` : item.url;
      if (item.children.length > 0) {
        dsf(item.children, newUrl);
      } else {
        res.push(newUrl);
      }
    });
  }
  dsf(data, '')

  return res;
}

console.log(treeToData(data))