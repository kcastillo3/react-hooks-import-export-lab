import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={props.image} alt="I made this" />
    </div>
  );
}

export default About 