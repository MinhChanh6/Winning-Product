import React from 'react'
import { Card, Col, Row } from 'antd';
import { ListData } from './ListData';
import Item from '../List/Item';
const rowStyles = {
    display: 'flex',
    flexWrap: 'wrap',
}

const colStyles = {
    flexBasis: 'calc(20% - 30px)',
    width: '100%',
    maxWidth: 'calc(20% - 30px)',
    marginRight: '30px',
    marginBottom: '60px',
}




const List = () => {
    return (
        <Row style={{...rowStyles}}>
            {
                    ListData.map((item, index) => {
                        return(
                            <>
                                <Col style={{...colStyles}}>
                                    <Item item={item} key={index} />
                                </Col>
                            </>
                        )
                    })
            }
        </Row>
    )
}

export default List
