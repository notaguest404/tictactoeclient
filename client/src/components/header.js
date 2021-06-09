import React, {Component} from 'react';
import { Menu } from 'antd';
import {HomeOutlined, UserOutlined, PlayCircleOutlined, LogoutOutlined, SettingOutlined} from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const { SubMenu } = Menu;

class Header extends Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div>
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal"
              style={{backgroundColor:'#07152b', color:"white"}}>
          <img src={logo} alt="Logo" style={{width:'50px'}}/>
          <Menu.Item
            key="home"
            icon={<HomeOutlined />}
          >
            Home
            <Link to="/home" />
          </Menu.Item>
          <Menu.Item
            key="account"
            icon={<UserOutlined />}
          >
            My account
            <Link to="/account" />
          </Menu.Item>
          <Menu.Item
            key="help"
            icon={<PlayCircleOutlined />}
          >
            How to play
            <Link to="/howtoplay" />
          </Menu.Item>
          <Menu.Item
            key="logout"
            icon={<LogoutOutlined />}
            style={{float:'right'}}>
            Logout
            <Link to="/" />
          </Menu.Item>
          <Menu.Item
            key="settings"
            icon={<SettingOutlined />}
            style={{float:'right'}}>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;

