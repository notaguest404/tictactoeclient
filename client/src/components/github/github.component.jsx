import React from "react";
import { ReactComponent as GithubIcon } from "../../assets/github-icon.svg";

import "./github.styles.scss";

const Github = () => {
  return (
    <div className="github" style={{marginTop:'100px'}}>
      <p>made by brunomatos & laylaandrade and adapted from quentingrchr</p>
      <a href="https://github.com/">
        <GithubIcon />
      </a>
    </div>
  );
};

export default Github;
