import React from "react";
import { ReactComponent as ReactAbnB } from "../images/airbnb.svg";
import { ReactComponent as Netflix } from "../images/netflix.svg";
import { ReactComponent as Coinbase } from "../images/Coinbase-Logo.wine.svg";
import  Instagram  from "../images/instagram.png";
function SocialNetworks() {
  return (
    <div className="social-container">
      <li className="intital-social">
        <ReactAbnB height={100} width={100} />
      </li>
      <li>
        <Coinbase height={100} width={100} />
      </li>
      <li>
        <Netflix height={100} width={100} />
      </li>
      <li>
        <Netflix height={100} width={100} />
      </li>
      <li>
        <img src = {Instagram} height={50} width={100} alt = ''/>
      </li>
      <li>
        <ReactAbnB height={100} width={100} />
      </li>
    </div>
  );
}

export default SocialNetworks;
