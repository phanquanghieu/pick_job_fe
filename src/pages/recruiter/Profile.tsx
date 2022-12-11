import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Radio, DatePicker, Upload, Alert } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { EditorState, ContentState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import local from 'utils/local'
import api from 'utils/api'
import { toast } from 'react-toastify'
import { TOOLBAR } from 'constant/common'

function Profile() {
  const user = local.getUser()
  const [company, setCompany] = useState<any>(null)
  const [editorState, setEditorState] = useState<any>(() =>
    EditorState.createEmpty()
  )
  const [fileAvatar, setFileAvatar] = useState(null)

  useEffect(() => {
    if (!user.__company_id) return setCompany({})
    api
      .get(`/companies/${user.__company_id}`)
      .then((res) => {
        setCompany(res?.data)
        const contentBlock = htmlToDraft(res?.data?.introduction ?? '')
        setEditorState(
          EditorState.createWithContent(
            ContentState.createFromBlockArray(contentBlock.contentBlocks)
          )
        )
      })
      .catch(() => setCompany({}))
  }, [])

  const onFinish = async ({ name, address }: any) => {
    let introduction = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    )
    if (!name || !address || !introduction)
      return toast.error('Invalid Parameter')
    let res = await api.post('/companies', { name, address, introduction })
    toast.success('Success')
  }
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="h-14 px-4 bg-white rounded-md shadow flex justify-between items-center">
          <div className="text-xl font-medium">Company Profile</div>
        </div>
      </div>
      <div className="py-4 overflow-auto">
        <div className="p-4 pt-4 rounded-md shadow bg-white">
          {!user.__company_id && (
            <Alert
              className="mb-4"
              message="You do not have a company. Create one!"
              type="error"
            />
          )}
          <div className="pt-2">
            {company && (
              <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                layout="horizontal"
                onFinish={onFinish}
                initialValues={{
                  name: company?.name,
                  address: company?.address,
                }}
              >
                <Form.Item label="Company Name" name="name">
                  <Input />
                </Form.Item>
                <Form.Item label="Address" name="address">
                  <Input />
                </Form.Item>
                <Form.Item label="Avatar" valuePropName="file">
                  <Upload
                    onRemove={() => {
                      setFileAvatar(null)
                    }}
                    beforeUpload={(file: any) => {
                      setFileAvatar(file)
                      return false
                    }}
                  >
                    <Button icon={<UploadOutlined />}>
                      Select Avatar File
                    </Button>
                  </Upload>
                </Form.Item>
                <Form.Item label="Introduction" valuePropName="introduction">
                  <Editor
                    toolbar={TOOLBAR}
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                    wrapperClassName="border rounded transition-all hover:border-sky-500"
                    editorClassName="px-3"
                  />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                  <button
                    type="submit"
                    className="px-4 py-0.5 mb-2 bg-sky-500 text-white rounded shadow text-lg font-medium hover:shadow-md"
                  >
                    {company ? 'Update' : 'Create'}
                  </button>
                </Form.Item>
              </Form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
