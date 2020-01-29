import React, { Component } from "react"
import { connect } from "react-redux";

import { setModalImg } from "../../../redux/modal/modal.action.js"

import { setNavigationView } from "../../../redux/navigation/navigation.action.js"

import Modal from "./Modal.jsx"

const Artwork = (props) => {
  return (
    <div id="artworkpage">
      <div id="streetart">
        <img className="rotate" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20141231_115614.jpg"
          onClick={() => {
            props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20141231_115614.jpg");
            props.setNavigationView("MODAL");
          }}>
        </img>
        <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20150712_170906.jpg"
          onClick={() => {
            props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20150712_170906.jpg");
            props.setNavigationView("MODAL");
          }}>
        </img>
        <img className="rotate" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20151122_110321.jpg"
          onClick={() => {
            props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20151122_110321.jpg");
            props.setNavigationView("MODAL");
          }}>
        </img>
      </div>
      <div id="digitalcharacters">
        <img className="tall" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/GestationCrate.png"></img>
        <img className="tall" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/GrandmaMan.png"></img>
        <img className="tall" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/Rage.png"></img>
      </div>
      <div id="sculpture">
        <img className="rotate" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20170903_075443.jpg"></img>
        <img className="rotate" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/IMG_20170322_171931.jpg"></img>
        <img className="rotate" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/IMG_20161028_143047.jpg"></img>
      </div>
      <div id="digitalsquares">
        <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/blue.png"></img>
        <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/smile.png"></img>
        <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/red.png"></img>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setNavigationView: render => dispatch(setNavigationView(render)),
    setModalImg: render => dispatch(setModalImg(render))
  };
};

export default connect(null, mapDispatchToProps)(Artwork);