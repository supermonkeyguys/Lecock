import { CalendarOutlined } from '@ant-design/icons'
import { Calendar, Card, Popover } from 'antd'
import { useState } from 'react'
import './RecordFilter.css'

const RecordFiter = ({ selectDate, setSelectDate }) => {
  const [open, setOpen] = useState(false)
  return (
    <Popover
      className="calendar-filter"
      content={
        <Card style={{ width: 300 }}>
          <Calendar
            fullscreen={false}
            showWeek={true}
            onSelect={(date) => {
              setSelectDate(date)
              setOpen(false)
            }}
          />
        </Card>
      }
      trigger="click"
      open={open}
      onOpenChange={(visible) => setOpen(visible)}
    >
      {selectDate}
      <CalendarOutlined />
    </Popover>
  )
}

export default RecordFiter
