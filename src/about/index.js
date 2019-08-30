import React from "react";
import { Link, Route } from "react-router-dom";
import Detail from './detail'
const About = ({ match }) => {
  return (
    <div>
      <Link to={`${match.url}/detail`}>detail</Link>
      <Route path={`${match.url}/:id`} component={Detail} />
    </div>
  );
};
export default About;
