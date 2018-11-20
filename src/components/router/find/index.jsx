import React, {Component} from 'react';
import "./index.scss";

class Find extends Component {
    render() {
        return (
            <div className="find">
                <div className="find-video">
                    <div className="video">
                        <div className="border">
                            <video autoPlay muted src="https://app-builder-resource.oss-cn-shanghai.aliyuncs.com/prod/uploadckjn5re0ra.mp4"></video>
                            <div className="player-header">
                                <span>这!就是灌篮 决赛季开启！</span>
                                <span>00:30</span>
                            </div>
                            <div className="player-button">

                            </div>
                        </div>
                    </div>
                    <div className="bg">

                    </div>
                </div>
                <div className="aMap">

                </div>
            </div>
        );
    }
}

export default Find;