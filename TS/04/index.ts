// // interface IRes {
// //   code: number,
// //   status: string,
// //   data: any
// // }

// const a: 1 = 1

interface IRes {
  code: Code,
  status: 'success' | 'fail',
  data: any
}

type Code = 10000 | 10001 | 10002 | 50000