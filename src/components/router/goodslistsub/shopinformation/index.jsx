import React, {Component} from 'react';
import "./index.scss";

class ShopInformation extends Component {

    state = {
        info : {},
        promotion : []
    }


    componentWillReceiveProps(nextProps){

        this.setState({
            info : nextProps.shopInfo,
            promotion : nextProps.promotion
        })
    }

    render() {
        const info = this.state.info;
        const promotion = this.state.promotion;
        return (
            <div className="shop-information">
                <div className="info-top">
                    <h3 className="shop-name">
                        <span>{info.title}</span>
                        <i className="iconfont icon-nav-arraw-right"></i>
                    </h3>
                    <div className="sale-info">
                        <span>评价{info.averageScore}</span>
                        <span>月售{this.props.handleSale()}单</span>
                        <span>蜂鸟专送约{info.foodTime}分钟</span>
                    </div>
                </div>
                <div className="info-bot">
                    <div className="new-user">
                        <span className="number-one t8">首单</span>
                        <span className="pref">新用户下单立减17元(不与其它活动同享)</span>
                        <span className="pref-num">
                            {promotion.length}个优惠
                            <i className="iconfont icon-f11"></i>
                        </span>
                    </div>
                    <div className="promotion">
                        {
                            promotion.length > 0 && promotion.map((item,index) => {
                                return (
                                    <span key={index}>{item.detail}</span>
                                )
                            })
                        }
                    </div>
                    <p className="notice text">公告:{info.notice}</p>
                </div>
            </div>
        );
    }
}

export default ShopInformation;