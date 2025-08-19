import { CalendarOutlined } from '@ant-design/icons'
import { Calendar, Card, Popover } from 'antd'
import { useState } from 'react'

const CalendarPopover = () => {
  const date = new Date()
  const day = date.getDate()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const yearMonth = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`

  const [selectDate, setSelectDate] = useState(yearMonth)

  const handleSelect = (date) => {
    setSelectDate(date.format('YYYY-MM-DD'))
  }
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
              handleSelect(date)
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

export default CalendarPopover
