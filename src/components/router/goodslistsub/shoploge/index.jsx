import React, {Component} from 'react';
import "./index.scss";

class ShopLoge extends Component {
    render() {
        return (
            <div className="shop-loge">
                <img src={this.props.loge} alt=""/>
            </div>
        );
    }
}

export default ShopLoge;