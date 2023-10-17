import { DoubleRightOutlined } from '@ant-design/icons'
import { Breadcrumb, Col, Row, Card } from 'antd'
import { Link } from 'react-router-dom'
import healthyIcon from '~/assets/icons/healthy.svg'
import paymentIcon from '~/assets/icons/payments.svg'
import medicalIcon from '~/assets/icons/medicalServices.svg'
import warningIcon from '~/assets/icons/warning.svg'
function Dashboard() {
  return (
    <>
      <div>
        <Breadcrumb
          style={{ margin: '16px 0', color: '#1D242E', fontSize: '26px', fontWeight: 'bold', lineHeight: '18px' }}
        >
          Dashboard
        </Breadcrumb>
        <span className='text-[16px] text-[#1D242E] font-medium '>A quick data overview of the inventory.</span>
      </div>
      <Row className='mt-5' gutter={24}>
        <Col span={6}>
          <div className='w-full  rounded border-2 border-solid border-[#01A768] bg-white'>
            <div className='p-2 border-b border-b-[#01A768] border-solid flex flex-col items-center'>
              <img src={healthyIcon} alt='healthy-icon' />
              <div className='text-[20px] font-bold my-1'>Good</div>
              <div className='text-lg'>Inventory Status</div>
            </div>
            <div className='flex justify-center p-2 items-center bg-[#01A7684D] '>
              <Link to='' className=' text-sm'>
                <span className='mr-2'>View Detailed Report</span>
                <DoubleRightOutlined />
              </Link>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className='w-full  rounded border-2 border-solid border-[#FED600] bg-white'>
            <div className='p-2 border-b border-b-[#FED600] border-solid flex flex-col items-center'>
              <img src={paymentIcon} alt='healthy-icon' />
              <div className='text-[20px] font-bold my-1'>Rs. 8,55,875</div>
              <div className='text-lg'>Revenue : Jan 2022</div>
            </div>
            <div className='flex justify-center p-2 items-center bg-[#FED6004D] '>
              <Link to='' className=' text-sm'>
                <span className='mr-2'>View Detailed Report</span>
                <DoubleRightOutlined />
              </Link>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className='w-full  rounded border-2 border-solid border-[#03A9F5] bg-white'>
            <div className='p-2 border-b border-b-[#03A9F5] border-solid flex flex-col items-center'>
              <img src={medicalIcon} alt='healthy-icon' />
              <div className='text-[20px] font-bold my-1'>298</div>
              <div className='text-lg'>Medicines Available</div>
            </div>
            <div className='flex justify-center p-2 items-center bg-[#03A9F54D] '>
              <Link to='' className=' text-sm'>
                <span className='mr-2'>Visit Inventory</span>
                <DoubleRightOutlined />
              </Link>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className='w-full  rounded border-2 border-solid border-[#F0483E] bg-white'>
            <div className='p-2 border-b border-b-[#F0483E] border-solid flex flex-col items-center'>
              <img src={warningIcon} alt='healthy-icon' />
              <div className='text-[20px] font-bold my-1'>01</div>
              <div className='text-lg'>Medicine Shortage</div>
            </div>
            <div className='flex justify-center p-2 items-center bg-[#F0483E4D] '>
              <Link to='' className=' text-sm'>
                <span className='mr-2'>Resolve Now</span>
                <DoubleRightOutlined />
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      <Row className='my-6' gutter={[24, 24]}>
        <Col span={12}>
          <Card
            title='Inventory'
            extra={
              <Link to='/'>
                <span>Go to Configuration</span> <DoubleRightOutlined />
              </Link>
            }
            style={{ width: '100%', borderColor: '#1D242E4D' }}
            headStyle={{ fontSize: '16px' }}
          >
            <Row gutter={12}>
              <Col span={12}>
                <div>
                  <div className='font-bold text-[20px]'>298</div>
                  <div className='text-sm'>Total no of Medicines</div>
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <div className='font-bold text-[20px]'>24</div>
                  <div className='text-sm'>Medicine Groups</div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title='Quick Report'
            extra={
              <Link to='/'>
                <span>Go to Report</span> <DoubleRightOutlined />
              </Link>
            }
            style={{ width: '100%', borderColor: '#1D242E4D' }}
            headStyle={{ fontSize: '16px' }}
          >
            <Row gutter={12}>
              <Col span={12}>
                <div>
                  <div className='font-bold text-[20px]'>70,856</div>
                  <div className='text-sm'>Qty of Medicines Sold</div>
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <div className='font-bold text-[20px]'>5,288</div>
                  <div className='text-sm'>Invoices Generated</div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title='My Pharmacy'
            extra={
              <Link to='/'>
                <span>Go to User Management</span> <DoubleRightOutlined />
              </Link>
            }
            style={{ width: '100%', borderColor: '#1D242E4D' }}
            headStyle={{ fontSize: '16px' }}
          >
            <Row gutter={12}>
              <Col span={12}>
                <div>
                  <div className='font-bold text-[20px]'>04</div>
                  <div className='text-sm'>Go to User Management</div>
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <div className='font-bold text-[20px]'>05</div>
                  <div className='text-sm'>Total no of Users</div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title='Customers'
            extra={
              <Link to='/'>
                <span>Go to Customers Page</span> <DoubleRightOutlined />
              </Link>
            }
            style={{ width: '100%', borderColor: '#1D242E4D' }}
            headStyle={{ fontSize: '16px' }}
          >
            <Row gutter={12}>
              <Col span={12}>
                <div>
                  <div className='font-bold text-[20px]'>845</div>
                  <div className='text-sm'>Total no of Customers</div>
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <div className='font-bold text-[20px]'>Adalimumab</div>
                  <div className='text-sm'>Frequently bought Item</div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
