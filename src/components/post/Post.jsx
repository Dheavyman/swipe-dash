import React from "react";

import avatar from '../../images/user_avatar_1.png';

const Post = () => (
  <div className="col s12">
    <div className="card z-depth-0">
      <div className="card-content black-text">
        <ul className="collection">
          <li className="collection-item avatar">
            <img src={avatar} alt="" className="circle" />
            <span className="title">New DM Feature</span>
            <p>Sept, 24, 2018, 1:16 p.m.</p>
            <a href="#!" className="secondary-content">
              <i className="material-icons black-text">more_horiz</i>
            </a>
          </li>
        </ul>
        <p className="message-content">Hello guys,</p>
        <p className="message-content">
          We'd like to say a big thank you to all those of you who took part in
          our short survey - with the feedback you gave us we are better
          equipped to take TwoCents to a new sense of what the product should
          morph into: we hav learned a lot and have a pretty good understanding
          of...<span className="light-blue-text">read more</span>
        </p>
      </div>
      <div className="card-action">
        <a href="#!" className="valign-wrapper">
          <i className="material-icons thumb-up">thumb_up</i>
          <span className="thumb-up-num">101</span>
        </a>
        <a href="#!" className="valign-wrapper">
          <i className="material-icons seen">remove_red_eye</i>
          <span className="seen-num">366</span>
        </a>
        <a href="#!" className="valign-wrapper">
          <i className="material-icons sms">sms</i>
          <span className="sms-num">11</span>
        </a>
      </div>
    </div>
  </div>
);

export default Post;
