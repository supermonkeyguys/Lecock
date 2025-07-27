import React from 'react'
import { Layout } from 'antd'
import SideBar from '../SideBar/SideBar'
import { Outlet } from 'react-router-dom'

const { Content, Footer } = Layout

const AppLayout: React.FC = () => {
  const now = new Date()
  return (
    <Layout className="app-layout">
      <Layout.Sider className="app-sider">
        <SideBar />
      </Layout.Sider>
      <Layout className="app-layout-content">
        <Content className="app-content">
          <div className="app-content-inner">
            <React.Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </React.Suspense>
          </div>
        </Content>
        <Footer className="app-footer">
          <div className="footer-content">
            Hello , 今天是{now.getFullYear()}年{now.getMonth() + 1}月{now.getDate()}
            日,又是适合内卷的一天🤞😄👌
          </div>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default AppLayout
