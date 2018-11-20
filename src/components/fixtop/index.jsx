import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./index.scss";

class FixTop extends Component {
    render() {
        return (
            <div className="fix-top">
                <Link to="/search">
                    <i className="sousou iconfont icon-sousuo"></i>
                    <span className="info">搜索饿了么商家、商品名称</span>
                </Link>
            </div>
        );
    }
}

export default FixTop;