import React, {Component} from 'react';
import "./index.scss";



class AddSub extends Component {

    render(){
        return (
            <div
                className="add-sub fl"
                style={{width:(this.props.num <= 0 ? ".44rem" : "1.3998rem")}}
            >
                <span
                    onClick={this.props.handleReduce}
                    className="iconfont icon-comiisjiahao"
                ></span>
                <span className="num">{this.props.num}</span>
                <span
                    onClick={this.props.handleAdd}
                    className="iconfont icon-jian"
                ></span>
            </div>
        );
    }
}

export default AddSub;