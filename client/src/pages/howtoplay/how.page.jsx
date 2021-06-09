import React from "react";
import Github from "../../components/github/github.component";
import Header from "../../components/header"
import "./how.styles.scss";
import avatar from "../../assets/images/avatar.jpg";
import { SettingOutlined } from '@ant-design/icons';

const HowPage = () => {

  const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );

  return (
    <div>
      <Header />
      <div className="homePage">
        <div className="hero">
          <div className="App">
            <p style={{color:'white', fontSize:'70px', marginTop:'85px'}}>How to play TicTacToe?</p>
            <YoutubeEmbed embedId="3qzcAMShotQ" />
          </div>
        </div>
        <Github />
      </div>
    </div>
  );
};

export default HowPage;
