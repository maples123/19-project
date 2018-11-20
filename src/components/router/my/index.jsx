import React, {Component} from 'react';
import {Link} from "react-router-dom";
import HeaderTitle from "../../../commen/headertlte";
import "./index.scss";
import FootNav from "../../footnav";


class My extends Component {
    render() {
        return (
            <div className="my">
                <HeaderTitle/>
                <div className="user h-bg">
                    <div className="avatar">
                        <img src={require("./img/download.png")} alt=""/>
                    </div>
                    <div className="profile">
                        <div className="log-reg">
                            <Link to="/user/login">登录</Link>
                            <span>/</span>
                            <Link to="/user/register">注册</Link>
                        </div>
                        <div className="log-after">
                            <span className="shou-ji iconfont icon-shouji"></span>
                            <span>登录后享受更多特权</span>
                        </div>
                    </div>
                    <Link to="/user/login" className="login iconfont icon-icon"></Link>
                </div>

                <div className="main-info">
                    <a href="/">
                        <span style={{color:"#ff9200"}} className="icon iconfont icon-qianbao1"></span>
                        <span>钱包</span>
                    </a>
                    <a href="/">
                        <span style={{color:"#ff522b"}} className="icon iconfont icon-hongbao"></span>
                        <span>红包</span>
                    </a>
                    <a href="/">
                        <span style={{color:"#3fc430"}} className="icon iconfont icon-jinbi"></span>
                        <span>金币</span>
                    </a>
                </div>

                <div className="cate-list">
                    <div className="item">
                        <a href="/" >
                            <span style={{color:"#00a6f1"}} className="left iconfont icon-dizhi"></span>
                            <p>
                                <span>我的地址</span>
                                <span className="iconfont icon-icon"></span>
                            </p>
                        </a>
                    </div>
                    <div className="item">
                        <a href="/" >
                            <span style={{color:"#ff522b"}} className="left iconfont icon-shangcheng2-lv"></span>
                            <p>
                                <span>金币商城</span>
                                <span className="iconfont icon-icon"></span>
                            </p>
                        </a>
                        <a href="/" >
                            <span style={{color:"#3fc430"}} className="left iconfont icon-libao"></span>
                            <p>
                                <span>分享拿10元现金</span>
                                <span className="iconfont icon-icon"></span>
                            </p>
                        </a>
                    </div>
                    <div className="item">
                        <a href="/" >
                            <span style={{color:"#00a6f1"}} className="left iconfont icon-kefu1"></span>
                            <p>
                                <span>我的客服</span>
                                <span className="iconfont icon-icon"></span>
                            </p>
                        </a>
                        <a href="/" >
                            <span style={{color:"#00a6f1"}} className="left iconfont icon-xiazai"></span>
                            <p>
                                <span>下载饿了么APP</span>
                                <span className="iconfont icon-icon"></span>
                            </p>
                        </a>
                    </div>
                </div>

                <FootNav/>
            </div>
        );
    }
}

export default My;