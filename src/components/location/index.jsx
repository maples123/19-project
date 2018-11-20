import React, {Component} from 'react';
import "./index.scss";

import Axios  from "axios";

class Location extends Component {

   state = {
       city : ""
   }

    componentDidMount(){
        Axios.get("http://route.showapi.com/9-4",{
            params : {
                "showapi_appid" : "69212",
                "showapi_sign" : "4f4b8517650b4157b55909960607622e"
            }
        }).then(res => {
            const city = res.data.showapi_res_body.cityInfo.c3;

            this.setState({
                city,
            })
        })
    }

    render() {
        return (
            <div className="location">
                <div className="sub">
                    <span className="dingwei iconfont icon-dingwei"></span>
                    <span className="toponymy">{this.state.city || "正在定位中..."}</span>
                    <span className="copy iconfont icon-f11"></span>
                </div>
            </div>
        );
    }
}

export default Location;