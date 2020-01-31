import React, { Component } from "react"
import { connect } from "react-redux"
import MediaQuery from "react-responsive"
import { setNavigationView, setHamburgerState } from "../../../redux/navigation/navigation.action.js"
import { selectHamburgerState } from "../../../redux/navigation/navigation.selector.js"

const OpenHamburger = (props) => {
  return (
    <div id="openburger" style={{display: props.selectHamburgerState}} >
        <button onClick={() => props.setHamburgerState("none")}>x</button>
      <div>
        <button onClick={() => {props.setNavigationView("PROJECTS"); props.setHamburgerState('none')}}>PROJECTS</button>
      </div>
      <div>
        <button onClick={() => {props.setNavigationView("ARTWORK"); props.setHamburgerState('none')}}>ARTWORK</button>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OpenHamburger)