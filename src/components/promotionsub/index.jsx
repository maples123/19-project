import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Carousel } from 'antd';//走马灯

import Axios from "axios";

import "./index.scss";

class PromotionSub extends Component {

    state = {
        promoList : []
    }

    componentDidMount(){
        Axios.get("http://47.100.98.54:9019/api/promotion")
            .then(res => {
                // console.log(res.data.data)
                this.setState({
                    promoList : res.data.data
                })
            })
    }

    render() {


        return (
            <div className="show-banner">
                <Carousel autoplay>
                    {
                        this.state.promoList.length > 0 && this.state.promoList.map((item,index) => {

                            return (
                                <div key={index}>
                                    <Link to={"/promotion/sub:" + item.id}>
                                        <img src={item.img} alt=""/>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        );
    }
}

export default PromotionSub;