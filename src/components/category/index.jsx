import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Carousel } from 'antd';//走马灯
import Axios from "axios";

import "./index.scss";

class Category extends Component {

    state = {
        category : []
    }

    componentDidMount(){

        Axios.get("http://47.100.98.54:9019/api/category").then(res => {
            this.setState({
                category : res.data.data
            })
        })
    }

    render() {
        return (
            <div className="category">
                <Carousel>
                    <div className="menu-banner">
                        {
                            this.state.category.length > 0 &&  this.state.category.map((item,index) => {
                                if(index >= 10){return false}
                                return (
                                    <Link to={"/category/list" + index} key={item.id}>
                                        <img src={item.img} alt={item.title}/>
                                        <span>{item.title}</span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className="menu-banner">
                        {
                            this.state.category.length > 0 &&  this.state.category.map((item,index) => {
                                if(index < 10){return false}
                                return (
                                    <Link to={"/category/list" + index} key={item.id}>
                                        <img src={item.img} alt={item.title}/>
                                        <span>{item.title}</span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Category;