import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

function JobItem({ job, applied_at, showImg = true }: any) {
  return (
    <div className="p-4 mb-4 shadow rounded-md bg-white flex justify-between">
      <div className="flex">
        {showImg && (
          <img
            src={job.company?.avatar?.url ?? IMG}
            className="mr-4 h-20 w-20 bg-cover"
          />
        )}
        <div className=" flex flex-col justify-between">
          <div className="font-bold text-lg">
            <Link to={`/job/${job.id}`}>{job.name}</Link>
          </div>
          <div>
            <Link to={`/company/${job.company?.id}`}>{job.company?.name}</Link>
          </div>
          <div className="flex space-x-2 text-sm">
            {job.area?.label && (
              <div className="px-1 border border-sky-500 rounded shadow">
                {job.area?.label}
              </div>
            )}
            {job.location?.label && (
              <div className="px-1 border border-sky-500 rounded shadow">
                {job.location?.label}
              </div>
            )}
            {job.salary?.label && (
              <div className="px-1 border border-sky-500 rounded shadow">
                {job.salary?.label}
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        {applied_at ? (
          <div>{`Applied at ${dayjs(applied_at).format('DD/MM/YYYY')}`}</div>
        ) : (
          <div>{`${
            dayjs(job.created_at).diff(dayjs(), 'day') + 30
          } day left to apply`}</div>
        )}
      </div>
    </div>
  )
}

export default JobItem

const IMG =
  'https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?w=200'
