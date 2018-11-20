import React, {Component} from 'react';
import {Route} from "react-router-dom";
import "./index.scss";
import ShopTab from "./shoptab";
import ShopInformation from "./shopinformation";
import HeaderBg from "./headerbg";
import ShopLoge from "./shoploge";
import Layout from "../../layout";
import {routes} from "../../../router/index";

import Axios from "axios";

class GoodsListSub extends Component {

    state = {
        list : {},
        shopInfo : {},
        promotion : [],
        product : [],
        recommedFood : [],
        routes : []
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        routes.map(item => {
            if(item.routes){
                this.setState({
                    routes : item.routes
                })
            }
        })

        Axios.get("http://47.100.98.54:9019/api/detail/" + id)
            .then(res => {
                // 请求的数据
                const data = res.data;
                //商家信息
                const shopInfo = {
                    title : data.title,
                    averageScore : data.averageScore,
                    notice : data.notice,
                    foodTime : data.foodTime
                }

                const recommedFood = data.product[0].list;

                this.setState({
                    list : data,
                    shopInfo : shopInfo,
                    promotion : data.promotion,
                    product : data.product,
                    recommedFood
                })
            })
    }
    //总的销售量
    handleSale = () => {
        const numSale = [];
        this.state.product.forEach((item,index) => {
            const num = [];
            item.list.forEach(listItem => {
                num.push(listItem.foodsale);
            });
            const count = num.reduce((next,prev) => next+prev)
            numSale.push(count);
        });
        if(numSale.length){
            const number = numSale.reduce((next,prev) => next+prev)
            return number;
        }
    }


    render() {
        return (
            <div className="goodslist-sub">
                {/*头部背景*/}
                <HeaderBg bg={this.state.list.img}/>
                {/*loge*/}
                <ShopLoge loge={this.state.list.img}/>
                {/*商店信息*/}
                <ShopInformation handleSale={this.handleSale} shopInfo={this.state.shopInfo} promotion={this.state.promotion}/>
                {/*选项*/}
                <ShopTab/>
                <Layout>

                    {
                        this.state.routes.map((item,index) => {

                            if(item.exact){

                                return (
                                    <Route
                                        exact
                                        key={index}
                                        path={item.path}
                                        render={() => {
                                            return (
                                                <item.component
                                                    product={this.state.product}
                                                    recommedFood={this.state.recommedFood}
                                                ></item.component>
                                            )
                                        }}
                                    ></Route>
                                )
                            }else{
                                return (
                                    <Route
                                        key={index}
                                        path={item.path}
                                        component={item.component}
                                    ></Route>
                                )
                            }
                        })
                    }
                    {/*<Route*/}
                        {/*exact*/}
                        {/*path={"/goodslist:id/order"}*/}
                        {/*render={() => {*/}
                            {/*return (<Order*/}
                                {/*product={this.state.product}*/}
                                {/*recommedFood={this.state.recommedFood}*/}
                            {/*></Order>)*/}
                        {/*}}*/}
                    {/*></Route>*/}
                    {/*<Route path={"/goodslist:id/evaluate"} component={Evaluate}></Route>*/}
                    {/*<Route path={"/goodslist:id/business"} component={Business}></Route>*/}
                </Layout>
            </div>
        );
    }
}

export default GoodsListSub;