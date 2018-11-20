import React, { Component } from 'react';

import "./index.scss";
import 'antd/dist/antd.css'
import Location from "../location";
import FixTop from "../fixtop";
import Category from "../category";
import Market from "../market";
import PromotionSub from "../promotionsub";
import Recommen from "../recommen";
import Service from "../service";
import GoodsList from "../goodslist";
import FootNav from "../footnav";
import Axios from "axios";

class Home extends React.Component{

    state = {
        list : []
    }

    loadMore = () => {

        Axios.get("http://47.100.98.54:9019/api/category/list").then(res => {


            this.setState({
                list : res.data.data
            })
        })
    }

    render(){
        return (
            <div className="App">
                {/*定部定位*/}
                <Location/>
                {/*吸顶盒*/}
                <FixTop/>
                {/*menu banner*/}
                <Category/>
                {/*套餐活动*/}
                <Market/>
                {/*商品活动*/}
                <PromotionSub/>
                {/*商家列表标题*/}
                <Recommen/>
                {/*商家服务选择*/}
                <Service/>
                {/*商家列表*/}
                <GoodsList list={this.state.list} loadMore={this.loadMore}/>
                {/*底部导航*/}
                <FootNav/>
            </div>
        )
    }
}

export default Home;