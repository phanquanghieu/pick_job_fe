import { Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import api from 'utils/api'

function Filter({ filter, setFilter }: any) {
  const [areaOptions, setAreaOptions] = useState([])
  const [salaryOptions, setSalaryOptions] = useState([])
  const [experienceOptions, setExperienceOptions] = useState([])
  const [locationOptions, setLocationOptions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const [areaRes, salaryRes, experienceRes, locationRes] =
        await Promise.all([
          api.get('/areas'),
          api.get('/salaries'),
          api.get('/experiences'),
          api.get('/locations'),
        ])
      const toOptions = (item: any) => ({
        label: item.label,
        value: item.id,
      })
      setAreaOptions(areaRes?.data?.map?.(toOptions))
      setSalaryOptions(salaryRes?.data?.map?.(toOptions))
      setExperienceOptions(experienceRes?.data?.map?.(toOptions))
      setLocationOptions(locationRes?.data?.map?.(toOptions))
    }
    fetchData()
  }, [])

  return (
    <div>
      <div>
        <div className="mt-2 mb-0.5">Job name</div>
        <Input
          placeholder="Enter"
          value={filter?.name}
          onChange={(e) => setFilter({ ...filter, name: e.target.value })}
        />
      </div>
      <div>
        <div className="mt-2 mb-0.5">Job Area</div>
        <Select
          value={filter?.area}
          onChange={(value) => setFilter({ ...filter, area: value })}
          showSearch
          className="w-full"
          placeholder="Choose"
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={areaOptions}
          allowClear
        />
      </div>
      <div>
        <div className="mt-2 mb-0.5">Location</div>
        <Select
          value={filter?.location}
          onChange={(value) => setFilter({ ...filter, location: value })}
          showSearch
          className="w-full"
          placeholder="Choose"
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={locationOptions}
          allowClear
        />
      </div>
      <div>
        <div className="mt-2 mb-0.5">Work experience</div>
        <Select
          value={filter?.experience}
          onChange={(value) => setFilter({ ...filter, experience: value })}
          showSearch
          className="w-full"
          placeholder="Choose"
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={experienceOptions}
          allowClear
        />
      </div>
      <div>
        <div className="mt-2 mb-0.5">Salary</div>
        <Select
          value={filter?.salary}
          onChange={(value) => setFilter({ ...filter, salary: value })}
          showSearch
          className="w-full"
          placeholder="Choose"
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={salaryOptions}
          allowClear
        />
      </div>
    </div>
  )
}

export default Filter

const filterOption = (input: any, option: any) =>
  (option?.label ?? '').includes(input)
const filterSort = (optionA: any, optionB: any) =>
  (optionA?.label ?? '')
    .toLowerCase()
    .localeCompare((optionB?.label ?? '').toLowerCase())
