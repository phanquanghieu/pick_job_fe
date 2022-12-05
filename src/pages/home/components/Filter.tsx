import { Input, Select } from 'antd'
import React from 'react'

function Filter() {
  const OPTIONS = [
    {
      value: '1',
      label: 'Not Identified',
    },
    {
      value: '2',
      label: 'Closed',
    },
    {
      value: '3',
      label: 'Communicated',
    },
    {
      value: '4',
      label: 'Identified',
    },
    {
      value: '5',
      label: 'Resolved',
    },
    {
      value: '6',
      label: 'Cancelled',
    },
  ]
  return (
    <div>
      <div>
        <div className="mt-2 mb-0.5">Job name</div>
        <Input placeholder="Enter" />
      </div>
      <div>
        <div className="mt-2 mb-0.5">Profession</div>
        <Select
          showSearch
          className="w-full"
          placeholder="Choose"
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={OPTIONS}
        />
      </div>
      <div>
        <div className="mt-2 mb-0.5">Location</div>
        <Select
          showSearch
          className="w-full"
          placeholder="Choose"
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={OPTIONS}
        />
      </div>
      <div>
        <div className="mt-2 mb-0.5">Work experience</div>
        <Select
          showSearch
          className="w-full"
          placeholder="Choose"
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={OPTIONS}
        />
      </div>
      <div>
        <div className="mt-2 mb-0.5">Ranks</div>
        <Select
          showSearch
          className="w-full"
          placeholder="Choose"
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={OPTIONS}
        />
      </div>
      <div>
        <div className="mt-2 mb-0.5">Salary</div>
        <Select
          showSearch
          className="w-full"
          placeholder="Choose"
          optionFilterProp="children"
          filterOption={filterOption}
          filterSort={filterSort}
          options={OPTIONS}
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
