import React, {Component} from 'react';
import "./index.scss";
import Back from "./back";

class HeaderTitle extends Component {
    render() {
        return (
            <div className="page-title h-bg">
                <Back/>
                <h3 className="title">{this.props.getCate}</h3>
            </div>
        );
    }
}

export default HeaderTitle;