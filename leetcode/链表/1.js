head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}


// head.val
// head.next.val
// head.next.next.val
// head.next.next.next.val


// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// const node = new ListNode(1)
// node.next = new ListNode(2)
// node.next.next = new ListNode(3)


const index = 10
let node = head
for (let i = 0; i < index && node; i++) {
  console.log(node.val)
  node = node.next
}