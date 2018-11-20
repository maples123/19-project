import React, {Component} from 'react';
import "./index.scss";
import PingFen from "../../../../goodslist/pingfen";

class ShopEvaluate extends Component {
    render() {
        return (
            <div className="shop-evaluate">
                <div className="fraction">
                    4.5
                </div>
                <div className="shop-eval">
                    <p>商家评分</p>
                    <PingFen/>
                </div>
                <div className="taste">
                    <span>味道</span>
                    <span>4.5</span>
                </div>
                <div className="packing br">
                    <span>包装</span>
                    <span>4.5</span>
                </div>
                <div className="distribution">
                    <span>配送</span>
                    <span>4.5</span>
                </div>
            </div>
        );
    }
}

export default ShopEvaluate;