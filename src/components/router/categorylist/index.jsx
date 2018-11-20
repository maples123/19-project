import React, { Component } from 'react';
import "./index.scss";
import Service from "../../service";
import GoodsList from "../../goodslist";
import HeaderTitle from "../../../commen/headertlte";
import Axios from "axios";

class CategoryList extends React.Component{

    state = {
        list : [],
        cate : ['美食','甜品饮品','商超便利','预定早餐','果蔬生鲜','新店特惠','准时达','晚餐','汉堡薯条','包子粥店',
            '鲜花蛋糕','麻辣烫','川香菜','披萨意面','异国料理']
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        if(id){
            Axios.get("http://47.100.98.54:9019/api/category/list" + id).then(res => {
                // console.log(res.data.data);
                this.setState({
                    list : res.data.data
                })
            })
        }
    }

    getCate = () => {
        const id = this.props.match.params.id;

        return this.state.cate[id];
    }

    //滚动加载更多
    loadMore = () => {
        const id = this.props.match.params.id;
        const list = this.state.list;
        Axios.get("http://47.100.98.54:9019/api/category/list" + id).then(res => {

            this.setState({
                list : list.concat( list)
            })
        })
    }

    render(){
        return (
            <div className="category-list">
                {/*header*/}
                <div className="category-header">
                    {/*标题*/}
                    <HeaderTitle getCate={this.getCate()}/>
                    {/*滚动导航*/}
                    <div className="category-nav">
                        {/*横向滚动导航*/}
                        <div className="scroll-nav h-bg">
                            <ul>
                                <li><a className="on" href="/">全部</a></li>
                                <li><a href="/">简餐便当</a></li>
                                <li><a href="/">小吃炸串</a></li>
                                <li><a href="/">面食粥点</a></li>
                                <li><a href="/">地方菜系</a></li>
                                <li><a href="/">汉堡披萨</a></li>
                                <li><a href="/">香锅冒菜</a></li>
                                <li><a href="/">日韩料理</a></li>
                                <li><a href="/">轻食西餐</a></li>
                            </ul>
                        </div>
                        {/*下箭头*/}
                        <div className="category iconfont icon-icon1"></div>
                    </div>
                </div>
                {/*套餐*/}
                <div className="package">
                    <div className="title">
                        <h3>省心套餐</h3>
                        <span>更多 ></span>
                    </div>
                    <div className="goods-list">
                        <div className="goods">
                            <img src={require("../package/img/1.webp")} alt=""/>
                            <div className="goods-info">
                                <h3>锡纸黄金鱼蛋粉</h3>
                                <span className="good">28人好评</span>
                                <div className="that-money">
                                    <span className="money">¥12.9</span>
                                    <span className="no-money">¥16</span>
                                </div>
                            </div>
                        </div>
                        <div className="goods">
                            <img src={require("../package/img/2.webp")} alt=""/>
                            <div className="goods-info">
                                <h3>锡纸黄金鱼蛋粉</h3>
                                <span className="good">28人好评</span>
                                <div className="that-money">
                                    <span className="money">¥12.9</span>
                                    <span className="no-money">¥16</span>
                                </div>
                            </div>
                        </div>
                        <div className="goods">
                            <img src={require("../package/img/3.webp")} alt=""/>
                            <div className="goods-info">
                                <h3>锡纸黄金鱼蛋粉</h3>
                                <span className="good">28人好评</span>
                                <div className="that-money">
                                    <span className="money">¥12.9</span>
                                    <span className="no-money">¥16</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cate-service">
                    <Service/>
                </div>
                {
                    this.state.list.length > 0 && <GoodsList list={this.state.list} loadMore={this.loadMore}/>
                }

            </div>
        )
    }
}

export default CategoryList;