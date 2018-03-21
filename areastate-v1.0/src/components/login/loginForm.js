//登陆表单组件
import React from 'react';
import {Form,Input,Button,Row,Col} from 'antd';

const FormItem = Form.Item;

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login(){

    }

    render(){
        const { getFieldProps } = this.props.form;

        return(
            <Row>
                <Col span={8}>
                </Col>
                <Col span={8}>
                    <Form inline="true" onSubmit={this.login}>
                        <FormItem label="请输入登陆账号">
                            <Input type="text" {...getFieldProps('loginNo')} defaultValue=""/>
                        </FormItem>
                        <FormItem label="请输入登陆密码">
                            <Input type="password" {...getFieldProps('password')} id="password" defaultValue=""/>
                        </FormItem>
                        <Button htmlType="submit">登陆</Button>
                    </Form>
                </Col>
                <Col span={8}>

                </Col>
            </Row>
        );
    }
}

export default LoginForm = Form.create({})(LoginForm);