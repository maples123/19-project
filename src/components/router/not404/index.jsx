import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./index.scss";

class Not404 extends Component {
    render() {
        return (
            <div className="not">
                <div className="container">
                    <img src={require("./img/not404.png")} alt=""/>
                    <h2>页面好像被送餐员带走了...</h2>
                    <p>出现了这个问题，也许是因为您访问了不正确的链接地址，
                        但更可能是由于我们对程序做出了更新，没有及时通知您所造成的。
                    </p>
                    <div className="action">
                        <span>您现在可以：</span>
                        <Link to="/">返回首页</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Not404;