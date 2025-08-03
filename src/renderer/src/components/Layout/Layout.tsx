import React from 'react'
import { Layout } from 'antd'
import SideBar from '../SideBar/SideBar'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

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
      </Layout>
    </Layout>
  )
}

export default AppLayout
