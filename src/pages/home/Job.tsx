import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  SendOutlined,
  DollarCircleOutlined,
  RiseOutlined,
  UsergroupAddOutlined,
  ReadOutlined,
} from '@ant-design/icons'

function Job() {
  const { jobId } = useParams()
  console.log(jobId)
  const job = {
    name: 'ddddd',
    company: 'ddddd',
    image:
      'https://static.topcv.vn/user_avatars/trhwMHMXa5vt4sAkuq1H_630bcb93768d7_av.jpg',
    salary: '10000',
    location: 'ha noi',
    created_at: '2022-12-01 12:00:00',
    updated_at: '2022-12-01 12:00:00',
  }
  return (
    <div className="mt-6">
      <div className="mb-4 p-6 rounded shadow bg-white flex justify-between">
        <div className="flex">
          <img src={job.image} className="h-24 w-24 bg-cover rounded-full" />
          <div className="ml-6 flex flex-col justify-between">
            <div className="font-extrabold text-sky-500 text-3xl">
              {job.name}
            </div>
            <div>
              <Link to={`company/${job.name}`}>{job.company}</Link>
            </div>
            <div className="flex space-x-2 text-sm">Han nop ho so</div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="px-6 py-1 mb-2 bg-sky-500 text-white rounded shadow text-xl font-medium hover:shadow-md"
            >
              <SendOutlined className="mr-1" /> Apply
            </button>
          </div>
        </div>
      </div>

      <div className="flex space-x-6">
        <div className="w-2/3">
          <div className="p-3 rounded shadow bg-white">ddd</div>
        </div>
        <div className="w-1/3">
          <div className="py-3 px-4 rounded shadow bg-white">
            <div className="text-xl mr-3 mb-4 font-medium">Job details</div>
            <div className="mb-4 flex justify-between">
              <div className="flex">
                <DollarCircleOutlined className="text-2xl mr-3 text-sky-500" />
                <div>Salary</div>
              </div>
              <div>22222</div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="flex">
                <RiseOutlined className="text-2xl mr-3 text-sky-500" />
                <div>Rank</div>
              </div>
              <div>22222</div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="flex">
                <ReadOutlined className="text-2xl mr-3 text-sky-500" />
                <div>Experience</div>
              </div>
              <div>22222</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div className="flex">
                <UsergroupAddOutlined className="text-2xl mr-3 text-sky-500" />
                <div>Number of recruits</div>
              </div>
              <div>22</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Job
