import React from "react";
import Hero from "../../components/hero/hero.component";
import Github from "../../components/github/github.component";
import Header from "../../components/header"
import "./home.styles.scss";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="homePage">
        <Hero />
        <Github />
      </div>
    </div>
  );
};

export default HomePage;
