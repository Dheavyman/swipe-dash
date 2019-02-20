import React from "react";

import Follow from "./Follow";

const InfoSection = () => (
  <div className="row info">
    <div className="col s12">
      <Follow />
    </div>
    <div className="col s12">
      <div className="collection experts-count">
        <p className="count center-align">
          <span className="light-blue-text">1,231</span> Experts
        </p>
        <p className="new">
          <i className="material-icons lens">lens</i>11 New
        </p>
      </div>
    </div>
    <div className="col s12">
      <div className="divider center-align" />
    </div>
    <div className="col s12">
    <ul className="foot-nav">
      <li>About</li>
      <li>Contact</li>
      <li>FAQs</li>
      <li>Blog</li>
      <li>Legal</li>
    </ul>
    </div>
  </div>
);

export default InfoSection;
