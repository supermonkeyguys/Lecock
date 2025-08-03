// ClockInHeatmap.tsx
import React from 'react'
import { Card, Space, Typography, Calendar, CalendarProps } from 'antd'
import dayjs from 'dayjs';
import '../../../components/CountDate/getDate'
import './ClockInHeatmap.css'

const { Title } = Typography

interface ClockInRecord {
  date: string
  duration: number
}
interface HeatmapCellProps {
  duration: number
}
interface MonthRowData {
  month: string
  [key: string]: string | number
}

// 模拟数据
const mockData: ClockInRecord[] = [
  { date: '2023-11-01', duration: 8 },
  { date: '2023-11-02', duration: 7.5 },
  { date: '2023-11-03', duration: 6 },
  { date: '2023-11-04', duration: 4 },
  { date: '2023-11-05', duration: 0 },
  { date: '2023-11-06', duration: 8 },
  { date: '2023-11-07', duration: 7 },
  { date: '2023-11-08', duration: 6.5 },
  { date: '2023-11-09', duration: 5 },
  { date: '2023-11-10', duration: 3 },
  { date: '2023-11-11', duration: 0 },
  { date: '2023-11-12', duration: 0 },
  { date: '2023-11-13', duration: 8 },
  { date: '2023-11-14', duration: 7.5 },
  { date: '2023-11-15', duration: 0 },
  { date: '2023-11-16', duration: 6 },
  { date: '2023-11-17', duration: 5.5 },
  { date: '2023-11-18', duration: 4 },
  { date: '2023-11-19', duration: 0 },
  { date: '2023-11-20', duration: 8 },
  { date: '2023-11-21', duration: 7 },
  { date: '2023-11-22', duration: 6 },
  { date: '2023-11-23', duration: 5 },
  { date: '2023-11-24', duration: 3 },
  { date: '2023-11-25', duration: 0 },
  { date: '2023-11-26', duration: 0 },
  { date: '2023-11-27', duration: 8 },
  { date: '2023-11-28', duration: 7.5 },
  { date: '2023-11-29', duration: 6.5 },
  { date: '2023-11-30', duration: 5 }
]
const getLevel = (duration:number): string => {
  if (duration === 0) return 'level-0';
  if (duration <= 2) return 'level-1';
  if (duration <= 4) return 'level-2';
  if (duration <= 6) return 'level-3';
  if (duration < 8) return 'level-4';
  return 'level-5';
}

const dateCellRender: CalendarProps<dayjs.Dayjs>['cellRender'] = (current,info) => {
  if (info.type !== 'date') {
    return info.originNode;
  }
  const dateStr = current.format('YYYY-MM-DD');
  const record = mockData.find(item => item.date === dateStr);
  const duration = record ? record.duration : 0;
  const level = getLevel(duration);

  return (
    <div className={`calendar-cell ${level}`}>
      <div className="cell-duration">
        {duration > 0 ? `${duration}h` : '-'}
      </div>
    </div>
  )
}

const ColorLegend: React.FC = () => {
  return (
    <div className="color-legend">
      <span className="legend-text">打卡时长:</span>
      <div className="legend-item">
        <div className="legend-color level-0"></div>
        <span className="legend-label">0h</span>
      </div>
      <div className="legend-item">
        <div className="legend-color level-1"></div>
        <span className="legend-label">1-2h</span>
      </div>
      <div className="legend-item">
        <div className="legend-color level-2"></div>
        <span className="legend-label">3-4h</span>
      </div>
      <div className="legend-item">
        <div className="legend-color level-3"></div>
        <span className="legend-label">5-6h</span>
      </div>
      <div className="legend-item">
        <div className="legend-color level-4"></div>
        <span className="legend-label">8h+</span>
      </div>
    </div>
  )
}

const RenderView: React.FC = () => {
  const months: { [key: string]: { [key: number]: number } } = {}

  mockData.forEach((item) => {
    const date = new Date(item.date)
    const month = date.getMonth() + 1
    const dayOfMonth = date.getDate()
    const monthKey = `${month}月`

    if (!months[monthKey]) {
      months[monthKey] = {}
    }
    months[monthKey][dayOfMonth] = item.duration
  })

  return (
    <div className="heatmap-calendar-container">
      <Calendar
        cellRender={dateCellRender}
        fullscreen={true}
      />
    </div>
  )
}

const ClockInHeatmap: React.FC = () => {
  return (
    <div className="clockin-heatmap-container">
      <Card className="clockin-heatmap">
        <Title level={3} className='record-title'>打卡热力图</Title>
        <Space direction="horizontal" size={120}>
          <RenderView />
        </Space>
        <ColorLegend />
      </Card>
    </div>
  )
}

export default ClockInHeatmap
