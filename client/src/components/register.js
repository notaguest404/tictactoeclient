import React, {Component} from 'react';
import { Form, Input, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import axios from 'axios';
import logo from '../assets/images/logo.png';
import { Row, Col } from 'antd';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      email:'',
      password:'',
      confirmPassword: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword) {

      const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      };
      axios.post('https://tictactoe-lb-web.herokuapp.com/register', user)
        .then(res => {
          if (res.data.code === 200) {
            this.props.history.push('/');
          } else {
            throw new Error(res.error);
          }
        })
        .catch( err => {
          console.log("Error: ", err);
        })
    } else {
      alert("Please make sure your passwords match");
    }
  }


  render() {
    return (
      <div className="loginPage">
        <Row gutter={48} style={{display:'flex', alignItems:'center', minHeight:'75vh'}}>
          <Col span={12} >
            <div>
              <div>
                <img src={logo} alt="Logo" style={{marginTop:'50px', width:'300px'}}/>
                <p>already has an account?</p>
                <p>really? >:(</p>
                <p>login here:</p>
              </div>
                <Link to="/login">
                  <Button className='background-unset register-button' htmlType="submit"
                          onClick={this.handleSubmit}
                          style={{
                            border:'none',
                            background: "#e6ff00",
                            color:'black',
                            width: '300px',
                            height: '50px',
                            marginBottom: '50px'
                          }}>
                    LOGIN!
                  </Button>
                </Link>
            </div>
          </Col>
          <Col span={12} >
            <Card title="LET'S GET STARTED!" bordered={false}
                  style={{
                    width: 450,
                    backgroundColor: '#e6ff00'
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
                    label={<label style={{ color: "white" }}>USERNAME</label>}
                    labelCol={{span:24}}
                    wrapperCol={{span:24}}
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input style={{ height:'50px'}}
                           type="username"
                           name="username"
                           value={this.state.username}
                           onChange={this.handleChange}/>
                  </Form.Item>

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
                    <Input style={{ height:'50px'}}
                           type="email"
                           name="email"
                           value={this.state.email}
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
                    <Input.Password style={{ height:'50px'}}
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}/>
                  </Form.Item>

                  <Form.Item
                    label={<label style={{ color: "white" }}>CONFIRM PASSWORD</label>}
                    labelCol={{span:24}}
                    wrapperCol={{span:24}}
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                    ]}
                  >
                    <Input.Password style={{ height:'50px'}}
                                    type="password"
                                    name="confirmPassword"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                    />
                  </Form.Item>
                  <Form.Item >
                    <Button className='background-unset' type='primary' htmlType="submit"
                            onClick={this.handleSubmit}
                            style={{
                              border:'none',
                              background: "#FF1659",
                              color:'black',
                              width: '300px',
                              height: '50px',
                              marginTop:'25px',
                              marginBottom:'25px'
                            }}>
                      REGISTER!
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

export default Register;
