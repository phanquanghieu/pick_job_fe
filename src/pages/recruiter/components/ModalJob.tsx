import React, { useEffect, useState } from 'react'
import { Form, Input, Modal, Select, InputNumber } from 'antd'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { EditorState, ContentState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import api from 'utils/api'
import { toast } from 'react-toastify'
import { TOOLBAR } from 'constant/common'

function ModalJob({ isShowModel, handleCloseModel, mode, jobEdit = {} }: any) {
  const [areaOptions, setAreaOptions] = useState([])
  const [salaryOptions, setSalaryOptions] = useState([])
  const [experienceOptions, setExperienceOptions] = useState([])
  const [locationOptions, setLocationOptions] = useState([])

  const [description, setDescription] = useState<any>(() =>
    intiEditorContent(jobEdit.description)
  )
  const [requirement, setRequirement] = useState<any>(() =>
    intiEditorContent(jobEdit.requirement)
  )
  const [benefit, setBenefit] = useState<any>(() =>
    intiEditorContent(jobEdit.benefit)
  )

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

  const onFinish = async ({
    name,
    number_of_recruits,
    salary,
    area,
    experience,
    location,
    address,
  }: any) => {
    let _description = draftToHtml(
      convertToRaw(description.getCurrentContent())
    )
    let _requirement = draftToHtml(
      convertToRaw(requirement.getCurrentContent())
    )
    let _benefit = draftToHtml(convertToRaw(benefit.getCurrentContent()))
    if (!name) return toast.error('Invalid Parameter')
    const _job = {
      name,
      number_of_recruits,
      salary,
      area,
      experience,
      location,
      address,
      description: _description,
      requirement: _requirement,
      benefit: _benefit,
    }
    let res
    if (mode === 'CREATE') res = await api.post('/jobs', _job)
    else await api.put(`/jobs/${jobEdit.id}`, _job)
    toast.success('Success')
    handleCloseModel()
  }

  return (
    <Modal
      open={isShowModel}
      onCancel={handleCloseModel}
      style={{ top: 20 }}
      footer={null}
      width={1024}
    >
      <div className="px-6 py-3 text-xl border-b font-semibold">
        {mode === 'CREATE' ? 'Create New Job' : 'Edit Job'}
      </div>
      <div className="px-6 pt-3 pb-1">
        <Form
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 21 }}
          layout="horizontal"
          onFinish={onFinish}
          initialValues={{
            name: jobEdit?.name,
            number_of_recruits: jobEdit?.number_of_recruits,
            salary: jobEdit?.salary?.id,
            rank: jobEdit?.rank?.id,
            experience: jobEdit?.experience?.id,
            location: jobEdit?.location?.id,
            address: jobEdit?.address,
          }}
        >
          <Form.Item label="Job Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Num of Recruits" name="number_of_recruits">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Job Area" name="area" wrapperCol={{ span: 12 }}>
            <Select
              showSearch
              placeholder="Select"
              optionFilterProp="children"
              filterOption={filterOption}
              options={areaOptions}
            />
          </Form.Item>

          <Form.Item label="Salary" name="salary" wrapperCol={{ span: 12 }}>
            <Select
              showSearch
              placeholder="Select"
              optionFilterProp="children"
              filterOption={filterOption}
              options={salaryOptions}
            />
          </Form.Item>

          <Form.Item
            label="Experience"
            name="experience"
            wrapperCol={{ span: 12 }}
          >
            <Select
              showSearch
              placeholder="Select"
              optionFilterProp="children"
              filterOption={filterOption}
              options={experienceOptions}
            />
          </Form.Item>

          <Form.Item label="Location" name="location" wrapperCol={{ span: 12 }}>
            <Select
              showSearch
              placeholder="Select"
              optionFilterProp="children"
              filterOption={filterOption}
              options={locationOptions}
            />
          </Form.Item>

          <Form.Item label="Address" name="address">
            <Input />
          </Form.Item>
          <Form.Item label="Description" valuePropName="description">
            <Editor
              toolbar={TOOLBAR}
              editorState={description}
              onEditorStateChange={setDescription}
              wrapperClassName="border rounded transition-all hover:border-sky-500"
              editorClassName="px-3"
            />
          </Form.Item>
          <Form.Item label="Requirement" valuePropName="requirement">
            <Editor
              toolbar={TOOLBAR}
              editorState={requirement}
              onEditorStateChange={setRequirement}
              wrapperClassName="border rounded transition-all hover:border-sky-500"
              editorClassName="px-3"
            />
          </Form.Item>
          <Form.Item label="Benefit" valuePropName="benefit">
            <Editor
              toolbar={TOOLBAR}
              editorState={benefit}
              onEditorStateChange={setBenefit}
              wrapperClassName="border rounded transition-all hover:border-sky-500"
              editorClassName="px-3"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 3, span: 21 }}>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-0.5 mb-2 bg-sky-500 text-white rounded shadow text-lg font-medium hover:shadow-md"
              >
                {mode === 'CREATE' ? 'Create' : 'Update'}
              </button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  )
}

export default ModalJob

const intiEditorContent = (content: any) =>
  content
    ? EditorState.createWithContent(
        ContentState.createFromBlockArray(htmlToDraft(content).contentBlocks)
      )
    : EditorState.createEmpty()
const filterOption = (input: any, option: any) =>
  (option?.label ?? '').includes(input)
