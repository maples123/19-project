import React, {Component} from 'react';
import { Rate } from 'antd';//评分
import "./index.scss";

class PingFen extends Component {
    render() {
        return (
            <div className="ping-fen">
                <Rate disabled defaultValue={4.5} />
            </div>
        );
    }
}

export default PingFen;