function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
  // list1.val   list2.val
  let l1 = list1
  let l2 = list2
  let res = new ListNode()
  let head = res

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      res.next = l1
      l1 = l1.next
    } else {
      res.next = l2
      l2 = l2.next
    }
    res = res.next
  }

  res.next = l1 !== null ? l1 : l2

  return head.next
};


list1 = {
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

list2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: {
        val: 6,
        next: null
      }
    }
  }
}

console.log(mergeTwoLists(list1, list2));


