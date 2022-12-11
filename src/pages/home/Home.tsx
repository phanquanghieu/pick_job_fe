import React, { useEffect, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import Filter from './components/Filter'
import JobItem from './components/JobItem'
import { Pagination } from 'antd'
import api from 'utils/api'
import { isEmpty } from 'lodash'
import Loader from 'components/Loader'

type T_Filter = {
  name?: string
  area?: number
  location?: number
  salary?: number
  experience?: number
}

function Home() {
  const [jobs, setJobs] = useState([])
  const [count, setCount] = useState(0)
  const [filter, setFilter] = useState<T_Filter>({})
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const calcParams = () => ({
    where: {
      name: { $substring: filter.name },
      __area_id: filter.area,
      __location_id: filter.location,
      __salary_id: filter.salary,
      __experience_id: filter.experience,
    },
    page,
    pageSize: PAGE_SIZE,
  })

  const fetchData = async () => {
    setIsLoading(true)
    const params = calcParams()
    const [jobRes, jobCountRes] = await Promise.all([
      api.get(`/jobs`, { params }),
      api.get(`/jobs/count`, { params }),
    ])
    setJobs(jobRes?.data ?? [])
    setCount(jobCountRes?.data ?? 0)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [page])

  const handleSearch = () => {
    fetchData()
  }
  return (
    <div className="mt-6 flex space-x-6">
      <div className="w-1/4">
        <div className="p-4 shadow rounded-md bg-white">
          <button
            onClick={handleSearch}
            type="button"
            className="w-full py-1 mb-2 bg-sky-500 text-white rounded shadow text-xl font-medium hover:shadow-md"
          >
            <SearchOutlined className="mr-1" /> Find Job
          </button>
          <Filter filter={filter} setFilter={setFilter} />
        </div>
      </div>
      <div className="w-3/4">
        {isLoading ? (
          <div className="h-full w-full">
            <Loader />
          </div>
        ) : (
          <>
            {isEmpty(jobs) && (
              <div className="h-96 p-4 mb-4 shadow rounded-md bg-white flex justify-center items-center text-slate-400 text-3xl italic font-medium">
                Not Found Job
              </div>
            )}
            {jobs?.map?.((job: any) => (
              <JobItem key={job.id} job={job} />
            ))}
            <div className="py-2 shadow rounded bg-white flex justify-center">
              <Pagination
                current={page}
                onChange={(page) => setPage(page)}
                total={count}
                pageSize={PAGE_SIZE}
                showSizeChanger={false}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Home
const PAGE_SIZE = 2
let sample = [
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
]
