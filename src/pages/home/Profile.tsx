import React, { useState } from 'react'
import { Form, Input, Button, Radio, DatePicker, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

const { TextArea } = Input
function Profile() {
  const [fileCV, setFileCV] = useState()
  console.log(fileCV)
  const onFinish = (values: any) => {
    values.birthday = values.birthday.format('YYYY-MM-DD')
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div>
      <div className="text-xl mr-3 mb-4 font-medium">Edit Profile</div>
      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            birthday: dayjs('2022-11-30', 'YYYY-MM-DD'),
            full_name: 'rrrr',
            gender: 'female',
          }}
        >
          <Form.Item label="Full Name" name="full_name">
            <Input />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Birthday" name="birthday">
            <DatePicker format={'YYYY-MM-DD'} />
          </Form.Item>
          <Form.Item label="Upload" valuePropName="file">
            <Upload
              onRemove={() => {
                setFileCV(undefined)
              }}
              beforeUpload={(file: any) => {
                setFileCV(file)
                return false
              }}
            >
              <Button icon={<UploadOutlined />}>Select CV File</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <button
              type="submit"
              className="px-4 py-0.5 mb-2 bg-sky-500 text-white rounded shadow text-lg font-medium hover:shadow-md"
            >
              Update
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Profile
