import React from "react";

import SessionsCategory from "./SessionsCategory";
import InsightsCategory from "./InsightsCategory";
import QuestionsCategory from "./QuestionsCategory";

const Category = () => (
  <div className="row category">
    <div className="col s12">
      <ul className="collection">
        <div className="category-header valign-wrapper col s12">
          <span className="">FOR YOU</span>
        </div>
        <SessionsCategory />
        <InsightsCategory />
        <QuestionsCategory />
      </ul>
    </div>
  </div>
);

export default Category;
