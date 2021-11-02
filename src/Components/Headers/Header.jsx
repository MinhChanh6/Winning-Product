import React from 'react'
import { Button, Avatar, Badge } from 'antd';
import '../Contents/contents.css';
import {MenuIcon} from '../MenuSideBar/MenuData';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
const Header = ({toggleCollapsed, collapsed}) => {
    return (
        <>
            <Button className="antd-button" onClick={toggleCollapsed}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <div className="content-flex">
                <Button className="content-button"
                shape="round" 
                icon={<img src={MenuIcon.chrome} />} 
                size={'large'}>
                    Tool Drop Coming Soon
                </Button>
                <Button className="content-button" shape="round" icon={<img src={MenuIcon.plus} />} size={'large'}>
                    <span>Link to <span style={{fontWeight: 700}}>ElieEpress</span> </span>
                </Button>
                <Badge count={1}>
                    <Button 
                    shape="circle" 
                    className="noti-icon" 
                    icon={<img src={MenuIcon.noti} />} size={'large'} />
                </Badge>
                    <div className="user">
                    <Avatar size="large" icon={<img src={MenuIcon.avatar} />} />
                        <span>User01_10xdrop</span>
                    </div>
            </div>
        </>
    )
}

export default Header
