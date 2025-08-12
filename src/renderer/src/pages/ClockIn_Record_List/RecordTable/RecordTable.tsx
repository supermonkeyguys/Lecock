import { ClockRecord } from '@renderer/store/type/recordStore'
import { Button, Card, Space, Table, Typography } from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
import './RecordTable.css'

const { Title } = Typography

const generateMockData = (count: number): ClockRecord[] => {
  const data: ClockRecord[] = []
  for (let i = 0; i < count; i++) {
    const randomDays = Math.floor(Math.random() * 10)
    const date = dayjs().subtract(randomDays, 'day').toDate()

    const startHour = 8 + Math.floor(Math.random() * 12)
    const startMinute = [0, 15, 30, 45][Math.floor(Math.random() * 4)]
    const startTime = dayjs(date).hour(startHour).minute(startMinute).toDate()

    const duration = 60 + Math.floor(Math.random() * 120)
    const endTime = dayjs(startTime).add(duration, 'minute').toDate()

    const price = 5 + Math.floor(Math.random() * 16)

    data.push({
      key: String(i + 1),
      date,
      startTime,
      endTime,
      duration,
      price
    })
  }

  return data
}

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
    render: (value: Date) => dayjs(value).format('YYYY-MM-DD'),
    sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
    key: 'startTime',
    render: (value: Date) => dayjs(value).format('HH:mm')
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
    key: 'endTime',
    render: (value: Date) => dayjs(value).format('HH:mm')
  },
  {
    title: '时长',
    dataIndex: 'duration',
    key: 'duration',
    sorter: (a, b) => (a.duration ?? 0) - (b.duration ?? 0)
  },
  {
    title: '获得积分',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => (a.price ?? 0) - (b.price ?? 0)
  }
]

const RecordTable: React.FC = () => {
  const [data, setData] = useState<ClockRecord[]>(generateMockData(25))
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 })

  const handleRefresh = () => {
    const newData = generateMockData(25)
    setData(newData)
    setPagination({ ...pagination, current: 1 })
  }

  return (
    <div className="record-list-table">
      <Card className='record-list-card'>
        <Space style={{ marginBottom: 16 }}>
          <Title level={4} style={{marginTop:0}}>打卡记录列表</Title>
          <Button type="primary" onClick={handleRefresh}>
            刷新数据
          </Button>
        </Space>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            current: pagination.current,
            pageSize: pagination.pageSize,
            showSizeChanger: true,
            pageSizeOptions: [10, 20, 50, 100],
            showTotal: (total) => `共 ${total} 条记录`,
            onChange: (page, pageSize) => {
              setPagination({ current: page, pageSize })
              console.log(`当前页：${page} , 每页：${pageSize}`)
            }
          }}
        />
      </Card>
    </div>
  )
}

export default RecordTable
