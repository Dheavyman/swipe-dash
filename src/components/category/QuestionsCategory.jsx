import React, { Fragment } from "react";

const QuestionsCategory = () => (
  <Fragment>
    <li className="collection-item header">
      <div className="collection-header">
        QUESTIONS
        <a href="#!" className="secondary-content valign-wrapper">
          <i className="material-icons refresh light-blue-text">refresh</i>
          <span className="light-blue-text">refresh</span>
        </a>
      </div>
    </li>
    <li className="collection-item question">
      Does MTN's new mobile money product pose a threat to Page?
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text">close</i>
      </a>
    </li>
    <li className="collection-item question">
      <p className="collection-question">Did Mr Biggs make a mistake by franchising their business?</p>
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text">close</i>
      </a>
    </li>
  </Fragment>
);

export default QuestionsCategory;
