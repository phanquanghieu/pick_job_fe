import React, { useEffect, useMemo, useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import { Button, Table } from 'antd'
import dayjs from 'dayjs'
import api from 'utils/api'

function Candidate() {
  const [appliedJobs, setAppliedJobs] = useState([])
  const [hostFile, setHostFile] = useState('')

  useEffect(() => {
    api
      .get('/applied_jobs/company')
      .then((res) => setAppliedJobs(res?.data || []))
    api
      .get('/upload/host')
      .then((res) => setHostFile(res?.data?.file_host || ''))
  }, [])
  const columns: any = useMemo(
    () => [
      {
        title: 'Name',
        dataIndex: 'user',
        key: 'user.full_name',
        render: (d: any) => d?.full_name,
      },
      {
        title: 'Email',
        dataIndex: 'user',
        key: 'user.email',
        render: (d: any) => d?.email,
      },
      {
        title: 'Gender',
        dataIndex: 'user',
        key: 'user.gender',
        render: (d: any) => d?.gender,
      },
      {
        title: 'Birthday',
        dataIndex: 'user',
        key: 'user.birthday',
        render: (d: any) => dayjs(d?.birthday).format('YYYY'),
      },
      {
        title: 'Job',
        dataIndex: 'job',
        key: 'job.name',
        render: (d: any) => d?.name,
      },
      {
        title: 'CV',
        dataIndex: 'user',
        key: 'user.cv',
        width: 1,
        render: (d: any) => (
          <div className="flex">
            <Button
              href={d?.file_cv?.url ? `${hostFile}${d?.file_cv?.url}` : ''}
              target="blank"
              type="primary"
              className="bg-green-500 flex justify-center items-center"
              shape="circle"
              icon={<DownloadOutlined />}
            />
          </div>
        ),
      },
    ],
    [hostFile]
  )
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="h-14 px-4 bg-white rounded-md shadow flex justify-between items-center">
          <div className="text-xl font-medium">Candidates</div>
        </div>
      </div>
      <div className="py-4 overflow-auto">
        <div className="rounded-md shadow bg-white">
          <Table rowKey="id" columns={columns} dataSource={appliedJobs} />
        </div>
      </div>
    </>
  )
}

export default Candidate
