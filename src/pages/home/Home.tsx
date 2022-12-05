import React, { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import Filter from './components/Filter'
import JobItem from './components/JobItem'
import { Pagination } from 'antd'

function Home() {
  const [jobs, setJobs] = useState([
    {
      name: 'ddddd',
      company: 'ddddd',
      image:
        'https://static.topcv.vn/user_avatars/trhwMHMXa5vt4sAkuq1H_630bcb93768d7_av.jpg',
      salary: '10000',
      location: 'ha noi',
      created_at: '2022-12-01 12:00:00',
      updated_at: '2022-12-01 12:00:00',
    },
    {
      name: 'ddddd',
      company: 'ddddd',
      image:
        'https://static.topcv.vn/user_avatars/trhwMHMXa5vt4sAkuq1H_630bcb93768d7_av.jpg',
      salary: '10000',
      location: 'ha noi',
      created_at: '2022-12-01 12:00:00',
      updated_at: '2022-12-01 12:00:00',
    },
    {
      name: 'ddddd',
      company: 'ddddd',
      image:
        'https://static.topcv.vn/user_avatars/trhwMHMXa5vt4sAkuq1H_630bcb93768d7_av.jpg',
      salary: '10000',
      location: 'ha noi',
      created_at: '2022-12-01 12:00:00',
      updated_at: '2022-12-01 12:00:00',
    },
    {
      name: 'ddddd',
      company: 'ddddd',
      image:
        'https://static.topcv.vn/user_avatars/trhwMHMXa5vt4sAkuq1H_630bcb93768d7_av.jpg',
      salary: '10000',
      location: 'ha noi',
      created_at: '2022-12-01 12:00:00',
      updated_at: '2022-12-01 12:00:00',
    },
  ])
  const [page, setPage] = useState(1)
  const handleChangePage = (page: number) => {
    console.log(page)
    setPage(page)
  }

  return (
    <div className="w-full h-full mt-6 max-w-5xl m-auto">
      <div className="flex space-x-6">
        <div className="w-1/4">
          <div className="p-3 shadow rounded-md bg-white">
            <button
              type="button"
              className="w-full py-1 mb-2 bg-sky-500 text-white rounded shadow text-xl font-medium hover:shadow-md"
            >
              <SearchOutlined className="mr-1" /> Find Job
            </button>
            <Filter />
          </div>
        </div>
        <div className="w-3/4">
          {jobs.map((job) => (
            <JobItem key={job.name} job={job} />
          ))}
          <div className="py-2 shadow rounded bg-white flex justify-center">
            <Pagination
              current={page}
              onChange={handleChangePage}
              total={500}
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
