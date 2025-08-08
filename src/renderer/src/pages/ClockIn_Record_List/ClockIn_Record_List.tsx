import { Card, Space, Typography } from 'antd'
import React from 'react'

const { Title, Text } = Typography

function ClockInRecordList(): React.JSX.Element {
  return (
    <div className="ClockInRecordList">
      <Space direction='horizontal' className='record-list-top'>
        <Space direction="vertical">
          <Title level={3}>打卡记录</Title>
          <Text>记录你的历史打卡记录</Text>
        </Space>
        <Text>返回打卡</Text>
      </Space>
      <Card></Card>
    </div>
  )
}

export default ClockInRecordList
