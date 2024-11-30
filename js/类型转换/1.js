// 1 === 1   true        ===全等，不会发生隐式类型转换

//'1' === '1'   true

//'1' == 1   true

// [] == []   false

// [] == ![]   true

//1.先转换 [] == !true
//2.再取反 [] == false
//3.右转换 [] == 0
//4.左转换 [].Toprimitive() => [].valueOf() => [].toString() => '' => 0
//5.0 == 0  true