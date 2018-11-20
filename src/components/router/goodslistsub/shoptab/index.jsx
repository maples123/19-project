import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./index.scss";

class ShopTab extends Component {
    render() {
        return (
            <div className="shop-tab">
                <ul>
                    <li><NavLink exact activeClassName="active" to="/goodslist:1/order">点餐</NavLink></li>
                    <li><NavLink to="/goodslist:2/evaluate">评价</NavLink></li>
                    <li><NavLink to="/goodslist:3/business">商家</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default ShopTab;