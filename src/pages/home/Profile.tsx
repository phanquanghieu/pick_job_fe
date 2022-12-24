import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Radio, DatePicker, Upload } from 'antd'
import {
  DownloadOutlined,
  EyeOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import dayjs from 'dayjs'
import api from 'utils/api'
import { toast } from 'react-toastify'

function Profile() {
  const [profile, setProfile] = useState<any>(null)
  const [hostFile, setHostFile] = useState('')

  useEffect(() => {
    api.get('/users/profile').then((res) => setProfile(res?.data || {}))
    api
      .get('/upload/host')
      .then((res) => setHostFile(res?.data?.file_host || ''))
  }, [])

  const [fileCV, setFileCV] = useState<any>()

  const onFinish = async (values: any) => {
    values.birthday = values.birthday?.format('YYYY-MM-DD')
    let __file_id
    if (fileCV) {
      let formData = new FormData()
      formData.append('file', fileCV)

      const fileRes = await api.post('/upload/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (fileRes?.data?.id) values.__file_id = fileRes?.data?.id
    }
    await api.post('/users/profile', values)
    toast.success('Success')
    console.log('Success:', values, __file_id)
  }

  return (
    <div className="py-3 px-4 rounded shadow bg-white">
      <div className="text-xl mr-3 mb-4 font-medium">Edit Profile</div>
      <div>
        {profile && (
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            layout="horizontal"
            onFinish={onFinish}
            initialValues={{
              birthday: profile.birthday
                ? dayjs(profile.birthday, 'YYYY-MM-DD')
                : null,
              full_name: profile.full_name,
              gender: profile.gender,
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
            <Form.Item label="Upload">
              {profile?.file_cv?.url && (
                <Button
                  className="w-fit mb-3 flex justify-center items-center"
                  icon={<DownloadOutlined />}
                  href={`${hostFile}${profile.file_cv.url}`}
                >
                  Download Current CV
                </Button>
              )}
              <Upload
                onRemove={() => {
                  setFileCV(undefined)
                }}
                onChange={(e) => {
                  setFileCV(e.fileList[0].originFileObj)
                }}
                beforeUpload={() => false}
              >
                <Button
                  className="flex justify-center items-center"
                  icon={<UploadOutlined />}
                >
                  Select New CV
                </Button>
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
        )}
      </div>
    </div>
  )
}

export default Profile
