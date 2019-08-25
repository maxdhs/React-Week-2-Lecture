import React from "react";
import { Link } from "react-router-dom";

const Sports = props => {
  return props.sports.map(sport => (
    <Link to={`/sports/${sport.id}`}>
      <li key={sport.id}>{sport.name}</li>
    </Link>
  ));
};

export default Sports;
