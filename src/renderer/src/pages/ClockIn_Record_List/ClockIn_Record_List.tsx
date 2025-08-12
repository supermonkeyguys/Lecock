import { Card, Col, Row, Typography } from 'antd'
import React, { useState } from 'react'
import RecordTable from './RecordTable/RecordTable'
import './ClockIn_Record_List.css'
import { ArrowLeftOutlined } from '@ant-design/icons'
import RecordFiter from './RecordFilter/RecordFilter'

const { Title, Text } = Typography

function ClockInRecordList(): React.JSX.Element {
  const [selectDate, setSelectDate] = useState(new Date().getDate())

  const handleSelect = (date) => {
    setSelectDate(date.format('YYYY-MM-DD'))
  }

  return (
    <>
      <div className="record-list-header record-card">
        <Row gutter={16} justify={'space-between'}>
          <Col flex="none">
            <Title level={3} type="secondary">
              打卡记录
            </Title>
            <Text type="secondary">记录你的历史打卡记录</Text>
          </Col>

          <Col flex="none">
            <ArrowLeftOutlined />
            <Text>返回打卡</Text>
          </Col>
        </Row>
      </div>
      <div className="record-list-filter">
        <Card className="record-list-card">
          <RecordFiter setSelectDate={handleSelect} selectDate={selectDate} />
        </Card>
      </div>
      <RecordTable />
      <div className="record-list-bottom">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  )
}

export default ClockInRecordList
