import { Space, Table, Tag } from 'antd'
import React from 'react'

function Job() {
  const columns = [
    {
      title: 'Job Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_: any, { tags }: { tags: any }) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="px-4 py-3 text-xl font-medium bg-white">Jobs</div>
      </div>
      <div className="overflow-auto">
        <div className="px-4 p-3">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  )
}

export default Job
