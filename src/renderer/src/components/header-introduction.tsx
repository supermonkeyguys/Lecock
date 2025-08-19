import { Col, Typography } from 'antd'

const { Title, Text } = Typography

const HeaderIntroduction = ({ title, description }) => {
  return (
    <div className="header-container">
      <Col>
        <Title level={3} style={{margin:0}}>{title}</Title>
        <Text type="secondary">{description}</Text>
      </Col>
    </div>
  )
}

export default HeaderIntroduction
