<template>
  <table>
    <thead>
      <th>序号</th>
      <th>书籍名称</th>
      <th>出版日期</th>
      <th>价格</th>
      <th>购买数量</th>
      <th>操作</th>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>你不知道的 javaScript</td>
        <td>2018.9.3</td>
        <td>45</td>
        <td>
          <button>-</button>
          <span class="counter">1</span>
          <button>+</button>
        </td>
        <td>
          <button>移除</button>
        </td>
      </tr>
    </tbody>
  </table>
  <h2>总价格: 45</h2>
</template>

<script setup>
const books = [
  {
    id: 1,
    name: '《算法导论》',
    date: '2006-9',
    price: 85.00,
    count: 1
  },
  {
    id: 2,
    name: '《UNIX编程艺术》',
    date: '2006-2',
    price: 59.00,
    count: 1
  },
  {
    id: 3,
    name: '《编程珠玑》',
    date: '2008-10',
    price: 39.00,
    count: 1
  },
  {
    id: 4,
    name: '《代码大全》',
    date: '2006-3',
    price: 128.00,
    count: 1
  },
]
</script>

<style lang="css" scoped>
table {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}

th,
td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}

th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}

.counter {
  margin: 0 5px;
}
</style>