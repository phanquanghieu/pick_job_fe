import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from 'utils/api'
import JobItem from './components/JobItem'

function Company() {
  const [company, setCompany] = useState<any>({})
  const [hostFile, setHostFile] = useState('')
  const { companyId } = useParams()
  useEffect(() => {
    api
      .get(`/companies/${companyId}`)
      .then((res) => setCompany(res?.data || {}))
    api
      .get('/upload/host')
      .then((res) => setHostFile(res?.data?.file_host || ''))
  }, [])

  return (
    <div className="mt-6">
      <div className="mb-4 p-6 rounded shadow bg-white flex justify-between">
        <div className="flex">
          <img src={IMG} className="h-24 w-24 bg-cover rounded-full" />
          <div className="ml-6 flex flex-col justify-between">
            <div className="font-extrabold text-sky-500 text-3xl">
              {company.name}
            </div>
            <div>{company.address}</div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center"></div>
        </div>
      </div>

      <div className="flex space-x-6">
        <div className="w-1/2">
          <div className="py-3 px-4 rounded shadow bg-white">
            <div className="text-xl mr-3 mb-4 font-medium">
              Company Introduction
            </div>
            <div
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: company.introduction }}
            ></div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="py-3 px-4 mb-4 rounded shadow bg-white">
            <div className="text-xl mr-3 font-medium">Recruit</div>
          </div>
          {company.jobs?.map((job: any) => (
            <JobItem key={job.id} job={job} showImg={false} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Company

const IMG =
  'https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?w=200'
