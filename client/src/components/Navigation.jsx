import React, { Component } from "react"
import { connect } from "react-redux";

import { setNavigationView } from"../../../redux/navigation/navigation.action.js"

const Navigation = (props) => {
  return (
    <div id="navigation">
      <button className="navigation" onClick={() => props.setNavigationView("HOME")}>HOME</button>
      <button className="navigation" onClick={() => props.setNavigationView("ARTWORK")}>ARTWORK</button>
      <button className="navigation" onClick={() => props.setNavigationView("CONTACT")}>CONTACT</button>
      <button className="navigation" onClick={() => props.setNavigationView("ABOUT")}>ABOUT</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setNavigationView: render => dispatch(setNavigationView(render))
  };
};

export default connect(null, mapDispatchToProps)(Navigation);