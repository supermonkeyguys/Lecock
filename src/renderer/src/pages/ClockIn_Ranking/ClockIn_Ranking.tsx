import { ClockCircleOutlined, TrophyOutlined } from '@ant-design/icons'
import HeaderIntroduction from '@renderer/components/header-introduction'
import { Button, Card, Cascader, Col, Row, Segmented, Space, Table, Typography } from 'antd'
import './ClockIn_Ranking.css'
import { useState } from 'react'

const { Text, Title } = Typography

interface Option {
  value: string
  label: string
  children?: Option[]
}
const options1: Option[] = [
  {
    value: 'allGrade',
    label: '全部年级'
  },
  {
    value: 'freshman',
    label: '大一'
  },
  {
    value: 'sophomore',
    label: '大二'
  },
  {
    value: 'junior',
    label: '大三'
  },
  {
    value: 'senior',
    label: '大四'
  }
]
const options2: Option[] = [
  {
    value: 'thisWeek',
    label: '本周'
  },
  {
    value: 'thisMonth',
    label: '本月'
  },
  {
    value: 'all',
    label: '总榜'
  }
]

function generateRankData() {
  return [
    { key: '1', rank: 1, name: '张小明', grade: '大三', hours: 42.5, price: 1280 },
    { key: '2', rank: 2, name: '李华', grade: '大二', hours: 38.2, price: 1150 },
    { key: '3', rank: 3, name: '王芳', grade: '大四', hours: 35.7, price: 1080 },
    { key: '4', rank: 4, name: '赵强', grade: '大一', hours: 32.1, price: 980 },
    { key: '5', rank: 5, name: '陈静', grade: '大二', hours: 30.5, price: 920 },
    { key: '6', rank: 6, name: '刘伟', grade: '大三', hours: 28.9, price: 870 },
    { key: '7', rank: 7, name: '孙颖', grade: '大一', hours: 26.3, price: 790 },
    { key: '8', rank: 8, name: '周杰', grade: '大四', hours: 24.7, price: 750 },
    { key: '9', rank: 9, name: '吴婷', grade: '大二', hours: 22.5, price: 680 },
    { key: '10', rank: 10, name: '郑阳', grade: '大一', hours: 20.8, price: 620 }
  ]
}

const ClockInRanking = () => {
  const [isHours, setIsHours] = useState(true)

  const columns = [
    {
      title: '排名',
      dataIndex: 'rank',
      key: 'rank',
      render: (rank: number) => {
        const colors = ['#FFD700', '#C0C0C0', '#CD7F32']
        return (
          <span style={{ background: colors[rank - 1] }} className={rank <= 3 ? 'prev' : 'normal'}>
            {rank}
          </span>
        )
      }
    },
    {
      title: '成员',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年级',
      dataIndex: 'grade',
      key: 'garde'
    },
    {
      title: isHours ? '打卡时长' : '积分',
      dataIndex: isHours ? 'hours' : 'price',
      key: isHours ? 'hours' : 'price',
      render: (value: number) => (
        <span className={isHours ? 'hours' : 'price'}>
          {isHours ? `${value.toFixed(1)}小时` : `${value}分`}
        </span>
      )
    }
  ]

  return (
    <div className="page-container">
      <HeaderIntroduction title={'排行榜'} description={'查看团队打卡时长和积分排名'} />
      <Segmented
        className="router-changer"
        shape="round"
        options={[
          { label: '打卡时长', value: 'clockin', icon: <ClockCircleOutlined /> },
          { label: '积分排行', value: 'price', icon: <TrophyOutlined /> }
        ]}
        onChange={() => setIsHours(!isHours)}
      />
      <Card className="rank-filter" style={{ padding: '16px 24px' }}>
        <Row justify={'space-around'} gutter={24} align={'middle'}>
          <Col flex={'none'}>
            <Text type="secondary" style={{ display: 'block', marginBottom: 8 }}>
              年级筛选
            </Text>
            <Cascader options={options1} defaultValue={['allGrade']} allowClear={false} />
          </Col>
          <Col flex={'none'}>
            <Text type="secondary" style={{ display: 'block', marginBottom: 8 }}>
              统计周期
            </Text>
            <Cascader options={options2} defaultValue={['thisWeek']} allowClear={false} />
          </Col>
          <Col flex="none">
            <Button
              className='filter-button'
              type="primary"
              style={{ marginTop: 24}}
            >
              应用筛选
            </Button>
          </Col>
        </Row>
      </Card>

      <Card className="rank-list">
        <Title level={3} style={{ marginBottom: 20, marginTop: 0 }}>
          {isHours ? `打卡时长` : `积分`}排行榜
        </Title>
        <Table showHeader={true} columns={columns} dataSource={generateRankData()} />
      </Card>
    </div>
  )
}

export default ClockInRanking
