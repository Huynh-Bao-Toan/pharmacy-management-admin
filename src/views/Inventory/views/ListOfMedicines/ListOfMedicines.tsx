import { DoubleRightOutlined, FilterOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Select, Table, TableProps } from 'antd'
import { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface'
import { ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
interface DataType {
  key: string
  medicineName: string
  medicineID: string
  groupName: string
  stockInQty: number
  action: ReactNode
}

const data: DataType[] = [
  {
    key: '1',
    medicineName: 'Augmentin 625 Duo Tablet',
    medicineID: 'D06ID232435454',
    groupName: 'Generic Medicine',
    stockInQty: 350,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  },
  {
    key: '2',
    medicineName: 'Azithral 500 Tablet',
    medicineID: 'D06ID232435451',
    groupName: 'Generic Medicine',
    stockInQty: 20,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  },
  {
    key: '3',
    medicineName: 'Ascoril LS Syrup',
    medicineID: 'D06ID232435452',
    groupName: 'Diabetes',
    stockInQty: 85,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  },
  {
    key: '4',
    medicineName: 'Amoxyclav 625 Tablet',
    medicineID: 'D06ID232435457',
    groupName: 'Generic Medicine',
    stockInQty: 150,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  },
  {
    key: '5',
    medicineName: 'Allegra 120mg Tablet',
    medicineID: 'D06ID232435455',
    groupName: 'Diabetes ',
    stockInQty: 44,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  },
  {
    key: '6',
    medicineName: 'Avil 25 Tablet',
    medicineID: 'A06ID232435458',
    groupName: 'Generic Medicine',
    stockInQty: 270,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  },
  {
    key: '7',
    medicineName: 'Augmentin 625 Duo Tablet',
    medicineID: 'D06ID232435454',
    groupName: 'Generic Medicine',
    stockInQty: 350,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  },
  {
    key: '8',
    medicineName: 'Azithral 500 Tablet',
    medicineID: 'D06ID232435451',
    groupName: 'Generic Medicine',
    stockInQty: 20,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  },
  {
    key: '9',
    medicineName: 'Ascoril LS Syrup',
    medicineID: 'D06ID232435452',
    groupName: 'Diabetes',
    stockInQty: 85,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  },
  {
    key: '10',
    medicineName: 'Amoxyclav 625 Tablet',
    medicineID: 'D06ID232435457',
    groupName: 'Generic Medicine',
    stockInQty: 150,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  },
  {
    key: '11',
    medicineName: 'Allegra 120mg Tablet',
    medicineID: 'D06ID232435455',
    groupName: 'Diabetes ',
    stockInQty: 44,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  },

  {
    key: '12',
    medicineName: 'Ascoril LS Syrup',
    medicineID: 'D06ID232435452',
    groupName: 'Diabetes',
    stockInQty: 85,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  },
  {
    key: '13',
    medicineName: 'Amoxyclav 625 Tablet',
    medicineID: 'D06ID232435457',
    groupName: 'Generic Medicine',
    stockInQty: 150,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  },
  {
    key: '14',
    medicineName: 'Allegra 120mg Tablet',
    medicineID: 'D06ID232435455',
    groupName: 'Diabetes ',
    stockInQty: 44,
    action: (
      <Link to='/inventory/medicines/edit'>
        <span className='mr-2'>View Full Detail</span> <DoubleRightOutlined />
      </Link>
    )
  }
]
function ListOfMedicines() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const [, setFilteredInfo] = useState<Record<string, FilterValue | null>>({})
  const [, setSortedInfo] = useState<SorterResult<DataType>>({})

  const handleChangeTable: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter)
    setFilteredInfo(filters)
    setSortedInfo(sorter as SorterResult<DataType>)
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Medicine Name',
      dataIndex: 'medicineName',
      key: 'medicineName',

      sorter: (a, b) => a.medicineName.length - b.medicineName.length,

      ellipsis: true
    },
    {
      title: 'Medicine ID',
      dataIndex: 'medicineID',
      key: 'medicineID',
      ellipsis: true
    },
    {
      title: 'Group Name',
      dataIndex: 'groupName',
      key: 'groupName',

      sorter: (a, b) => a.groupName.length - b.groupName.length,

      ellipsis: true
    },
    {
      title: 'Stock In Qty',
      dataIndex: 'stockInQty',
      key: 'stockInQty',
      sorter: (a, b) => a.stockInQty - b.stockInQty,
      ellipsis: true
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      ellipsis: true
    }
  ]

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
            Inventory
            <RightOutlined className='mx-2' />
            <span className='text-[#1D242E]'>List of Medicines (298)</span>
          </Breadcrumb>
          <span className='text-[16px] text-[#1D242E] font-medium '>List of medicines available for sales.</span>
        </div>
        <div className=''>
          <Button type='primary' danger className='flex items-center'>
            <PlusOutlined />
            <span>Add New Item</span>
          </Button>
        </div>
      </div>
      <div className='flex justify-between mt-5 items-center'>
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
                placeholder='Search Medicine Inventory..'
                required
              />
            </div>
          </form>
        </div>
        <div className='h-full flex items-center'>
          <FilterOutlined style={{ fontSize: '16px' }} className='mr-2' />
          <Select
            defaultValue='Select Group'
            style={{ width: 220 }}
            onChange={handleChange}
            options={[
              { value: 'Generic Medicine', label: 'Generic Medicine' },
              { value: 'Diabetes ', label: 'Diabetes ' },
              { value: 'Select Group', label: '- Select Group -', disabled: true }
            ]}
          />
        </div>
      </div>
      <div className='mt-4'>
        <Table columns={columns} dataSource={data} onChange={handleChangeTable} />
      </div>
    </>
  )
}

export default ListOfMedicines
