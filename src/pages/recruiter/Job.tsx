import React, { useEffect, useMemo, useState } from 'react'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Popconfirm, Table } from 'antd'
import ModalJob from './components/ModalJob'
import api from 'utils/api'
import local from 'utils/local'
import { toast } from 'react-toastify'

function Job() {
  const user = local.getUser()
  const [jobs, setJobs] = useState([])
  const [jobEdit, setJobEdit] = useState({})
  const [isShowModel, setIsShowModel] = useState(false)
  const [mode, setMode] = useState('')

  const fetchJobs = () => {
    api
      .get(`/jobs`, { params: { where: { __company_id: user.__company_id } } })
      .then((res) => {
        setJobs(res?.data)
      })
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  const handleEditJob = (job: any) => {
    setJobEdit(job)
    setMode('EDIT')
    setIsShowModel(true)
  }

  const handleDeleteJob = (jobId: number) => {
    api.delete(`/jobs/${jobId}`).then(() => {
      fetchJobs()
      toast.success('Delete Job Success')
    })
  }

  const columns: any = useMemo(
    () => [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Work Area',
        dataIndex: 'area',
        key: 'area',
        render: (d: any) => d?.label,
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary',
        render: (d: any) => d?.label,
      },
      {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
        render: (d: any) => d?.label,
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
              onClick={() => handleEditJob(job)}
              type="primary"
              className="bg-sky-500 flex justify-center items-center"
              shape="circle"
              icon={<EditOutlined />}
            />
            <Popconfirm
              placement="topRight"
              title="Are you sure to delete this Job?"
              onConfirm={() => handleDeleteJob(job.id)}
              okButtonProps={{ className: 'bg-sky-500' }}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="primary"
                className="bg-red-500 flex justify-center items-center"
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </div>
        ),
      },
    ],
    []
  )
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="h-14 px-4 bg-white rounded-md shadow flex justify-between items-center">
          <div className=" text-xl font-medium">Jobs</div>
          <div>
            <Button
              onClick={() => {
                setIsShowModel(true)
                setMode('CREATE')
              }}
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
          <Table rowKey="id" columns={columns} dataSource={jobs} />
        </div>
      </div>

      {isShowModel && (
        <ModalJob
          isShowModel={isShowModel}
          handleCloseModel={() => {
            setIsShowModel(false)
            fetchJobs()
          }}
          mode={mode}
          jobEdit={jobEdit}
        />
      )}
    </>
  )
}

export default Job
