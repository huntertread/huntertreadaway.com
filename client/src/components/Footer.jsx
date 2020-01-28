import React, { Component } from "react"
import { connect } from "react-redux";

import { setNavigationView } from"../../../redux/navigation/navigation.action.js"

const Footer = (props) => {
  return (
    <div id="footer">
      <div id="footernav">
        <button className="navigation" onClick={() => props.setNavigationView("HOME")}>HOME</button>
        <button className="navigation" onClick={() => props.setNavigationView("PROJECTS")}>PROJECTS</button>
        <button className="navigation" onClick={() => props.setNavigationView("ARTWORK")}>ARTWORK</button>
      </div>
      <div id="footerexternallinks">
        <a target="_blank" href="https://www.linkedin.com/in/huntertread/">linkedIn</a><br/>
        <a target="_blank" href="https://github.com/huntertread">gitHub</a>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setNavigationView: render => dispatch(setNavigationView(render))
  };
};

export default connect(null, mapDispatchToProps)(Footer);