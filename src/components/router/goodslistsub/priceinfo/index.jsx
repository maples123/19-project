import React, {Component} from 'react';
import AddSub from "../addsub";
import "./index.scss";

import {connect} from "react-redux";
import {addCart,reduceCart} from "../../../../actions/cart";

@connect(
    state => ({shop:state}),//获取初始值
    {addCart,reduceCart}//触发函数
)

class PriceInfo extends Component {

    state = {
        num : 0
    };

    componentWillReceiveProps(nextProps){

        let cartCount = nextProps.shop.cartCount;


        this.setState({
            num : cartCount
        })
    }
    //添加商品
    handleAdd = () => {
        this.setState({
            num : this.state.num
        })
        return this.props.reduceCart(this.state.num);
    }
    //减少商品
    handleReduce = () => {
        this.setState({
            num : this.state.num
        })
        return this.props.addCart(this.state.num);
    }

    render() {

        return (
            <div className="price-info">
                <div className="price">
                    <p><b>￥</b>{this.props.foodprice}</p>
                </div>
                <AddSub
                    handleAdd={this.handleAdd}
                    handleReduce={this.handleReduce}
                    num={this.state.num}
                />
            </div>
        );
    }
}

export default PriceInfo;