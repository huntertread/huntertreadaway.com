import React, { Component } from "react"
import { connect } from "react-redux";

import { setNavigationView } from"../../../redux/navigation/navigation.action.js"

const Navigation = (props) => {
  return (
    <div id="navigation">
      <div id="navlogo">
        <p>Hunter Treadaway</p>
      </div>
      <div id="navbuttons">
        <button className="navigation" onClick={() => props.setNavigationView("HOME")}>HOME</button>
        <button className="navigation" onClick={() => props.setNavigationView("ARTWORK")}>ARTWORK</button>
        <button className="navigation" onClick={() => props.setNavigationView("CONTACT")}>CONTACT</button>
        <button className="navigation" onClick={() => props.setNavigationView("ABOUT")}>ABOUT</button>
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