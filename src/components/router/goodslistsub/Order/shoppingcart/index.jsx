import React, {Component} from 'react';
import "./index.scss";

class ShoppingCart extends Component {
    render() {
        return (
            <div className="shopping-cart">
                <div className="cart-pic">
                    <div className="pic">
                        <span className="gouwuche iconfont icon-gouwuche"></span>
                        <span className="num">1</span>
                    </div>
                </div>
                <div className="choose">
                    <span>未选购商品</span>
                </div>
                <div className="balance">
                    <a href="/">¥15起送</a>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;