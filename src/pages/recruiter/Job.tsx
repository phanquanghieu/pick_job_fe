import React, { useState } from 'react'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Modal, Table } from 'antd'

function Job() {
  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Number of Recruits',
      dataIndex: 'number_of_recruits',
      key: 'number_of_recruits',
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      width: 50,
      render: (_: any, job: any) => (
        <div className="flex space-x-3">
          <Button
            onClick={() => console.log(job.id)}
            type="primary"
            className="bg-sky-500 flex justify-center items-center"
            shape="circle"
            icon={<EditOutlined />}
          />
          <Button
            type="primary"
            className="bg-red-500 flex justify-center items-center"
            shape="circle"
            icon={<DeleteOutlined />}
          />
        </div>
      ),
    },
  ]

  const data = [
    {
      id: 1,
      name: 'John Brown',
      salary: 32,
      location: 'ha noi',
      rank: 'junior',
      number_of_recruits: 6,
      experience: 3,
      address: 'New York No. 1 Lake Park',
      description: '',
      requirement: '',
      benefit: '',
      created_at: '2022-12-08 00:00:00',
      updated_at: '2022-12-08 00:00:00',
    },
  ]
  const [isShowModel, setIsShowModel] = useState(false)
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="h-14 px-4 bg-white rounded-md shadow flex justify-between items-center">
          <div className=" text-xl font-medium">Jobs</div>
          <div>
            <Button
              onClick={() => setIsShowModel(true)}
              type="primary"
              className="bg-green-500 flex justify-center items-center"
              shape="round"
              icon={<PlusOutlined />}
            >
              Add Job
            </Button>
          </div>
        </div>
      </div>
      <div className="py-4 overflow-auto">
        <div className="rounded-md shadow bg-white">
          <Table rowKey="id" columns={columns} dataSource={data} />
        </div>
      </div>
      <Modal
        title="Modal 1000px width"
        // This was removed
        // centered
        visible={isShowModel}
        onOk={() => setIsShowModel(false)}
        onCancel={() => setIsShowModel(false)}
        // This was removed
        // width={'1000'}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

export default Job
