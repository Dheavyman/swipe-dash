import React from "react";

import Category from '../category/Category';
import Post from '../post/PostList';
import InfoSection from '../info/InfoSection';

const Main = () => (
  <div className="row">
    <div className="col s12 l3">
      <Category />
    </div>
    <div className="col s12 l6">
      <Post />
    </div>
    <div className="col s12 l3">
      <InfoSection />
    </div>
  </div>
);

export default Main;
