import React from "react";
import "../Components/css/documentation.css";
import Image1 from "../images/dashkit.jpg";
import { withRouter } from "react-router-dom";

function Documentation(props) {
  const info1 = "We have lots of experience";
  const info2 = "building Bootstrap themes.";
  const info3 =
    "We've built well over a dozen Bootstrap themes and sold tens of thousands of copies.";
  const info4 = "Bootstrap users since the beginning";
  const info5 =
    "We've been developing with Bootstrap since it was publicly released in 2011.";

    const handleback =()=>{
        props.history.push('/')
    }
  return (
    <>
      <div className="doc-content-container">
        <div>
          <p className="social-info1"> {info1}</p>
          <p className="doc-info-2"> {info2}</p>
          <p className="doc-info-3"> {info3}</p>
          <div className="doc-container">
            <svg
              width="72"
              height="72"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z" />
                <path
                  d="M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z"
                  fill="#335EEA"
                />
                <path
                  d="M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z"
                  fill="#335EEA"
                  opacity=".3"
                />
              </g>
            </svg>
            <div>
              <p className="doc-info4">{info4}</p>
              <p className="doc-info-3">{info5}</p>
            </div>
          </div>
          <div className="doc-container">
            <svg
              width="72"
              height="72"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z" />
                <path
                  d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z"
                  fill="#335EEA"
                />
                <rect
                  fill="#335EEA"
                  opacity=".3"
                  transform="rotate(15 12 12)"
                  x="11"
                  y="4"
                  width="2"
                  height="16"
                  rx="1"
                />
              </g>
            </svg>

            <div>
              <p className="doc-info4">{info4}</p>
              <p className="doc-info-3">{info5}</p>
            </div>
          </div>
        </div>
        <span className="doc-img-container">
          <img className="img-1" src={Image1} alt="" width={600} height={400} />
        </span>
      </div>
      <button className="doc-back" onClick={handleback}>
        Back
      </button>
    </>
  );
}

export default withRouter(Documentation);
