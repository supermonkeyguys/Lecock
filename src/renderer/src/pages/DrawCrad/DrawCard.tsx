import {
  CheckOutlined,
  ClockCircleOutlined,
  DeliveredProcedureOutlined,
  GiftFilled,
  RedoOutlined,
  SmileOutlined,
  StarFilled,
  ThunderboltFilled
} from '@ant-design/icons'
import HeaderIntroduction from '@renderer/components/header-introduction'
import { Button, Card, Col, List, Row, Space, Typography } from 'antd'
import './DrawCard.css'
import { useState } from 'react'
import Img from './card.png'

const { Title, Text } = Typography

const records = [
  {
    id: 1,
    name: '张三',
    action: '使用了 加速',
    time: '2023-11-19 14:30',
    target: '对自己',
    icon: (
      <ThunderboltFilled
        className="card-icon"
        style={{ color: '#7c5dfa', backgroundColor: '#D6D7F5' }}
      />
    )
  },
  {
    id: 2,
    name: '李四',
    action: '使用了 加时',
    time: '2023-11-19 13:15',
    target: '对王五',
    icon: (
      <ClockCircleOutlined
        className="card-icon"
        style={{ color: '#22c55e', backgroundColor: '#C5E8DF' }}
      />
    )
  },
  {
    id: 3,
    name: '王五',
    action: '使用了 顺手牵羊',
    time: '2023-11-19 11:45',
    target: '对张三',
    icon: (
      <SmileOutlined
        className="card-icon"
        style={{ color: '#ec4899', backgroundColor: '#F1D1E4' }}
      />
    )
  }
]

const DrawCard = () => {
  const [isDraw, setIsDraw] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const [points,setPoints] = useState(320)

  const handleDrawCard = () => {
    setFlipped(!flipped)
    setPoints(points - 50);
  }

  return (
    <div className="drawcard-container">
      <HeaderIntroduction title={'抽卡'} description={'使用积分抽取卡牌，获取特殊效果'} />
      <Card className="page-card">
        <Row align={'middle'} justify={'space-between'}>
          <Row>
            <StarFilled className="point-icon" style={{ fontSize: 30 }} />
            <Col>
              <Title level={4} style={{ margin: 0 }}>
                当前积分
              </Title>
              <Text style={{ color: 'orange', fontSize: 20, fontWeight: 600 }}>{points}</Text>
            </Col>
          </Row>
          <Row>
            <Text type="secondary">每次抽卡消耗积分：</Text>
            <span>50积分</span>
          </Row>
        </Row>
      </Card>
      <Card className="page-card" style={{ textAlign: 'center' }}>
        <Title style={{ margin: 0, textAlign: 'center' }} level={4}>
          抽取卡片
        </Title>
        <div className="draw-card-container">
          <div className={`draw-card ${flipped ? 'flipped' : ''}`}>
            <div className="card-face card-front">?</div>
            <div className="card-face card-back">
              <img src={Img} style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          {!isDraw ? (
            <Space className="unused-card" direction="vertical">
              <Button
                className="drawcard-button"
                onClick={() => {
                  setIsDraw(!isDraw)
                  handleDrawCard()
                }}
                type="primary"
                icon={<GiftFilled />}
              >
                抽卡(消耗50积分)
              </Button>
            </Space>
          ) : (
            <Space className="unused-card" direction="vertical">
              <div className="btn-row">
                <Button
                  className="draw-fn"
                  icon={<CheckOutlined />}
                  style={{ backgroundColor: '#27C08D', color: 'white' }}
                >
                  使用
                </Button>
                <Button
                  className="draw-fn"
                  onClick={() => {
                    setIsDraw(!isDraw)
                    setFlipped(false)
                  }}
                  icon={<DeliveredProcedureOutlined />}
                  style={{ backgroundColor: '#A6ACB7', color: 'white' }}
                >
                  存入卡包
                </Button>
              </div>
              <Button
                className="drawcard-button"
                type="primary"
                onClick={() => {
                  handleDrawCard()
                  setTimeout(() => {
                    setFlipped(true)
                  }, 1000)
                }}
                icon={<RedoOutlined style={{ fontSize: 16, fontWeight: 700 }} />}
              >
                再抽一次
              </Button>
            </Space>
          )}
        </div>
      </Card>
      <Card className="page-card">
        <Row align={'middle'} justify={'space-between'} style={{ marginBottom: 10 }}>
          <Title style={{ margin: 0 }} level={4}>
            我的卡包
          </Title>
          <Text type="secondary">总共 {'5'} 张卡片</Text>
        </Row>
      </Card>
      <Card className="page-card">
        <Row align={'middle'} justify={'space-between'} style={{ marginBottom: 10 }}>
          <Title style={{ margin: 0 }} level={4}>
            最近使用记录
          </Title>
          <Text style={{ color: '#7275F2' }}>查看全部</Text>
        </Row>
        <List
          itemLayout="horizontal"
          dataSource={records}
          renderItem={(item) => (
            <Row className="usecard-record" align={'middle'} justify={'space-between'}>
              <Row>
                {item.icon}
                <div className="card-content">
                  <Title level={5} style={{ margin: 0 }}>
                    {item.name}
                    {item.action}
                  </Title>
                  <Text type="secondary">{item.time}</Text>
                </div>
              </Row>
              <Row>
                <Text type="secondary">{item.target}</Text>
              </Row>
            </Row>
          )}
        />
      </Card>
    </div>
  )
}

export default DrawCard
