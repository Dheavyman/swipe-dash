import React from "react";

const Dropdown = () => (
  <ul id="user-info" className="dropdown-content">
    <li>
      <a href="#!">
        <i className="material-icons">person</i>Profile
      </a>
    </li>
    <li>
      <a href="#!">
        <i className="material-icons">markunread</i>Messages
      </a>
    </li>
    <li>
      <a href="#!">
        <i className="material-icons">settings</i>Settings
      </a>
    </li>
    <li class="divider" tabindex="-1" />
    <li>
      <a href="#!">
        <i className="material-icons">info_outline</i>About
      </a>
    </li>
    <li>
      <a href="#!">
        <i className="material-icons"></i>News
      </a>
    </li>
    <li>
      <a href="#!">
        <i className="material-icons">help</i>FAQs
      </a>
    </li>
    <li>
      <a href="#!">
        <i className="material-icons">contact_phone</i>Contact
      </a>
    </li>
    <li>
      <a href="#!">
        <i className="material-icons">view_module</i>Legal
      </a>
    </li>
    <li class="divider" tabindex="-1" />
    <li>
      <a href="#!">
        <i className="material-icons">cloud</i>Sign out
      </a>
    </li>
  </ul>
);

export default Dropdown;
