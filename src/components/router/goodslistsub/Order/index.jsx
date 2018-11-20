import React, {Component} from 'react';
import ShopRecommend from "./shoprecommend";
import FoodContainer from "./foodcontainer";
import ShoppingCart from "./shoppingcart";

class Order extends Component {
    state = {
        product : [],
        recommendList : [],
        navList : [],
        shopList : [],
    }

    componentDidMount(){
        const product = this.props.product;
        const recommendList = this.props.recommedFood;
        const shopList = [];
        const navList = [];

        this.props.product.forEach(item => {
            navList.push(item.categoryName);
            shopList.push(item.list)
        });

        this.setState({
            product,
            navList,
            shopList,
            recommendList
        })
    }

    render() {

        return (
            <div className="Order">
                {/*食品推荐*/}
                <ShopRecommend recommendList={this.state.recommendList}/>
                {/*食品列表*/}
                <FoodContainer shopList={this.state.shopList} navList={this.state.navList}/>
                {/*购物车*/}
                <ShoppingCart/>
            </div>
        );
    }
}

export default Order;