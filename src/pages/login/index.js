import React, {Component} from 'react'
import {Card, Form, Icon, Input, Button, Checkbox, message} from 'antd'
import http from '@/plugins/axios'
import {deepcopy} from '@/libs/utils'
class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      rememberMe: true,
      loginLoading: false,
    }
    this.submitLogin = this.submitLogin.bind(this)
    this.updateRememberMe = this.updateRememberMe.bind(this)
  }

  submitLogin(e){
    e.preventDefault()
    var vm = this
    vm.props.form.validateFields((err, values) => {
      if(!err){

      }
    })
  }
  updateRememberMe(e){
    this.setState({
      rememberMe: e.target.checked
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <div className="login-wrapper">
        <div className="login-main">
          <Card
            title="登录"
          >
            <Form onSubmit={this.submitLogin}>
              <Form.Item>
                {getFieldDecorator('loginName', {
                  rules: [{required: true,message: '请输入您的账号'}]
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
                )}
              </Form.Item>
              <Form.Item>
                {
                  getFieldDecorator('loginPass', {
                    rules: [{required: true,message: '请输入您的密码'}]
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onPressEnter={this.submitLogin} placeholder="密码" type="password" />
                  )
                }
              </Form.Item>
              <Form.Item>
                <Checkbox checked={this.state.rememberMe} onChange={this.updateRememberMe}><span className="tips-text">记住密码</span></Checkbox>
              </Form.Item>
              <Button type="primary" loading={this.state.loginLoading} htmlType="submit" block>登录</Button>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}
const LoginForm = Form.create({name: 'login-form'})(Login)
export default LoginForm