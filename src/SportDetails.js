import React from "react";

const SportDetails = props => {
  const sportsArray = props.sports;
  const sportId = props.match.params.id;
  const sportDescription = sportsArray.filter(sport => sport.id == sportId)[0]
    .description;
  return <p>{sportDescription}</p>;
};

export default SportDetails;
