import { Input, Table, Space, Popconfirm } from 'antd';
const { Search } = Input;
import './todo.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Todo() {
  const onSearch = (value) => {
    // console.log(value); `http://localhost:3000/data/?q=${value}`
    
  }

  const del = async(id) => {
    const res = await axios.delete(`http://localhost:3000/data/${id}`)
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  const columns = [
    {
      title: '任务编号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '任务名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '任务描述',
      dataIndex: 'des',
      key: 'des'
    },
    {
      title: '操作',
      dataIndex: 'do',
      key: 'do',
      render: (text, record) => (
        <Space size='middle'>
          <Popconfirm title="确定删除吗?" onConfirm={() => del(record.id)}>
            <a href='#'>删除</a>
          </Popconfirm>
        </Space>
      )
    }
  ]
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/data').then(res => {
      console.log(res.data);
      setList(res.data)
    })
  }, [])


  return (
    <div className="container">
      <div className="search-box">
        <Search
         placeholder='请输入关键词'
         onSearch={onSearch}
         allowClear
         size='large'
         enterButton="搜索"
        ></Search>
      </div>

      <Table
        bordered
        columns={columns}
        dataSource={list}
        pagination={false}
        rowKey={(item) => item.id}
      ></Table>
    </div>
  )
}

export default Todo;