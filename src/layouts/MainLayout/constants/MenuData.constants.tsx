import { SettingOutlined, LineChartOutlined, DropboxOutlined, LayoutOutlined } from '@ant-design/icons'
import { MenuItem } from '~/utils/util'
import { getItem } from '~/utils/util'
export const items: MenuItem[] = [
  getItem('Dashboard', '1', <LayoutOutlined />),
  getItem('Inventory', 'sub1', <DropboxOutlined />, [
    getItem('List of Medicines', 'List of Medicines'),
    getItem('Medicine Groups', 'Medicine Groups')
  ]),
  getItem('Reports', 'sub2', <LineChartOutlined />, [
    getItem('Sales Report', 'Sales Report'),
    getItem('Payments Report', 'Payments Report')
  ]),
  getItem('Application Settings', '2', <SettingOutlined />)
]
