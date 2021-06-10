import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "../button/button.component";
import "./hero.styles.scss";
import logo from "../../assets/images/logo.png";

const session_name = Cookies.get('session_name')

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        <img src={logo} alt="Logo" style={{marginTop:'20px', width:'300px'}}/>
      </h1>
      <p>Welcome {session_name}</p>
      <p>Online multiplayer</p>

      <Link to="/room">
        <Button isPrimary content="Let's go !" />
      </Link>
    </div>
  );
};

export default Hero;
