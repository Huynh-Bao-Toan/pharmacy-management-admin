import { useState, ReactNode } from 'react'
import { UserOutlined, MoreOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { Avatar, Badge } from 'antd'
import Logo from '~/assets/images/logo.svg'
import { items } from './constants/MenuData.constants'

const { Header, Content, Sider } = Layout

export interface MainLayoutProps {
  children: ReactNode
}
function MainLayout({ children }: MainLayoutProps) {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={230} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='h-16 bg-[#002140] relative'>
          <img src={Logo} alt='logo' className='absolute top-[10%] ' />
        </div>

        <div className='h-16 mx-6 my-6 '>
          <div className='flex items-center justify-between'>
            <Badge dot color='#0072bc' style={{ width: '14px', height: '14px' }} offset={[-40, 0]}>
              <Avatar shape='square' size='large' style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Badge>
            <div className={` flex-col text-white text-base  ${collapsed ? 'hidden' : 'flex'}`}>
              <span className='font-medium'>Toan Huynh</span>
              <span className='font-normal text-xs text-yellow-500'>Admin</span>
            </div>
            <div style={{ display: collapsed ? 'none' : 'block' }}>
              <MoreOutlined style={{ color: '#fff', fontSize: '25px', cursor: 'pointer' }} />
            </div>
          </div>
        </div>
        <div className='demo-logo-vertical' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: '0 16px', background: colorBgContainer }}>ahshdhsdhdaasdhsh</Header>
        <Content style={{ margin: '0 16px' }}>
          <div>
            <Breadcrumb
              style={{ margin: '16px 0', color: '#1D242E', fontSize: '26px', fontWeight: 'bold', lineHeight: '18px' }}
            >
              Dashboard
            </Breadcrumb>
            <span className='text-[16px] text-[#1D242E] font-medium '>A quick data overview of the inventory.</span>
          </div>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
