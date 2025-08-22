import './RecordFilter.css'
import CalendarPopover from './CalendarPopover'
import { Button, InputNumber, Row, Space } from 'antd'
import { SearchOutlined, SyncOutlined } from '@ant-design/icons'

const RecordFiter = ({ staDay, endDay }) => {
  return (
    <>
      <Row gutter={10} justify={'center'} wrap={true}>
        <Space wrap={true}>
          <CalendarPopover 
            onChange={(date) => staDay(date)}
          />
          至
          <CalendarPopover 
            onChange={(date) => endDay(date)}
          />
          <InputNumber
            placeholder="最小积分"
            controls={true}
            min={0}
            style={{
              backgroundColor: '#F3F4F6',
              width: 160
            }}
          />
          至
          <InputNumber
            placeholder="最大积分"
            controls={true}
            min={0}
            style={{
              backgroundColor: '#F3F4F6',
              width: 160
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
