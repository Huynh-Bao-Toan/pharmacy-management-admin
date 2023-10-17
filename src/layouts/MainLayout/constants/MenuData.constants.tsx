import { SettingOutlined, LineChartOutlined, DropboxOutlined, LayoutOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { MenuItem } from '~/utils/util'
import { getItem } from '~/utils/util'
export const items: MenuItem[] = [
  getItem(<Link to='/dashboard'>Dashboard</Link>, '1', <LayoutOutlined />),
  getItem(<Link to='/inventory'>Inventory</Link>, 'sub1', <DropboxOutlined />, [
    getItem(<Link to='/inventory/list-of-medicines'>List of Medicines</Link>, 'List of Medicines'),
    getItem(<Link to='/inventory/medicine-groups'>Medicine Groups</Link>, 'Medicine Groups')
  ]),
  getItem('Reports', 'sub2', <LineChartOutlined />, [
    getItem('Sales Report', 'Sales Report'),
    getItem('Payments Report', 'Payments Report')
  ]),
  getItem('Application Settings', '2', <SettingOutlined />)
]
