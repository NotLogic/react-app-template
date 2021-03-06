import React, {Component} from 'react'
import {Layout} from 'antd'
import SideMenu from '@/components/menu'

const {Header, Footer, Sider, Content} = Layout

export default class Common extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuData: []
    }
  }

  render () {
    return (
      <div style={{position: 'fixed',left: 0,right: 0,top: 0,bottom: 0}} >
        <Layout style={{ minHeight: '100vh'}}>
          <Sider style={{backgroundColor: '#001529' }}>
            <SideMenu menuData={this.state.menuData}></SideMenu>
          </Sider>
          <Layout>
            <Header style={{backgroundColor: '#fff',padding: '0 10px'}}>Header</Header>
            <Content style={{margin: '10px', border: '1px solid #999', backgroundColor: '#fff'}}>
              内容
            </Content>
            <Footer style={{backgroundColor: '#f5f7f9',textAlign: 'center' }}>Copyright © 深圳市阿斯蒂芬规划局版权所有</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}