import React, { useEffect, useState } from 'react'
import api from 'utils/api'
import JobItem from './components/JobItem'

function AppliedJob() {
  const [appliedJobs, setAppliedJobs] = useState([])
  const [hostFile, setHostFile] = useState('')

  useEffect(() => {
    api.get('/applied_jobs/user').then((res) => setAppliedJobs(res?.data || {}))
    api
      .get('/upload/host')
      .then((res) => setHostFile(res?.data?.file_host || ''))
  }, [])

  return (
    <>
      <div className="py-3 px-4 mb-4 rounded shadow bg-white">
        <div className="text-xl mr-3 font-medium">Applied Jobs</div>
      </div>
      {appliedJobs?.map?.((appliedJob: any) => (
        <JobItem
          key={appliedJob.id}
          job={appliedJob.job}
          applied_at={appliedJob.applied_at}
        />
      ))}
    </>
  )
}

export default AppliedJob
