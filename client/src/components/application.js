import React, {Component} from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined, AppstoreOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

class Login extends Component {

  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Perfil">
            <Menu.ItemGroup>
              <Menu.Item key="setting:1"><UserOutlined />Minha Conta</Menu.Item>
              <Menu.Item key="setting:2"><LogoutOutlined />Logout</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="app" icon={<AppstoreOutlined />}>
            Notificação
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Login;