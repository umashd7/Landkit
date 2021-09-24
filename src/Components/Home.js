import React from "react";
import Login from "./Login";
import image1 from "../images/illustration-2.png";
import SecondaryContent from "./SecondaryContent";
import SocialNetworks from "./SocialNetworks";
import {withRouter} from 'react-router-dom';

function Home(props) {
  const info1 = "Welcome to ";
  const info2 = "Develop anything.";
  const info3 =
    "Build a beautiful, modern website with flexible Bootstrap components built from scratch.";

    const handleDocumentation = ()=>{
        props.history.push('/documentation')
    }
    const handleViewPages = ()=>{
        props.history.push('/viewPages')
    }

  return (
    <>
      <div className="content-container">
        <div>
          <p className="info1"> {info1}</p>
          <span style={{ color: "#0d6efd", fontSize: "55px" }}> Landkit.</span>
          <br />
          <p className="info1"> {info2}</p>
          <p className="info3"> {info3}</p>
          <button className="content-btn-1" onClick={handleViewPages}>View All Pages &#x2192;</button>
          <button className="content-btn-2" onClick={handleDocumentation}>Documentation</button>
        </div>
        <div>
          <img src={image1} width="670" height="380" alt="" />
        </div>
      </div>
      <SecondaryContent />
      <SocialNetworks />
      <Login />
    </>
  );
}

export default withRouter(Home);
