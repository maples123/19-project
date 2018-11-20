import React, {Component} from 'react';
import "./index.scss";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import HeaderTitle from "../../../commen/headertlte";

const FormItem = Form.Item;

class Register extends Component {
    constructor(){
        super();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div className="register">
                <HeaderTitle/>
                <div className="login-container">
                    <div className="shop-loge">
                        <img src={require("./img/login.png")} alt=""/>
                    </div>
                    <div className="login-form">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {/*{getFieldDecorator('userName', {*/}
                                {/*rules: [{ required: true, message: 'Please input your username!' }],*/}
                                {/*})(*/}
                                {/*<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />*/}
                                {/*)}*/}
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号" />
                            </FormItem>
                            <FormItem>
                                {/*{getFieldDecorator('password', {*/}
                                {/*rules: [{ required: true, message: 'Please input your Password!' }],*/}
                                {/*})(*/}
                                {/*<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />*/}
                                {/*)}*/}
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            </FormItem>
                            <FormItem>
                                {/*{getFieldDecorator('password', {*/}
                                {/*rules: [{ required: true, message: 'Please input your Password!' }],*/}
                                {/*})(*/}
                                {/*<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />*/}
                                {/*)}*/}
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="确认密码" />
                            </FormItem>
                            <FormItem>
                                {/*{getFieldDecorator('remember', {*/}
                                {/*valuePropName: 'checked',*/}
                                {/*initialValue: true,*/}
                                {/*})(*/}
                                {/*<Checkbox>Remember me</Checkbox>*/}
                                {/*/!*)}*!/*/}
                                {/*<Checkbox>Remember me</Checkbox>*/}
                                {/*<a className="login-form-forgot" href="">Forgot password</a>*/}
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    注册
                                </Button>
                                {/*Or <a href="">register now!</a>*/}
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Register);

export default Register;