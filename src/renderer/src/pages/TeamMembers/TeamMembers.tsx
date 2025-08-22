import HeaderIntroduction from '@renderer/components/header-introduction'
import './TeamMembers.css'
import { Button, Card, Col, Row, Typography } from 'antd'
import { groups } from './mockData'
import { StarFilled } from '@ant-design/icons'
import { useState } from 'react'

const { Title } = Typography

const colors = ['99, 102, 241', '245, 158, 11', '16, 185, 129', '236, 72, 153']
const grade = ['全部', '大一', '大二', '大三', '大四']

const TeamMembers = () => {
  const [active, setActive] = useState(0)

  const filterGroups = active === 0 ? groups : groups.filter((g, i) => active === g.id)

  return (
    <div className="teammembers-container">
      <HeaderIntroduction title={'团队成员'} description={'查看团队成员信息'} />
      <Row align={'middle'} justify={'start'} style={{ gap: 15 }}>
        {grade.map((g, i) => (
          <Button
            key={i}
            className={`grade-button ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            {g}
          </Button>
        ))}
      </Row>
      <div>
        {filterGroups.map((group, i) => (
          <div key={group.grade}>
            <div className="grade">
              <Row align={'middle'}>
                <div
                  className="grade-icon"
                  style={{ backgroundColor: `rgba(${colors[group.id - 1]})` }}
                >
                  {group.id}
                </div>
                <Title style={{ margin: 0 }} level={4}>
                  {group.grade} ({group.members.length}人)
                </Title>
              </Row>
            </div>
            <Row align={'middle'} justify={'start'} className="members-list">
              {group.members.map((m) => (
                <Card className="member-card" key={m.id.toString() + m.name}>
                  <Row justify={'space-between'}>
                    <Row align={'middle'}>
                      <img src={m.avatar} className="m-avatar" />
                      <div className="m-name">{m.name}</div>
                    </Row>
                    <Col>
                      <div className="score" style={{ color: 'rgba(245, 158, 11' }}>
                        <StarFilled /> {m.score}
                      </div>
                      <div className="sub">今日: {m.todayHours}h</div>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Row>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamMembers
