import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./index.scss";

class FootNav extends Component {
    render() {
        return (
            <div className="foot-nav">
                <ul>
                    <li>
                        <NavLink activeClassName="active" exact to="/">
                            <i className="iconfont icon-shouye"></i>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/find">
                            <i className="iconfont icon-faxian1"></i>
                            <span>发现</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                            <i className="iconfont icon-icon--copy1"></i>
                            <span>订单</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my">
                            <i className="iconfont icon-home"></i>
                            <span>我的</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default FootNav;