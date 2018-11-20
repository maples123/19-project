import React, {Component} from 'react';
import "./index.scss";
import Back from "../../../../commen/headertlte/back";

class HeaderBg extends Component {
    render() {
        return (
            <div className="header-bg">
                <div className="arrow">
                    <img src={this.props.bg} alt=""/>
                    <Back/>
                </div>
            </div>
        );
    }
}

export default HeaderBg;