import { ClockCircleOutlined, MenuOutlined, StarFilled } from '@ant-design/icons'
import { Button, Card, Space, Typography } from 'antd'
import ClockInHeatmap from './ClockInHeatmap/ClockHeatmap'
import React, { useState } from 'react'
import './ClockIn.css'
import { useNavigate } from 'react-router'
import { useClockInStore } from '@renderer/store/clockinStore'

const { Title, Text } = Typography

const ClockIn: React.FC = () => {
  const { startClockIn, endClockIn, status, currentTime } = useClockInStore()
  const seconds = useClockInStore((s) => s.seconds)

  const formatTime = (seconds: number) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0')
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
    const s = String(seconds % 60).padStart(2, '0')
    return `${h}:${m}:${s}`
  }

  const navigate = useNavigate()

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
            <Text type="secondary">
              {status === 'idle' && '未开始打卡'}
              {status === 'started' && '打卡中...'}
              {status === 'saving' && '正在保存中...'}
              {status === 'saved' && '打卡完成'}
              {status === 'error' && '保存失败，请重试'}
            </Text>
          </Space>
          <div className="clockin-time">{formatTime(seconds)}</div>
          <Space direction="vertical" size={16}>
            <Button
              type="primary"
              size="large"
              className="clockin-button"
              onClick={() => {
                status === 'idle' ? startClockIn() : endClockIn()
                console.log(status)
              }}
              loading={status === 'saving'}
            >
              {status === 'idle' ? '开始打卡' : '结束打卡'}
            </Button>
            <div>
              <StarFilled className="clockin-star" />
              <Text>
                当前积分: <strong>0</strong>
              </Text>
            </div>
          </Space>
        </Card>
      </div>
      <ClockInHeatmap />
      <div className="clockin-bottom">
        <div>
          <Space direction="horizontal">
            <Card className="clockin-left" onClick={() => navigate('/clockin-record')}>
              <div className="hamburger-icon">
                <MenuOutlined />
              </div>
              <Title level={4}>打卡记录</Title>
            </Card>
          </Space>
        </div>
        <div>
          <Card className="clockin-right" onClick={() => navigate('/clcokin-rank')}>
            <Title level={4}>排行榜</Title>
          </Card>
        </div>
      </div>
    </>
  )
}

export default ClockIn
