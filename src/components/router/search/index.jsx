import React, { Component } from 'react';
import {Input } from "antd"
import "./index.scss";
import Back from "../../../commen/headertlte/back";



class Search extends React.Component{
    render(){
        const Search = Input.Search;
        return (
            <div className="search">
                <div className="search-header">
                    <Back/>
                    <Search
                        placeholder="请输入商家，商品名称"
                        enterButton
                    />
                </div>
                <div className="his-search">
                    <div className="history">
                        <h3>历史搜索</h3>
                        <span>X</span>
                    </div>
                    <ul>
                        <li>奶茶</li>
                    </ul>
                </div>
                <div className="hot-search">
                    <h3>热门搜索</h3>
                    <ul>
                        <li>奶茶</li>
                        <li>粥</li>
                        <li>鸡</li>
                        <li>鱼</li>
                        <li>烧烤</li>
                        <li>烤鸡</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Search;