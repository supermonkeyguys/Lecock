import {
  ClockCircleOutlined,
  CreditCardOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import { lazy } from 'react'

const ClockIn = lazy(() => import('../pages/ClockIn/ClockIn'))
const DrawCard = lazy(() => import('../pages/DrawCrad/DrawCard'))
const Profile = lazy(() => import('../pages/Profile/Profile'))
const TeamMembers = lazy(() => import('../pages/TeamMembers/TeamMembers'))

export interface RouteConfig {
  key: string
  path: string
  element: React.ComponentType
  label: string
  icon: React.ReactNode
}

export const routes: RouteConfig[] = [
  {
    key: '1',
    path: '/clockin',
    element: ClockIn,
    label: '打卡',
    icon: <ClockCircleOutlined />
  },
  {
    key: '2',
    path: '/draw-card',
    element: DrawCard,
    label: '抽卡',
    icon: <CreditCardOutlined />
  },
  {
    key: '3',
    path: '/proflie',
    element: Profile,
    label: '个人中心',
    icon: <UserOutlined />
  },
  {
    key: '4',
    path: '/teammembers',
    element: TeamMembers,
    label: '团队成员',
    icon: <TeamOutlined />
  },
]
