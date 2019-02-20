import React, { Fragment } from "react";

import avatar from "../../images/user_avatar_1.png";

const SessionsCategory = () => (
  <Fragment>
    <li className="collection-item header">
      <div className="collection-header">
        SESSIONS
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
  </Fragment>
);

export default SessionsCategory;
