import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import RecordTable from './RecordTable/RecordTable'
import {
  ArrowLeftOutlined,
  ClockCircleFilled,
  LineChartOutlined,
  StarFilled
} from '@ant-design/icons'
import RecordFiter from './RecordFilter/RecordFilter'
import './ClockIn_Record_List.css'
import { useNavigate } from 'react-router'

const { Title, Text } = Typography

function ClockInRecordList(): React.JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <div className="record-list-header record-card">
        <Row gutter={16} justify={'space-between'}>
          <Col flex="none">
            <Title level={3} type="secondary" style={{margin:0}}>
              打卡记录
            </Title>
            <Text type="secondary" >记录你的历史打卡记录</Text>
          </Col>
          <Col className='backto-clockin'>
            <ArrowLeftOutlined />
            <Text onClick={() => navigate('/clockin')} style={{cursor:'pointer'}}>返回打卡</Text>
          </Col>
        </Row>
      </div>
      <div className="record-list-filter">
        <Card className="record-list-card">
          <RecordFiter />
        </Card>
      </div>
      <RecordTable />

      <Row className="record-list-bottom" justify={'space-between'}>
        <Card className="bottom-card">
          <Row justify="center">
            <div className="clock-icon">
              <ClockCircleFilled />
            </div>
            <Col style={{ marginLeft: 10 }}>
              <Text type="secondary">本月总打卡时长</Text>
              <Title level={4} style={{ margin: 0 }}>
                100小时
              </Title>
            </Col>
          </Row>
        </Card>
        <Card className="bottom-card">
          <Row justify={'center'}>
            <div className="linechart-icon">
              <LineChartOutlined />
            </div>
            <Col style={{ marginLeft: 10 }}>
              <Text type="secondary">日均打卡时长</Text>
              <Title level={4} style={{ margin: 0 }}>
                3小时
              </Title>
            </Col>
          </Row>
        </Card>
        <Card className="bottom-card">
          <Row justify={'space-between'}>
            <div className="star-icon">
              <StarFilled />
            </div>
            <Col style={{ marginLeft: 10 }}>
              <Text type="secondary">本月获得积分</Text>
              <Title level={4} style={{ margin: 0 }}>
                323积分
              </Title>
            </Col>
          </Row>
        </Card>
      </Row>
    </>
  )
}

export default ClockInRecordList
