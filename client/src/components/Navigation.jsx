import React, { Component } from "react"
import { connect } from "react-redux"
import MediaQuery from "react-responsive"
import { setNavigationView, setHamburgerState } from "../../../redux/navigation/navigation.action.js"
import { selectHamburgerState } from "../../../redux/navigation/navigation.selector.js"
import OpenHamburger from "./OpenHamburger.jsx"

const Navigation = (props) => {

  return (
    <div>
    <MediaQuery minDeviceWidth={550}>
      <div id="dtnavigation">
        <div id="navlogo">
          <p onClick={() => {props.setNavigationView("HOME")}}>Hunter Treadaway</p>
        </div>
        <div id="navbuttons">
          <button className="navigation" onClick={() => props.setNavigationView("PROJECTS")}>PROJECTS</button>
          <button className="navigation" onClick={() => props.setNavigationView("ARTWORK")}>ARTWORK</button>
        </div>
      </div>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={549} >
      <div id="mobilenavigation">
        <div id="hamburgernavlogo">
          <p onClick={() => {props.setNavigationView("HOME")}}>hunterTread</p>
        </div>
        <div className="hamburger">
          <button className="navigation" onClick={() => props.setHamburgerState("inline-block")}>=</button>
          <OpenHamburger />
        </div>
      </div>
    </MediaQuery>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectHamburgerState: selectHamburgerState(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigationView: render => dispatch(setNavigationView(render)),
    setHamburgerState: render => dispatch(setHamburgerState(render))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)