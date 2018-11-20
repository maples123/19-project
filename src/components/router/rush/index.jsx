import React, {Component} from 'react';
import "./index.scss";

class Rush extends Component {
    render() {
        return (
            <div className="rush">
                <div className="rush-nav">
                    <p>早餐</p>
                    <p>下午茶</p>
                    <p>晚餐</p>
                    <p>夜宵</p>
                </div>
                <ul className="rush-list">
                    <li>
                        <div className="shop">
                            <div className="shop-name">
                                <p>味乐美韩式炸鸡(顺盈店)</p>
                            </div>
                            <div className="shop-market">
                                <p>评价4.5分</p>
                                <p>|</p>
                                <p>配送费约¥2</p>
                            </div>
                        </div>
                        <div className="rush-food">
                            <img src={require("./img/1.webp")} alt=""/>
                            <div className="food-info">
                                <p>田园汉堡</p>
                                <div className="info-con">
                                    <div className="left">
                                        <span>仅剩10份</span>
                                        <div className="progress"></div>
                                        <div className="money">
                                            <span>￥</span>
                                            <span className="num">9.9</span>
                                            <span className="no-money">￥10.80</span>
                                        </div>
                                    </div>
                                    <p className="right">马上抢</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="shop">
                            <div className="shop-name">
                                <p>味乐美韩式炸鸡(顺盈店)</p>
                            </div>
                            <div className="shop-market">
                                <p>评价4.5分</p>
                                <p>|</p>
                                <p>配送费约¥2</p>
                            </div>
                        </div>
                        <div className="rush-food">
                            <img src={require("./img/1.webp")} alt=""/>
                            <div className="food-info">
                                <p>田园汉堡</p>
                                <div className="info-con">
                                    <div className="left">
                                        <span>仅剩10份</span>
                                        <div className="progress"></div>
                                        <div className="money">
                                            <span>￥</span>
                                            <span className="num">9.9</span>
                                            <span className="no-money">￥10.80</span>
                                        </div>
                                    </div>
                                    <p className="right">马上抢</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="shop">
                            <div className="shop-name">
                                <p>味乐美韩式炸鸡(顺盈店)</p>
                            </div>
                            <div className="shop-market">
                                <p>评价4.5分</p>
                                <p>|</p>
                                <p>配送费约¥2</p>
                            </div>
                        </div>
                        <div className="rush-food">
                            <img src={require("./img/1.webp")} alt=""/>
                            <div className="food-info">
                                <p>田园汉堡</p>
                                <div className="info-con">
                                    <div className="left">
                                        <span>仅剩10份</span>
                                        <div className="progress"></div>
                                        <div className="money">
                                            <span>￥</span>
                                            <span className="num">9.9</span>
                                            <span className="no-money">￥10.80</span>
                                        </div>
                                    </div>
                                    <p className="right">马上抢</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="shop">
                        <div className="shop-name">
                            <p>味乐美韩式炸鸡(顺盈店)</p>
                        </div>
                        <div className="shop-market">
                            <p>评价4.5分</p>
                            <p>|</p>
                            <p>配送费约¥2</p>
                        </div>
                    </div>
                    <div className="rush-food">
                        <img src={require("./img/1.webp")} alt=""/>
                        <div className="food-info">
                            <p>田园汉堡</p>
                            <div className="info-con">
                                <div className="left">
                                    <span>仅剩10份</span>
                                    <div className="progress"></div>
                                    <div className="money">
                                        <span>￥</span>
                                        <span className="num">9.9</span>
                                        <span className="no-money">￥10.80</span>
                                    </div>
                                </div>
                                <p className="right">马上抢</p>
                            </div>
                        </div>
                    </div>
                </li>
                </ul>
            </div>
        );
    }
}

export default Rush;