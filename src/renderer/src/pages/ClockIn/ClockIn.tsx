import { ClockCircleOutlined, StarFilled } from '@ant-design/icons'
import { Button, Card, Space, Typography } from 'antd'
import ClockInHeatmap from './ClockInHeatmap/ClockHeatmap'
import React from 'react'
import './ClockIn.css'

const { Title, Text } = Typography

const ClockIn: React.FC = () => {
  const date = new Date()
  const year = date.getFullYear()
  const mon = date.getMonth() + 1
  const day = date.getDate()

  return (
    <>
      <div className="clockin-container">
        <h1 className="clockin-title">打卡</h1>
        <div className="clockin-content">
          Hello , 今天是{year}年{mon}月{day}
          日,又是适合内卷的一天🤞😄👌
        </div>
        <Card className="clockin-card">
          <Space direction="vertical" size={12}>
            <ClockCircleOutlined className="clockin-icon" />
            <Title level={3}>今日打卡</Title>
            <Text type="secondary">未开始打卡</Text>
          </Space>
          <div className="clockin-time">00:00:00</div>
          <Space direction="vertical" size={16}>
            <Button type="primary" size="large" className="clockin-button">
              开始打卡
            </Button>
            <div>
              <StarFilled className="clockin-star" />
              <Text>当前积分:</Text>
            </div>
          </Space>
        </Card>
      </div>
      <ClockInHeatmap />
      <div className="clockin-bottom">
        <div>
          <Card className="clockin-left">
              <Title level={4}>打卡记录</Title>
          </Card>
        </div>
        <div>
          <Card className="clockin-right">
            <Title level={4}>排行榜</Title>
          </Card>
        </div>
      </div>
    </>
  )
}

export default ClockIn
