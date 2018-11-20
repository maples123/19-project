import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./index.scss";
import PingFen from "./pingfen";

class GoodsList extends Component {

    state = {
        list : this.props.list
    }

    componentWillMount(){
        window.addEventListener("scroll",this.listLoadMore)
    }
    componentDidMount(){
        window.addEventListener("scroll",this.listLoadMore)
    }

    componentWillReceiveProps(nextProps){

        this.setState({
            list : nextProps.list
        })
    }
    //加载更多
    listLoadMore = () => {
        const more = this.refs.more;

        if(more){
            const top = more.getBoundingClientRect().top;
            const windowHeight = window.screen.height;

            if(top && top < windowHeight - 16){

                this.props.loadMore();
            }
        }
    };

    render() {

        return (
            <div className="goods-list">
                <ul>
                    {
                        this.state.list.length > 0 && this.state.list.map((item,index) => {

                            return (
                                <li key={index}>
                                    <Link to={"/goodslist" + index}>
                                        {/*商家信息*/}
                                        <div  className="merchant-info">
                                            <div className="loge">
                                                <img src={item.img} alt={item.title}/>
                                            </div>
                                            <div className="info">
                                            {/*信息头部*/}
                                            <div className="info-top">
                                            <h3 className="shop-name">{item.title}</h3>
                                            <i></i>
                                        </div>
                                            {/*信息中间*/}
                                            <div className="info-con">
                                            <div className="evaluate">
                                                <PingFen ratingScore={item.ratingScore}/>
                                                <div className="seals">
                                                    <span className="score">{item.ratingScore}</span>
                                                    <span>月售{item.monthSaleCount}单</span>
                                                </div>
                                            </div>
                                            <span className="cou t8">
                                                {item.labels.map((item,index) => {
                                                    return (<span key={index}>{item.name}</span>)
                                                })}
                                            </span>
                                        </div>
                                            {/*信息底部*/}
                                            <div className="info-bto">
                                                <div className="left">
                                                    <span>¥{item.startPrice}起送</span>
                                                    <span>配送费¥{item.ratingScore}</span>
                                                </div>
                                            <div className="right">
                                                <span>{
                                                    item.range > 1000 ? (item.range/1000).toFixed(2) + "km" : item.range + "m"
                                                    }
                                                </span>
                                                <span>{item.time}分钟</span>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </Link>
                                    {/*商家优惠*/}
                                    <div className="merchant-show">
                                            <div className="shop">
                                                <span className="type t8">药店</span>
                                                <p className="good-shop t9">
                                                    <i className="iconfont icon-koubeilogo"></i>
                                                    <span>口碑人气好店</span>
                                                </p>
                                            </div>
                                            <div className="show-top st">
                                                <div className="show-top-p">
                                                    {
                                                        item.promotion.map((item,index) => {
                                                            return (
                                                                <p className="shop-p" key={index}>
                                                                    <span className="left t9">{item.type.name}</span>
                                                                    <span className="con">{item.detail}</span>
                                                                </p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className="goods-show">
                                                    {item.promotion.length}个活动
                                                    <i className="iconfont icon-xiaotuziCduan_1" onClick={this.handleHenight}></i>
                                                </div>
                                            </div>
                                            <div className="show-bot st">
                                                <p className="shop-p">
                                                    <span className="left t9">特</span>
                                                    <span className="con">10元专区</span>
                                                </p>
                                            </div>
                                        </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div ref="more" className="more" style={{textAlign : "center"}}>加载更多...</div>
            </div>
        );
    }
}

export default GoodsList;