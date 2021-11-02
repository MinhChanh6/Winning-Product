import React from 'react'
import {Select} from 'antd';
const { Option } = Select;



const Filter = ({label, optsSearchs}) => {
    const placeHolder = optsSearchs[0];
    return (
        <>
            <div className="search-title">{label}
            </div>
            <Select
            className="search-input"
            showSearch
            style={{ width: 200,
                boxShadow: "0px 8px 25px rgba(37, 107, 254, 0.15)"}}
            placeholder={placeHolder.type}
            optionFilterProp="children"
            >
                {
                    optsSearchs.map((optsSearch, index)=> {
                        const {type} = optsSearch;
                        return(
                            <Option 
                            className="search-option" 
                            value={index}
                            style={{color: type === "Free+Shipping" && "#B32020"
                            || type === "Funnel" && "#207DB3"
                            || type === "Retail Price" && "#309464"}}
                            >
                                {type}
                            </Option>
                        )
                    })
                }
            </Select>
        </>
    )
}

export default Filter
