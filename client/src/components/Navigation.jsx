import React, { Component } from "react"
import { connect } from "react-redux";

import { setNavigationView } from"../../../redux/navigation/navigation.action.js"

const Navigation = (props) => {
  return (
    <div id="navigation">
      <div id="navlogo">
        <p onClick={() => {props.setNavigationView("HOME")}}>Hunter Treadaway</p>
      </div>
      <div id="navbuttons">
        <button className="navigation" onClick={() => props.setNavigationView("PROJECTS")}>PROJECTS</button>
        <button className="navigation" onClick={() => props.setNavigationView("ARTWORK")}>ARTWORK</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setNavigationView: render => dispatch(setNavigationView(render))
  };
};

export default connect(null, mapDispatchToProps)(Navigation);