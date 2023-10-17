import { useState, ReactNode } from 'react'
import { Button, Popover } from 'antd'
import { UserOutlined, MoreOutlined, LogoutOutlined } from '@ant-design/icons'
import { Layout, Menu, theme, Col, Row, Avatar, Badge } from 'antd'
import Logo from '~/assets/images/logo.svg'
import { items } from './constants/MenuData.constants'
import { Link } from 'react-router-dom'

export interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [open, setOpen] = useState(false)
  const [openLanguage, setOpenLanguage] = useState(false)
  const { Header, Content, Sider } = Layout
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  const handleOpenLanguageChange = (newOpen: boolean) => {
    setOpenLanguage(newOpen)
  }
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
              <Popover
                content={
                  <>
                    <div className='pb-3'>
                      <Link to={''} className='flex items-center '>
                        <UserOutlined />
                        <span className='text-sm ml-1'>My Profile</span>
                      </Link>
                    </div>
                    <div>
                      <Link to={''} className='text-[#F0483E] flex items-center'>
                        <LogoutOutlined />
                        <span className='text-sm ml-1'>Logout</span>
                      </Link>
                    </div>
                  </>
                }
                trigger='click'
                open={open}
                onOpenChange={handleOpenChange}
                placement='bottom'
              >
                <Button className='w-[25px] outline-none border-none bg-transparent p-0'>
                  <MoreOutlined style={{ color: '#fff', fontSize: '25px', cursor: 'pointer' }} />
                </Button>
              </Popover>
            </div>
          </div>
        </div>
        <div className='demo-logo-vertical' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: '0 16px', background: colorBgContainer }}>
          <Row align='middle' justify='center' className='h-full'>
            <Col span={12}>
              <form className=''>
                <label
                  htmlFor='default-search'
                  className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
                >
                  Search
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <svg
                      className='w-4 h-4 text-gray-500 dark:text-gray-400'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 20'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                      />
                    </svg>
                  </div>
                  <input
                    type='search'
                    id='default-search'
                    className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none'
                    placeholder='Search for anything here...'
                    required
                  />
                  <button
                    type='submit'
                    className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    Search
                  </button>
                </div>
              </form>
            </Col>
            <Col span={6}>
              <div className='flex items-center w-36 h-10 mx-auto justify-around '>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
                  <g clip-path='url(#clip0_33_645)'>
                    <path
                      d='M10.725 12.5583L8.60833 10.4667L8.63333 10.4417C10.0833 8.82499 11.1167 6.96666 11.725 4.99999H14.1667V3.33332H8.33333V1.66666H6.66666V3.33332H0.833328V4.99166H10.1417C9.58333 6.59999 8.69999 8.12499 7.49999 9.45832C6.72499 8.59999 6.08333 7.65832 5.57499 6.66666H3.90833C4.51666 8.02499 5.34999 9.30832 6.39166 10.4667L2.14999 14.65L3.33333 15.8333L7.49999 11.6667L10.0917 14.2583L10.725 12.5583ZM15.4167 8.33332H13.75L9.99999 18.3333H11.6667L12.6 15.8333H16.5583L17.5 18.3333H19.1667L15.4167 8.33332ZM13.2333 14.1667L14.5833 10.5583L15.9333 14.1667H13.2333Z'
                      fill='#1D242E'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_33_645'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <Popover
                  content={
                    <>
                      <div className='pb-3'>
                        <Link to={''} className='flex items-center '>
                          <span className='text-sm '>English (US)</span>
                        </Link>
                      </div>
                      <div>
                        <Link to={''} className=' flex items-center'>
                          <span className='text-sm'>Tiếng Việt (VN)</span>
                        </Link>
                      </div>
                    </>
                  }
                  trigger='click'
                  open={openLanguage}
                  onOpenChange={handleOpenLanguageChange}
                  placement='bottom'
                >
                  <Button className=' outline-none border-none bg-transparent p-0 h-full flex items-center'>
                    <span className='mr-2 text-base'>English (US)</span>
                    <svg xmlns='http://www.w3.org/2000/svg' width='8' height='5' viewBox='0 0 8 5' fill='none'>
                      <path
                        d='M6.77405 0.209396L3.99642 2.98702L1.21879 0.209396C0.939597 -0.0697987 0.488591 -0.0697987 0.209396 0.209396C-0.0697987 0.488591 -0.0697987 0.939597 0.209396 1.21879L3.4953 4.5047C3.7745 4.78389 4.2255 4.78389 4.5047 4.5047L7.7906 1.21879C8.0698 0.939597 8.0698 0.488591 7.7906 0.209396C7.51141 -0.0626398 7.05324 -0.0697987 6.77405 0.209396Z'
                        fill='#1D242E'
                      />
                    </svg>
                  </Button>
                </Popover>
                {/* <button className='flex items-center outline-none bg-transparent h-full'>
                
                </button> */}
              </div>
            </Col>
            <Col span={6}>
              <div className='flex flex-col items-end'>
                <div className='flex items-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
                    <circle cx='9' cy='9' r='9' fill='#FED600' />
                  </svg>
                  <span className='capitalize font-medium text-[#1D242E] text-lg ml-2'>Good Morning</span>
                </div>
                <div className='flex items-center'>
                  <span className='capitalize  text-[#1D242E] text-base'>14 January 2022</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='4'
                    height='4'
                    viewBox='0 0 4 4'
                    fill='none'
                    className='mx-2 '
                  >
                    <circle cx='2' cy='2' r='2' fill='#FED600' />
                  </svg>
                  <span className='capitalize  text-[#1D242E] text-base'>22:45:04</span>
                </div>
              </div>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: '0 16px' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
