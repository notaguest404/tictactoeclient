import React, {Component} from 'react';
import { Menu, Button } from 'antd';
import {HomeOutlined, UserOutlined, PlayCircleOutlined, LogoutOutlined, SettingOutlined} from '@ant-design/icons';
import { Link, Redirect } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Cookies from 'js-cookie';

const { SubMenu } = Menu;

class Header extends Component {
  state = {
    current: 'home',
    navigate: false
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  logout = () => {
    console.log("remover")
    Cookies.remove("session");
    Cookies.remove("session_name");
    this.setState({navigate: true});
  };

  render() {
    const { current } = this.state;

    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }
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
            <Button style={{float:'right'}} onClick={(e) => { this.logout(e)}}><LogoutOutlined />Logout</Button>
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

