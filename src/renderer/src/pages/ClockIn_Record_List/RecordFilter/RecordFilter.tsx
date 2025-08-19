import './RecordFilter.css'
import CalendarPopover from './CalendarPopover'
import { Button, InputNumber, Row, Space } from 'antd'
import { SearchOutlined, SyncOutlined } from '@ant-design/icons'

const RecordFiter = () => {
  return (
    <>
      <Row gutter={10} justify={'center'}>
        <Space>
          <CalendarPopover />
          至
          <CalendarPopover />
          <InputNumber
            placeholder="最小"
            controls={true}
            min={0}
            style={{
              backgroundColor: '#f5f5f5',
              borderRadius: 6,
              width: 180
            }}
          />
          至
          <InputNumber
            placeholder="最大"
            controls={true}
            min={0}
            style={{
              backgroundColor: '#f5f5f5',
              borderRadius: 6,
              width: 180
            }}
          />
          <Button>
            <SearchOutlined />
            搜索
          </Button>
          <Button>
            <SyncOutlined />
            重置
          </Button>
        </Space>
      </Row>
    </>
  )
}

export default RecordFiter
