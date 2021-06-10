import React, { Component } from 'react';
import Github from "../../components/github/github.component";
import Header from "../../components/header"
import "./account.styles.scss";
import {
  BorderlessTableOutlined,
  CrownOutlined,
  UserOutlined,
  MailOutlined,
  EnvironmentOutlined,
  SaveOutlined,
  LoadingOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { Row, Col, Form, Input, Button, Upload, message } from 'antd';
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import axios from 'axios';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class AccountPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      email: '',
      username: '',
      location: '',
      image: '',
      previewVisible: false,
      previewImage: '',
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
  }

componentDidMount() {
    this.getUser();
  }

  getUser() {
    const userId = Cookies.get('session')

    axios.get(`https://tictactoe-lb-web.herokuapp.com/${userId}`)
      .then(({data}) => {
        const item = data.results;
        const username = item[0].username
        const email = item[0].email
        const location = item[0].location
        const image = item[0].image

        this.setState ({
          user: item,
          username: username,
          email: email,
          location: location,
          image: image,
        });
      })
      .catch( err => {
        console.log('Error: ', err)
      })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleUpdate(e) {
    e.preventDefault();
    const userId = Cookies.get('session')
    const user = {
      username: this.state.username,
      email: this.state.email,
      location: this.state.location,
      image: this.state.image,
    };

    axios.put(`https://tictactoe-lb-web.herokuapp.com/${userId}`, user)
      .then(res => {
        window.location.reload(false);
      });
  }

  handleImage = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, image =>
        this.setState({
          image,
          loading: false,
        }),
      );
    }
  };

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      image: file.url || file.preview,
      previewVisible: true,
    });
  };


  render() {

    const { loading, image, previewVisible, previewImage, } = this.state;

    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    const formStyle= {
      width: '75%',
      backgroundColor: '#0097A7',
    }

    return (
      <div>
        <Header/>
        <div className="homePage">
          <Row>
            <Col>
              <div className="hero">
                <div className="card-container">
                  <span className="pro">PRO</span>
{/*                  <img
                    className="rounded"
                    style={{width: '300px', marginTop: '20px'}}
                    src={avatar}
                    alt="user"
                  />*/}
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://run.mocky.io/v3/d01c6f81-7fc5-4022-9998-ef55361ccd3a"
                    beforeUpload={beforeUpload}
                    onPreview={this.previewImage}
                    onChange={this.handleImage}
                  >
                    {image ? <img src={image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                  </Upload>
                  {/*<h2 style={{marginTop: '10px'}}>{name}</h2>
                  <h4>{email}</h4>
                  <h4>{location || "no location"}</h4>*/}
                  <Form>
                    <Form.Item>
                      <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      style={formStyle}
                      bordered={false}
                      size="large"
                      type="text"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                    </Form.Item>
                      <Form.Item>
                        <Input
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        style={formStyle}
                        bordered={false}
                        size="large"
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                      </Form.Item>
                      <Form.Item>
                          <Input
                          prefix={<EnvironmentOutlined className="site-form-item-icon" />}
                          style={formStyle}
                          bordered={false}
                          size="large"
                          type="text"
                          name="location"
                          value={this.state.location}
                          onChange={this.handleChange}
                        />
                    </Form.Item>
                  </Form>
                  <div style={{marginTop: '15px'}} className="buttons">
                      <Link to="/home">
                        <Button className="primary"><BorderlessTableOutlined style={{marginRight: '8px'}}/>
                          Play</Button>
                      </Link>
                    <Button className="primary ghost" onClick={this.handleUpdate}><SaveOutlined style={{marginRight: '8px'}}/>
                      Save
                    </Button>
                  </div>
                  <div className="skills">
                    <h4><CrownOutlined style={{marginRight: '8px'}}/>Skills</h4>
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
          <Github/>
        </div>
      </div>
    )
  }
}

export default AccountPage;
