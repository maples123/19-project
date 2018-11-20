import React, {Component} from 'react';
import PriceInfo from "../../priceinfo/";
import "./index.scss";

class FoodContainer extends Component {
    state = {
        list : [],
        foodList : []
    }

    componentWillReceiveProps(nextProps){


        this.setState({
            list : nextProps.navList,
            foodList : nextProps.shopList
        })
    }

    render() {
        const list = this.state.list;
        const foodList = this.state.foodList;
        return (
            <div className="fond-container">
                <ul>
                    {
                        list.length > 0 && list.map((item,index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
                <div className="food-list">
                    {
                        foodList.length > 0 && foodList.map((item,index) => {
                            return item.map((listItem,listIndex) => {

                                return (
                                    <dl className="food-item" key={listIndex}>
                                        <dt className="food-pic">
                                            <img src={listItem.img} alt={listItem.foodTitle}/>
                                        </dt>
                                        <dd className="food-info">
                                            <h4>{listItem.foodTitle}</h4>
                                            <p className="sales t9">
                                                <span>月售{listItem.foodSale}份</span>
                                                <span>好评率{listItem.foodrating}%</span>
                                            </p>
                                            <p className="bucking">
                                                <span className="mini">6.6折</span>
                                                <span>每单限1份优惠</span>
                                            </p>
                                            <PriceInfo id={listItem.foodId} index={listIndex} foodprice={listItem.foodprice}/>
                                        </dd>
                                    </dl>
                                )
                            })
                        })
                    }
                </div>
            </div>
        );
    }
}

export default FoodContainer;