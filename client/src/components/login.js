import React, {Component} from 'react';
import { Form, Input, Button, Card } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import logo from '../assets/images/logo.png';
import { Row, Col } from 'antd';
import {Link} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {

    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post('https://tictactoe-lb-web.herokuapp.com/login', user)
      .then(res => {
        if (res.data.code === 200) {
          this.props.history.push('/home');
        } else {
          throw new Error(res.error);
        }
      })
      .catch( err => {
        console.log("Error: ", err);
      })
  }


  render() {
    return (
      <div className="loginPage">
        <Row gutter={48} style={{display:'flex', alignItems:'center', minHeight:'75vh'}} justify="space-around">
          <Col span={12} >
            <div>
              <div>
                <img src={logo} alt="Logo" style={{marginTop:'50px', width:'300px'}}/>
                <p>not registered yet?</p>
                <p>really? >:(</p>
                <p>register here:</p>
              </div>
              <Link to="/register">
                <Button className='background-unset register-button' htmlType="submit"
                        style={{
                          border:'none',
                          background: "#FF1659",
                          color:'white',
                          width: '300px',
                          height: '50px',
                          marginBottom: '50px'
                        }}>
                  REGISTER!
                </Button>
              </Link>
            </div>
          </Col>
          <Col span={12}>
            <Card title="START" bordered={false}
                  style={{
                    width: 450,
                    backgroundColor: '#FF1659'
                  }}
                  bodyStyle={{
                    backgroundColor: '#7586a0',
                    display:'flex',
                    justifyContent:'center'
                  }}

            >
              <div style={{backgroundColor: '#7586a0', marginTop:'25px', width:'300px'}}>
                <Form
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                >
                  <Form.Item
                    label={<label style={{ color: "white" }}>EMAIL</label>}
                    labelCol={{span:24}}
                    wrapperCol={{span:24}}
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your email!',
                      },
                    ]}
                  >
                    <Input
                      name="email"
                      value={this.state.email}
                      style={{ height:'50px'}}
                      onChange={this.handleChange}/>
                  </Form.Item>

                  <Form.Item
                    label={<label style={{ color: "white" }}>PASSWORD</label>}
                    labelCol={{span:24}}
                    wrapperCol={{span:24}}
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                  >
                    <Input.Password
                      name="password"
                      value={this.state.password}
                      style={{ height:'50px'}}
                      onChange={this.handleChange}/>
                  </Form.Item>
                  <Form.Item >
                    <Button className='background-unset' type='primary' htmlType="submit"
                            onClick={this.handleSubmit}
                            style={{
                              border:'none',
                              background: "#e6ff00",
                              color:'black',
                              width: '300px',
                              height: '50px',
                              marginTop:'25px',
                              marginBottom:'25px'
                            }}>
                      LOGIN!
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Login;
