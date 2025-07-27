import React from 'react'
import { Menu } from 'antd'
import { routes } from '../routes';
import { useLocation, useNavigate } from 'react-router';
import './SideBar.css'

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChangePages = ({key }:{key:string}) => {
    const route = routes.find(route => route.key === key);
    if(route) {
      navigate(route.path);
    }
  }

  const getCurrentKey = () => {
    const currentRoute = routes.find(route => route.path === location.pathname);
    return currentRoute ? currentRoute.key : '1';
  }

  return (
    <div className="sidebar">
      <Menu 
        mode='inline'
        items={routes.map(route => ({
          key:route.key,
          icon:route.icon,
          label:route.label
        }))}
        selectedKeys={[getCurrentKey()]}
        onClick={handleChangePages}
        className='sidebar-menu'
      />
    </div>
  );
};

export default SideBar
