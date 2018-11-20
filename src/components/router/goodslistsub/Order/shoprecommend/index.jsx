import React, {Component} from 'react';
import "./index.scss";
import PriceInfo from "../../priceinfo";

class ShopRecommend extends Component {

    state = {
        recommendList : []
    }

    componentWillReceiveProps(nextProps){

        this.setState({
            recommendList : nextProps.recommendList
        })
    }

    render() {
        const recommendList = this.state.recommendList;

        return (
            <div className="shop-recommend">
                <h3 className="title">商家推荐</h3>
                <div className="recommend-list scroll-no">
                    <ul>
                        {
                            recommendList.length > 0 && recommendList.map((item,index) => {

                                return (
                                    <li key={index} ref="reList">
                                        <img src={item.img} alt={item.foodTitle}/>
                                        <div className="food-info">
                                            <p className="food-name text">{item.fooddescription || "配料丢失了"}</p>
                                            <p className="food-sales t9">月售{item.foodSale} 好评率{item.foodrating}%</p>
                                            <PriceInfo id={item.foodId} index={index} foodprice={item.foodprice}/>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ShopRecommend;