import { DeleteOutlined, DoubleRightOutlined, EditOutlined, RightOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Card, Col, Row } from 'antd'
import { Link } from 'react-router-dom'

function EditMedicines() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <div>
          <Breadcrumb
            style={{
              margin: '16px 0',
              color: '#1D242E80',
              fontSize: '26px',
              fontWeight: 'bold',
              lineHeight: '18px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <span>Inventory</span>
            <RightOutlined className='mx-2' />
            <span>List of Medicines</span>
            <RightOutlined className='mx-2' />
            <span className='text-[#1D242E]'>Azithral 500 Tablet</span>
          </Breadcrumb>
          <span className='text-[16px] text-[#1D242E] font-medium '>List of medicines available for sales.</span>
        </div>
        <div className=''>
          <Button type='primary' className='flex items-center bg-[#03A9F5]'>
            <EditOutlined />
            <span>Edit Details</span>
          </Button>
        </div>
      </div>
      <div className=' mt-5 '>
        <div className='w-96'>
          <form className='w-full'>
            <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
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
                placeholder='Search in Medicine Details'
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div className='mt-5'>
        <Row className='mt-5' gutter={[24, 24]}>
          <Col span={12}>
            <Card title='Medicine' style={{ width: '100%', borderColor: '#1D242E4D' }} headStyle={{ fontSize: '16px' }}>
              <Row gutter={12}>
                <Col span={12}>
                  <div>
                    <div className='font-bold text-[20px]'>298</div>
                    <div className='text-sm'>Medicine ID</div>
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
              title='Inventory in Qty'
              extra={
                <Link to='/'>
                  <span>Send Stock Request</span> <DoubleRightOutlined />
                </Link>
              }
              style={{ width: '100%', borderColor: '#1D242E4D' }}
              headStyle={{ fontSize: '16px' }}
            >
              <Row gutter={12}>
                <Col span={8}>
                  <div>
                    <div className='font-bold text-[20px]'>298</div>
                    <div className='text-sm'>Lifetime Supply</div>
                  </div>
                </Col>
                <Col span={9}>
                  <div>
                    <div className='font-bold text-[20px]'>290</div>
                    <div className='text-sm'>Lifetime Sales</div>
                  </div>
                </Col>
                <Col span={7}>
                  <div>
                    <div className='font-bold text-[20px]'>08</div>
                    <div className='text-sm'>Stock Left</div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
      <div className='mt-5'>
        <Card title='How to use' style={{ width: '100%', borderColor: '#1D242E4D' }} headStyle={{ fontSize: '16px' }}>
          <p className='text-base'>
            Take this medication by mouth with or without food as directed by your doctor, usually once daily.
          </p>
        </Card>
      </div>
      <div className='mt-5'>
        <Card title='Side Effects' style={{ width: '100%', borderColor: '#1D242E4D' }} headStyle={{ fontSize: '16px' }}>
          <p className='text-base'>
            Dizziness, lightheadedness, drowsiness, nausea, vomiting, tiredness, excess saliva/drooling, blurred vision,
            weight gain, constipation, headache, and trouble sleeping may occur. If any of these effects persist or
            worsen, consult your doctor.
          </p>
        </Card>
      </div>
      <div className='my-5'>
        <Button type='default' danger className='flex items-center'>
          <DeleteOutlined />
          <span className='text-[15px ml-2] font-bold'>Delete Medicine</span>
        </Button>
      </div>
    </>
  )
}

export default EditMedicines
