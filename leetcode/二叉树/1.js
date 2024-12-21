// 数据域
// 左侧的子节点
// 右侧的子节点

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);

node1.left = node2;
node1.right = node3;


const obj = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

