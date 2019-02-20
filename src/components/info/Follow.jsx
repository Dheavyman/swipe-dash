import React from "react";

import avatar from "../../images/user_avatar_1.png";

const Follow = () => (
  <ul className="collection">
    <li className="collection-item header">
      <div className="collection-header">
        WHO TO FOLLOW
        <a href="#!" className="secondary-content valign-wrapper">
          <i className="material-icons refresh light-blue-text">refresh</i>
          <span className="light-blue-text">refresh</span>
        </a>
      </div>
    </li>
    <li className="collection-item avatar">
      <img src={avatar} alt="" className="circle" />
      <span className="title">Yomi Adedeji</span>
      <p>Managing Partner @ Softcom</p>
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text">close</i>
      </a>
    </li>
    <li className="collection-item avatar">
      <img src={avatar} alt="" className="circle" />
      <span className="title">Don Jazzy</span>
      <p>Music Producer, Artist, CEO @ Marvin Records</p>
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text">close</i>
      </a>
    </li>
  </ul>
);

export default Follow;
