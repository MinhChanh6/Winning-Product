import React from 'react'
import './item.css';
import { Button  } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const Item = ({item}) => {

    const {url, type, title, cost , selling } = item;

    return (
        <div className="item">
            <div 
            className={type === 'Free+Shipping' && 'item-type item-red' ||
            type === 'Retail Price' && 'item-type  item-green' || 
            type === 'Funnel' && 'item-type item-blue'}
            >{type}</div>
            <Button 
            className="item-button"
            shape="circle" 
            size={'large'}
            icon={<PlusOutlined />} style={{color: "#FFFFFF"}}/>
            <div className="item-box">
                <img src={url} alt=""/>
            </div>
            <div className="item-content">
                <div className="item-title">{title}</div>
                <div className="item-price">
                    <span>Cost price: </span>
                    <span className="item-cost">{cost}$</span>
                </div>
                <div className="item-price">
                    <span>Selling price: </span>
                    <span className="item-selling">{selling}$</span>
                </div>
            </div>
        </div>
    )
}

export default Item
