var reverseList = function(head) {
  if (!head) return head
  
  let pre = null // 5
  let cur = head  // null
  let next = cur.next   // null

  while (cur) {
    cur.next = pre
    pre = cur
    cur = next
    if (next) {
      next = next.next
    }
  }

  return pre
};


list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

console.log(reverseList(list1));
