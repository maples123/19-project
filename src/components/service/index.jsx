import React, {Component} from 'react';
import "./index.scss";

class Service extends Component {
    render() {
        return (
            <div className="service">
                <ul>
                    <li>综合排序<i className="iconfont icon-f11"></i></li>
                    <li>距离最近</li>
                    <li>品质联盟</li>
                    <li>筛选<i className="iconfont icon-guolv"></i></li>
                </ul>
            </div>
        );
    }
}

export default Service;