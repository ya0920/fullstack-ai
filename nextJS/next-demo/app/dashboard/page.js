import { use } from 'react'

async function getData() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return {
    message: '接口请求成功'
  }
}



// async function DashboardScreen() {
//   const { message } = await getData()
//   return (
//     <h1>{message}</h1>
//   )
// }


function DashboardScreen() {
  const { message } = use(getData())
  return (
    <h1>{message} {Error()}</h1>
    
  )
}
export default DashboardScreen