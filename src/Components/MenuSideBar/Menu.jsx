import React  from 'react';
import { Menu  } from 'antd';
import {MenuIcon} from './MenuData';
const MenuSideBar = () => {

    const styleIcon = {
        objectFit: 'cover',
    }
    return (
        <div>
            <Menu
            className="antd-menu"
            defaultSelectedKeys={['7']}        
            >   
                <div className="menu-logo">
                    <img src={MenuIcon.logo} alt=""/>
                </div>
                <Menu.Item key="1" icon={<img src={MenuIcon.dashboard} style={styleIcon}/>}>
                <b></b>
                    <b></b>
                    Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<img src={MenuIcon.cart} style={styleIcon}/>}>
                <b></b>
                    <b></b>
                    Order
                </Menu.Item>
                <Menu.Item key="3" icon={<img src={MenuIcon.clipboard} style={styleIcon}/>} >
                <b></b>
                    <b></b>
                    Import List
                </Menu.Item>
                <Menu.Item key="4" icon={<img src={MenuIcon.shopping} style={styleIcon}/>} >
                <b></b>
                    <b></b>
                    Products Ecommerce 
                </Menu.Item>
                <Menu.Item key="5" icon={<img src={MenuIcon.chrome} style={styleIcon}/>} >
                <b></b>
                    <b></b>
                    Sites
                </Menu.Item>
                <Menu.Item key="6" icon={<img src={MenuIcon.setting} style={styleIcon}/>} >
                <b></b>
                    <b></b>
                    Settings
                </Menu.Item>
                <Menu.Item key="7" icon={<img src={MenuIcon.product} style={styleIcon}/>} >
                    <b></b>
                    <b></b>
                    Winning Products
                </Menu.Item>
                <Menu.Item key="8" icon={<img src={MenuIcon.exit} style={styleIcon}/>} >
                <b></b>
                    <b></b>
                    Log out
                </Menu.Item>
                <Menu.Item key="9">
                    Version 0.1.1
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default MenuSideBar
