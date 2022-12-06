import React from 'react'
import { Link } from 'react-router-dom'

function JobItem({ job }: any) {
  return (
    <div className="p-4 mb-4 shadow rounded-md bg-white flex justify-between">
      <div className="flex">
        <img src={job.image} className="h-20 w-32 bg-cover" />
        <div className="ml-4 flex flex-col justify-between">
          <div className="font-bold text-lg">
            <Link to={`job/${job.name}`}>{job.name}</Link>
          </div>
          <div>
            <Link to={`company/${job.name}`}>{job.company}</Link>
          </div>
          <div className="flex space-x-2 text-sm">
            <div className="px-1 border border-sky-500 rounded shadow">
              {job.salary}
            </div>
            <div className="px-1 border border-sky-500 rounded shadow">
              {job.location}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>3 day to apply</div>
      </div>
    </div>
  )
}

export default JobItem
