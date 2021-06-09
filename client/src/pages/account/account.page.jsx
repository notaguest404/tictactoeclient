import React from "react";
import Github from "../../components/github/github.component";
import Header from "../../components/header"
import "./account.styles.scss";
import avatar from "../../assets/images/avatar.jpg";
import { SettingOutlined, BorderlessTableOutlined, CrownOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

const AccountPage = () => {
  return (
    <div>
      <Header />
      <div className="homePage">
        <Row>
          <Col>
            <div className="hero">
              <div className="card-container">
                <span className="pro">PRO</span>
                <img
                  className="rounded"
                  style={{width:'300px',marginTop:'20px'}}
                  src={avatar}
                  alt="user"
                />
                <h2 style={{marginTop:'10px'}}>Nerd_funkeiro</h2>
                <h4>nerdfunkeiro2002@gmail.com</h4>
                <h4>Porto - PT</h4>
                <div style={{marginTop:'15px'}} className="buttons">
                  <button className="primary"><SettingOutlined style={{marginRight:'8px'}}/>
                    Settings
                  </button>
                  <button className="primary ghost"><BorderlessTableOutlined style={{marginRight:'8px'}} />
                    TicTacToe
                  </button>
                </div>
                <div className="skills">
                  <h4><CrownOutlined style={{marginRight:'8px'}}/>Skills</h4>
                  <ul>
                    <li>Best Gamer</li>
                    <li>Focus</li>
                    <li>Observation</li>
                    <li>TicTac King</li>
                    <li>Cape of Legends</li>
                    <li>TicTac Veteran</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Github />
      </div>
    </div>
  );
};

export default AccountPage;
