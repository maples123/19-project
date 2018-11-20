import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./index.scss";

class Market extends Component {
    render() {
        return (
            <div className="combo">
                <Link to="/package" className="left combo-show">
                    <h3>品质套餐</h3>
                    <span className="describe">搭配齐全吃得好</span>
                    <div className="rush">立即抢购 <b>></b></div>
                    <img src={require("../../static/img/market/1.webp")} alt=""/>
                </Link>
                <Link to="/rush" className="right combo-show">
                    <h3>品质套餐</h3>
                    <span className="describe">搭配齐全吃得好</span>
                    <div className="rush">立即抢购 <b>></b></div>
                    <img src={require("../../static/img/market/2.webp")} alt=""/>
                </Link>
            </div>
        );
    }
}

export default Market;