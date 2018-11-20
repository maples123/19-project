import React, {Component} from 'react';
import "./index.scss";

class Package extends Component {
    render() {
        return (
            <div className="package-page">
                {/*套餐导航*/}
                <div className="package-nav scroll-no">
                    <ul>
                        <li><span className="on">全部类别</span></li>
                        <li><span>简餐便当</span></li>
                        <li><span>传统美食</span></li>
                        <li><span>西式套餐</span></li>
                        <li><span>港粤风味</span></li>
                        <li><span>日韩料理</span></li>
                    </ul>
                </div>
                {/*套餐商品推荐*/}
                <div className="package-re">
                    {/*商品展示*/}
                    <div className="package-goods">
                        <img src={require("../../../static/img/market/3.webp")} alt=""/>
                        <div className="goods-info">
                            <h3>
                                <span className="name">长沙卢氏锡纸花甲粉(清远店)</span>
                                <p className="sell-info">
                                    <span>评分4.8</span>
                                    <i></i>
                                    <span>月售848</span>
                                </p>
                            </h3>
                            <span className="type">回头客多</span>
                        </div>
                    </div>
                    {/*商品列表*/}
                    <ul className="package-list">
                        <li>
                            <img src={require("../../../static/img/market/3.webp")} alt=""/>
                            <div className="item-info">
                                <div className="info-top">
                                    <h4 className="text">飘香花甲+娃娃菜+金针菇+粉丝+金针菇+粉丝</h4>
                                    <span>主要原料：花甲，金针菇，娃娃菜</span>
                                </div>
                                <div className="add">
                                    <div className="money">
                                        <b>￥</b>
                                        <span className="num">12.9</span>
                                        <span className="reduced">满25减2</span>
                                    </div>
                                    <span className="jia iconfont icon-jia"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/*更多*/}
                    <div className="more">
                        <span>展开更多套餐 2个</span>
                        <i className="iconfont icon-icon1"></i>
                    </div>
                </div>
                <div className="package-re">
                    {/*商品展示*/}
                    <div className="package-goods">
                        <img src={require("../../../static/img/market/3.webp")} alt=""/>
                        <div className="goods-info">
                            <h3>
                                <span className="name">长沙卢氏锡纸花甲粉(清远店)</span>
                                <p className="sell-info">
                                    <span>评分4.8</span>
                                    <i></i>
                                    <span>月售848</span>
                                </p>
                            </h3>
                            <span className="type">回头客多</span>
                        </div>
                    </div>
                    {/*商品列表*/}
                    <ul className="package-list">
                        <li>
                            <img src={require("../../../static/img/market/3.webp")} alt=""/>
                            <div className="item-info">
                                <div className="info-top">
                                    <h4 className="text">飘香花甲+娃娃菜+金针菇+粉丝+金针菇+粉丝</h4>
                                    <span>主要原料：花甲，金针菇，娃娃菜</span>
                                </div>
                                <div className="add">
                                    <div className="money">
                                        <b>￥</b>
                                        <span className="num">16</span>
                                        <span className="reduced">满25减2</span>
                                    </div>
                                    <span className="jia iconfont icon-jia"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/*更多*/}
                    <div className="more">
                        <span>展开更多套餐 2个</span>
                        <i className="iconfont icon-icon1"></i>
                    </div>
                </div>
                <div className="package-re">
                    {/*商品展示*/}
                    <div className="package-goods">
                        <img src={require("../../../static/img/market/3.webp")} alt=""/>
                        <div className="goods-info">
                            <h3>
                                <span className="name">长沙卢氏锡纸花甲粉(清远店)</span>
                                <p className="sell-info">
                                    <span>评分4.8</span>
                                    <i></i>
                                    <span>月售848</span>
                                </p>
                            </h3>
                            <span className="type">回头客多</span>
                        </div>
                    </div>
                    {/*商品列表*/}
                    <ul className="package-list">
                        <li>
                            <img src={require("../../../static/img/market/3.webp")} alt=""/>
                            <div className="item-info">
                                <div className="info-top">
                                    <h4 className="text">飘香花甲+娃娃菜+金针菇+粉丝+金针菇+粉丝</h4>
                                    <span>主要原料：花甲，金针菇，娃娃菜</span>
                                </div>
                                <div className="add">
                                    <div className="money">
                                        <b>￥</b>
                                        <span className="num">16</span>
                                        <span className="reduced">满25减2</span>
                                    </div>
                                    <span className="jia iconfont icon-jia"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/*更多*/}
                    <div className="more">
                        <span>展开更多套餐 2个</span>
                        <i className="iconfont icon-icon1"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Package;