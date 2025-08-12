import {
  CheckCircleFilled,
  ClockCircleOutlined,
  MenuOutlined,
  RightOutlined,
  StarFilled,
  TrophyFilled
} from '@ant-design/icons'
import { Button, Card, Col, Row, Space, Typography } from 'antd'
import ClockInHeatmap from './ClockInHeatmap/ClockHeatmap'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useClockInStore } from '@renderer/store/clockinStore'
import './ClockIn.css'

const { Title, Text } = Typography

interface EndModalProps {
  duration: string
  price: number
  setEndClock: (a: boolean) => void
}

const EndModal: React.FC<EndModalProps> = ({ duration, price, setEndClock }) => {
  const [h, m] = duration.split(':').map(Number)
  const hour = h > 0 ? `${h}` : '0'
  const minute = m > 0 ? `${m}` : '0'
  return (
    <div className="modal-overlay">
      <div className="clockend-modal">
        <Space direction="vertical">
          <div className="clockend-head">
            <CheckCircleFilled className="clockin-icon" />
            <Title level={4}>打卡完成</Title>
          </div>
          <div className="reward">
            <Space direction="vertical">
              <Text type="secondary">
                本次打卡时长：
                <span className="duration">
                  <strong>
                    {hour}小时
                    {minute}分钟
                  </strong>
                </span>
              </Text>
              <Text type="secondary">
                获得积分：
                <span className="get-price">
                  <strong>+{Math.floor(price)}</strong>
                </span>
              </Text>
            </Space>
          </div>
          <Button type="primary" className="clockin-button" onClick={() => setEndClock(false)}>
            确定
          </Button>
        </Space>
      </div>
    </div>
  )
}

const ClockIn: React.FC = () => {
  const { startClockIn, endClockIn, status, records } = useClockInStore()
  const seconds = useClockInStore((s) => s.seconds)
  const [endClock, setEndClock] = useState(false)
  const [endDuration, setDuration] = useState<string>('00:00:00')
  const value = records.length > 0 ? (records[records.length - 1]?.price ?? 0) : 0

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
        {endClock && <EndModal duration={endDuration} price={value} setEndClock={setEndClock} />}
        <div className="clockin-header">
          <h1 className="clockin-title">打卡</h1>
          <div className="clockin-content">
            Hello , 今天是{year}年{mon}月{day}
            日,又是适合内卷的一天🤞😄👌
          </div>
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
              className={`clockin-button ${status === 'started' && 'clockend'}`}
              onClick={() => {
                status === 'idle' ? startClockIn() : endClockIn()
                if (status === 'started') {
                  setDuration(formatTime(seconds))
                  setEndClock(true)
                } else setEndClock(false)
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
        <ClockInHeatmap />
        <div className="clockin-bottom">
          <Card className="clockin-bottom-card" onClick={() => navigate('/clockin-record')}>
            <Row align={'middle'} gutter={16} justify="space-between">
              <Col flex="none">
                <div className="hamburger-icon">
                  <MenuOutlined />
                </div>
              </Col>
              <Col flex='auto'>
                <Space direction="vertical" size={4}>
                  <Title level={5} style={{ margin: 0 }}>
                    打卡记录
                  </Title>
                  <span style={{ fontSize: 12, color: '#999' }}>查看打卡历史记录</span>
                </Space>
              </Col>

              <Col>
                <RightOutlined style={{ fontSize: 16, color: '#ccc' , paddingLeft:140}} />
              </Col>
            </Row>
          </Card>
          <Card className="clockin-bottom-card" onClick={() => navigate('/clcokin-rank')}>
            <Row align={'middle'} gutter={16}>
              <Col flex="none">
                <div className="ranking-list">
                  <TrophyFilled />
                </div>
              </Col>
              <Col>
                <Space direction="vertical" size={4}>
                  <Title level={5} style={{ margin: 0 }}>
                    排行榜
                  </Title>
                  <span style={{ fontSize: 12, color: '#999' }}>查看团队打卡排名</span>
                </Space>
              </Col>

              <Col>
                <RightOutlined style={{ fontSize: 16, color: '#ccc', paddingLeft:140}} />
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </>
  )
}

export default ClockIn
