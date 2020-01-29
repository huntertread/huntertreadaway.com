import React, { Component } from "react"
import { connect } from "react-redux";

import { selectModalImg } from "../../../redux/modal/modal.selector.js"

import { setNavigationView } from"../../../redux/navigation/navigation.action.js"

const Modal = (props) => {
  return (
    <div id="modal" onClick={() => {props.setNavigationView("ARTWORK")}}>
      <img src={props.selectModalImg}></img>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectModalImg: selectModalImg(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigationView: render => dispatch(setNavigationView(render))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);