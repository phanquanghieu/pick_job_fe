import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  SendOutlined,
  DollarCircleOutlined,
  RiseOutlined,
  UsergroupAddOutlined,
  ReadOutlined,
} from '@ant-design/icons'
import api from 'utils/api'
import Loader from 'components/Loader'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'

function Job() {
  const [job, setJob] = useState<any>(null)
  const [isApplied, setIsApplied] = useState(false)
  const [hostFile, setHostFile] = useState('')
  const { jobId } = useParams()
  useEffect(() => {
    api.get(`/jobs/${jobId}`).then((res) => setJob(res?.data || {}))
    api
      .get(`/applied_jobs/check/${jobId}`)
      .then((res) => setIsApplied(res?.data ?? false))
    api
      .get('/upload/host')
      .then((res) => setHostFile(res?.data?.file_host || ''))
  }, [])

  const handleApplyJob = () => {
    api.post('/applied_jobs', { job_id: job.id }).then((res) => {
      toast.success('Apply success')
      setIsApplied(true)
    })
  }

  if (job === null) return <Loader />
  return (
    <div className="my-6">
      <div className="mb-4 p-6 rounded shadow bg-white flex justify-between">
        <div className="flex">
          <img
            // src={`${hostFile}${job.avatar?.url}`}
            src={IMG}
            className="h-24 w-24 bg-cover rounded-full"
          />
          <div className="ml-6 flex flex-col justify-between">
            <div className="font-extrabold text-sky-500 text-3xl">
              {job.name}
            </div>
            <div className="font-semibold text-lg">
              <Link to={`/company/${job.company?.id}`}>
                {job.company?.name}
              </Link>
            </div>
            <div className="flex space-x-2 text-sm">
              Application deadline: {dayjs(job.created_at).format('DD/MM/YYYY')}
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            {isApplied ? (
              <button
                type="button"
                className="px-6 py-1 mb-2 bg-white border-sky-500 border text-sky-500 rounded shadow text-xl font-medium hover:shadow-md"
              >
                <SendOutlined className="mr-1" /> Applied
              </button>
            ) : (
              <button
                onClick={handleApplyJob}
                type="button"
                className="px-6 py-1 mb-2 bg-sky-500 text-white rounded shadow text-xl font-medium hover:shadow-md"
              >
                <SendOutlined className="mr-1" /> Apply
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex space-x-6">
        <div className="w-2/3 space-y-4">
          <div className="p-3 px-4 rounded shadow bg-white">
            <div className="text-xl mr-3 mb-4 font-medium">Description</div>
            <div
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: job.description }}
            ></div>
          </div>
          <div className="p-3 px-4 rounded shadow bg-white">
            <div className="text-xl mr-3 mb-4 font-medium">Requirement</div>
            <div
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: job.requirement }}
            ></div>
          </div>
          <div className="p-3 px-4 rounded shadow bg-white">
            <div className="text-xl mr-3 mb-4 font-medium">Benefit</div>
            <div
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: job.benefit }}
            ></div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="py-3 px-4 rounded shadow bg-white">
            <div className="text-xl mr-3 mb-4 font-medium">Job details</div>
            <div className="mb-4 flex justify-between">
              <div className="flex">
                <DollarCircleOutlined className="text-2xl mr-3 text-sky-500" />
                <div>Salary</div>
              </div>
              <div>{job.salary?.label}</div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="flex">
                <RiseOutlined className="text-2xl mr-3 text-sky-500" />
                <div>Job Area</div>
              </div>
              <div>{job.area?.label}</div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="flex">
                <ReadOutlined className="text-2xl mr-3 text-sky-500" />
                <div>Experience</div>
              </div>
              <div>{job.experience?.label}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div className="flex">
                <UsergroupAddOutlined className="text-2xl mr-3 text-sky-500" />
                <div>Number of recruits</div>
              </div>
              <div>{job.number_of_recruits}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Job

const IMG =
  'https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?w=200'
