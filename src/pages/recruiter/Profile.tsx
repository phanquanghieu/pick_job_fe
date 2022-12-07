import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Radio, DatePicker, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { EditorState, ContentState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import dayjs from 'dayjs'

function Profile() {
  const [editorState, setEditorState] = useState<any>(() =>
    EditorState.createEmpty()
  )
  const [fileAvatar, setFileAvatar] = useState(null)

  useEffect(() => {
    const contentBlock = htmlToDraft(
      '<p>Hey this <strong>editor</strong> rocks 😀</p>'
    )
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    )
    setEditorState(EditorState.createWithContent(contentState))
  }, [])

  const onFinish = (values: any) => {
    console.log(
      'Success:',
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    )
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="px-4 py-3 text-xl mb-4 font-medium bg-white">
          Company Profile
        </div>
      </div>
      <div className="overflow-auto">
        <div>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            layout="horizontal"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{
              birthday: dayjs('2022-11-30', 'YYYY-MM-DD'),
              name: 'rrrr',
              gender: 'female',
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
                <Button icon={<UploadOutlined />}>Select Avatar File</Button>
              </Upload>
            </Form.Item>
            <Form.Item label="Introduction" valuePropName="introduction">
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="border rounded transition-all hover:border-sky-500"
                editorClassName="p-2"
              />
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
          <div
            dangerouslySetInnerHTML={{
              __html: draftToHtml(
                convertToRaw(editorState.getCurrentContent())
              ),
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Profile
