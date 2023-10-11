import { Button, Checkbox, Form, Input } from 'antd'
type FieldType = {
  PartnerID?: string
  password?: string
  remember?: string
}
function Login() {
  const onFinish = (values: unknown) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className='bg-slate-300 h-[100vh]'>
      <div className='w-96 relative top-2/4 left-2/4  -translate-x-2/4 -translate-y-2/4'>
        <div className='text-center mb-6'>
          <b className='text-3xl text-slate-800 tracking-wide '>Pharmacy Management</b>
        </div>
        <div className='bg-white rounded-sm p-5'>
          <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item<FieldType>
              labelAlign='left'
              label='Partner ID'
              name='PartnerID'
              rules={[{ required: true, message: 'Please input your Partner ID!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              labelAlign='left'
              label='Password'
              name='password'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType> name='remember' wrapperCol={{ offset: 0, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button htmlType='submit'>Login</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
