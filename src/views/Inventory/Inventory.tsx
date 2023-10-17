import { DoubleRightOutlined } from '@ant-design/icons'
import { Breadcrumb, Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import medicalIcon from '~/assets/icons/medicalServices.svg'
import medicalGreenIcon from '~/assets/icons/medicalServicesGreen.svg'
import warningIcon from '~/assets/icons/warning.svg'
function Inventory() {
  return (
    <>
      <div>
        <Breadcrumb
          style={{ margin: '16px 0', color: '#1D242E', fontSize: '26px', fontWeight: 'bold', lineHeight: '18px' }}
        >
          Inventory
        </Breadcrumb>
        <span className='text-[16px] text-[#1D242E] font-medium '>List of medicines available for sales.</span>
      </div>

      <Row className='mt-5' gutter={24}>
        <Col span={6}>
          <div className='w-full  rounded border-2 border-solid border-[#03A9F5] bg-white'>
            <div className='p-2 border-b border-b-[#03A9F5] border-solid flex flex-col items-center'>
              <img src={medicalIcon} alt='healthy-icon' />
              <div className='text-[20px] font-bold my-1'>298</div>
              <div className='text-lg'>Medicines Available</div>
            </div>
            <div className='flex justify-center p-2 items-center bg-[#03A9F54D] '>
              <Link to='' className=' text-sm'>
                <span className='mr-2'>View Full List</span>
                <DoubleRightOutlined />
              </Link>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className='w-full  rounded border-2 border-solid border-[#01A768] bg-white'>
            <div className='p-2 border-b border-b-[#01A768] border-solid flex flex-col items-center'>
              <img src={medicalGreenIcon} alt='healthy-icon' />
              <div className='text-[20px] font-bold my-1'>02</div>
              <div className='text-lg'>Medicine Groups</div>
            </div>
            <div className='flex justify-center p-2 items-center bg-[#01A7684D] '>
              <Link to='' className=' text-sm'>
                <span className='mr-2'>View Groups</span>
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
    </>
  )
}

export default Inventory
