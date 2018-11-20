import React, {Component} from 'react';

class Back extends Component {
    handleBack = () =>{
        window.history.go(-1);
    }
    render() {
        return (
            <i onClick={this.handleBack} className="back iconfont icon-arrow-sl"></i>
        );
    }
}

export default Back;