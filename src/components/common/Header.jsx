import React, { Component } from "react";
import M from "materialize-css";

import Dropdown from './Dropdown';

import logo from "../../images/swipelogo.png";
import avatar from "../../images/user_avatar_1.png";

class Header extends Component {
  componentDidMount() {
    this.initializeDropdown();
  }

  componentDidUpdate() {
    this.initializeDropdown();
  }

  initializeDropdown = () => {
    document.addEventListener("DOMContentLoaded", () => {
      M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {
        coverTrigger: false
      });
    });
  };

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper valign-wrapper">
            <img
              className="brand-logo hide-on-med-and-down"
              src={logo}
              alt="logo"
            />
            <ul className="nav-items right hide-on-med-and-down valign-wrapper">
              <li className="nav-item">
                <a href="#!">Home</a>
              </li>
              <li className="nav-item">
                <a href="#!">Sessions</a>
              </li>
              <li className="nav-item">
                <a href="#!">Topics</a>
              </li>
              <li className="nav-item search">
                <div className="valign-wrapper">
                  <div className="input-field">
                    <input
                      id="search"
                      placeholder="Search"
                      type="search"
                      required
                    />
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href="#!">
                  <i className="material-icons">markunread</i>
                </a>
              </li>
              <li className="nav-item notification">
                <a href="#!">
                  <i className="material-icons">notifications</i>
                </a>
              </li>
              <li className="nav-item user-image">
                <a
                  href="#!"
                  className="dropdown-trigger valign-wrapper"
                  data-target="user-info"
                >
                  <img className="responsive-img" src={avatar} alt="user" />
                </a>
              </li>
              <li className="nav-item new-post-btn">
                <a href="#!" className="waves-effect waves-light btn">
                  New Post
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Dropdown />
      </div>
    );
  }
}

export default Header;
