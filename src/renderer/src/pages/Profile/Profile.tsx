import HeaderIntroduction from '@renderer/components/header-introduction'
import { Card, Col, Collapse, Row, Tag, Tooltip, Typography } from 'antd'
import avatarImg from './avatar.jpg'
import './Profile.css'
import { StarFilled, SunOutlined } from '@ant-design/icons'
import { ReactNode } from 'react'

const { Title, Text } = Typography
const { Panel } = Collapse

interface PanelHeaderProps {
  icon: ReactNode
  title: ReactNode
  description: ReactNode
  getTime: ReactNode
}

const panelHeaders: PanelHeaderProps[] = [
  {
    icon: <SunOutlined style={{ fontSize: 24 }} />,
    title: (
      <Title style={{ margin: 0 }} level={4}>
        早起鸟
      </Title>
    ),
    description: <Text type="secondary">连续三天在早上9点之前打卡</Text>,
    getTime: (
      <Tooltip title="精确时间：08:00">
        <span>2025-08-18</span>
      </Tooltip>
    )
  }
]

const Profile = () => {
  return (
    <div className="profile-container">
      <HeaderIntroduction title={'个人中心'} description={'管理你的个人资料和查看获得的称号'} />
      <Card className="page-card">
        <Row gutter={20}>
          <img className="profile-avatar" src={avatarImg} />
          <Col>
            <Title level={3} style={{ margin: 0, marginBottom: 10 }}>
              Popguys
            </Title>
            <Text type="secondary" style={{ fontSize: 16 }}>
              大二
            </Text>
            <Row style={{ marginTop: 10 }}>
              <StarFilled style={{ color: '#F59E0B', marginRight: 8, fontSize: 20 }} />
              <Text type="secondary" style={{ fontSize: 15 }}>
                当前积分: <strong style={{ color: 'black', fontSize: 15 }}>320</strong>
              </Text>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className="page-card">
        <Row justify={'space-between'} align={'middle'} style={{ marginBottom: 28 }}>
          <Title level={4} style={{ margin: 0 }}>
            我的称号
          </Title>
          <div className="nickname-count">已获得 5 个称号</div>
        </Row>

        <div className="nickname-container">
          <Collapse accordion>
            {panelHeaders.map((item, index) => (
              <Panel
                className="panel-item"
                showArrow={false}
                key={index}
                header={
                  <Row align={'middle'} style={{padding:0}}>
                    <div className="panel-icon">{item.icon}</div>
                    <div className="panel-text">
                      <div>{item.title}</div>
                      <div style={{ fontSize: 12 }}>{item.description}</div>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>{item.getTime}</div>
                  </Row>
                }
              >
                <p>获取条件： {item.description}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </Card>
    </div>
  )
}

export default Profile
