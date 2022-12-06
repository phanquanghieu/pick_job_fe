import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Company() {
  const { companyId } = useParams()
  const company = {
    name: 'ddddd',
    company: 'ddddd',
    image:
      'https://static.topcv.vn/user_avatars/trhwMHMXa5vt4sAkuq1H_630bcb93768d7_av.jpg',
    salary: '10000',
    address: 'dddd',
    location: 'ha noi',
    created_at: '2022-12-01 12:00:00',
    updated_at: '2022-12-01 12:00:00',
  }
  return (
    <div className="mt-6">
      <div className="mb-4 p-6 rounded shadow bg-white flex justify-between">
        <div className="flex">
          <img
            src={company.image}
            className="h-24 w-24 bg-cover rounded-full"
          />
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
          <div className="p-3 rounded shadow bg-white">ddd</div>
        </div>
        <div className="w-1/2">
          <div className="py-3 px-4 rounded shadow bg-white">
            <div className="text-2xl mr-3 mb-4 font-medium">
              company details
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company
