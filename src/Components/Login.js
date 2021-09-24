import React from "react";
import image1 from "../images/photo-2.jpg";
import Checked from "../images/checked.svg.png";

function Login() {
  const info1 = "The most useful resource";
  const info2 = "ever created for developers";
  const info3 =
    "Using Landkit to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.";
  return (
    <div className="content-container">
      <div className="card">
        <img src={image1} alt="Avatar" width={400} height={250} />
        <div className="container">
          <label>Name</label>
          <input className="input-field" type="text" />
          <label>Email</label>
          <input className="input-field" type="text" />
          <label>Password</label>
          <input className="input-field" type="text" />
          <br/>
          <button className ="sample-btn">Download a sample</button>
        </div>
      </div>
      <div className="social-info">
        <p className="social-info1"> {info1}</p>
        <p className="social-info2">{info2}</p>
        <p className="social-info3"> {info3} </p>
        <div className="checked-grid">
          <div>
            <img src={Checked} alt="" width={15} height={15} />
            <span style={{color :"#42ba96", marginLeft: "10px"}}> Lifetime updates</span>
          </div>
          <div>
            <img src={Checked} alt="" width={15} height={15} />
            <span style={{color :"#42ba96", marginLeft: "10px"}}> Tech support</span>
          </div>
          <div>
            <img src={Checked} alt="" width={15} height={15} />
            <span style={{color :"#42ba96", marginLeft: "10px"}}>Tons of assets</span>
          </div>
          <div>
            <img src={Checked} alt="" width={15} height={15} />
            <span style={{color :"#42ba96", marginLeft: "10px"}}>Integration ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
