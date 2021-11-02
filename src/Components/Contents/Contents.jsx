import React from 'react'
import { Input} from 'antd';
import './contents.css';
import Filter from '../Filter/Filter';
import List from '../List/List';
const { Search } = Input;
const optsSearchs= [
    {type: 'Newest First'},
    {type: 'Orders'},
    {type: 'Oldest first'}
]
const optsType = [
    { type: 'All'},
    { type: 'Free+Shipping'},
    { type: 'Funnel'},
    { type: 'Retail Price'}
]
const optsCategories = [
    { type: 'All'},
    { type: 'Art' },
    { type: 'Beauty & Health'},
    { type: 'Camping & Hking'},
    { type: 'Festive & Party Supplies'},
    { type: 'Home Improvement'},
    { type: 'Jewelry & Accessories'},
    { type: 'Light & Lighting'},
    { type: 'Luggage & Bags'},
    { type: 'Mother & Kids '},
    { type: 'Novelty & Special Use '},
    { type: 'Office & School Supplies'},
    { type: 'Pet Products'},
]
const optsRange = [
    {type: 'All'},
    {type: 'Last 7 days'},
    {type: 'Last 14 days'},
    {type: 'Previous Month'}
]
const Contents = () => {
    return (
        <div className="content">
            <div style={{display: 'flex', marginBottom: '50px'}}>
            <div className="search">
                <div className="search-title">Search by keyword
                </div>
                <Search className="search-input"
                placeholder="I'm looking for..." 
                enterButton 
                style={{
                borderRadius: '5px',
                boxShadow: "0px 8px 25px rgba(37, 107, 254, 0.15)"}}/>
            </div>
            <div className="filter">
                <Filter label='Sort by' optsSearchs={optsSearchs} />
            </div>
            <div className="filter">
                <Filter label='Category :' optsSearchs={optsCategories} />
            </div>
            <div className="filter">
                <Filter label='Offer type: ' optsSearchs={optsType} />
            </div>
            <div className="filter">
                <Filter label='Range' optsSearchs={optsRange} />
            </div>
        </div>
        <List/>
    </div>
    )
}

export default Contents
