import React, { Component } from "react"
import { connect } from "react-redux"
import { selectModalImg, selectModalDisplay } from "../../../redux/modal/modal.selector.js"
import { setModalDisplay } from"../../../redux/modal/modal.action.js"

const Modal = (props) => {
  return (
    <div id="modal" style={ {display: props.selectModalDisplay} } onClick={() => {props.setModalDisplay("none")}}>
      <img src={props.selectModalImg}></img>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectModalImg: selectModalImg(state),
    selectModalDisplay: selectModalDisplay(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setModalDisplay: render => dispatch(setModalDisplay(render))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);