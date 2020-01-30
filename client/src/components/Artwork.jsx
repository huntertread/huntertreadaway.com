import React, { Component } from "react"
import { connect } from "react-redux"
import { setModalImg, setModalDisplay } from "../../../redux/modal/modal.action.js"
import Modal from "./Modal.jsx"

const Artwork = (props) => {
  return (
    <div>
      <Modal />
      <div id="artworkpage">
        <div id="streetart">
          <img className="rotate" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20141231_115614.jpg"
            onClick={() => {
              props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20141231_115614.jpg");
              props.setModalDisplay("inline-block");
            }}>
          </img>
          <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20150712_170906.jpg"
            onClick={() => {
              props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20150712_170906.jpg");
              props.setModalDisplay("inline-block");
            }}>
          </img>
          <img className="rotate" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20151122_110321.jpg"
            onClick={() => {
              props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20151122_110321.jpg");
              props.setModalDisplay("inline-block");
            }}>
          </img>
        </div>
        <div id="digitalcharacters">
          <img className="tall" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/GestationCrate.png"
            onClick={() => {
              props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/GestationCrate.png");
              props.setModalDisplay("inline-block");
            }}>
          </img>
          <img className="tall" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/GrandmaMan.png"
            onClick={() => {
              props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/GrandmaMan.png");
              props.setModalDisplay("inline-block");
            }}>
          </img>
          <img className="tall" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/Rage.png"
            onClick={() => {
              props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/Rage.png");
              props.setModalDisplay("inline-block");
            }}>
          </img>
        </div>
        <div id="sculpture">
          <img className="rotate" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20170903_075443.jpg"
            onClick={() => {
              props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20170903_075443.jpg");
              props.setModalDisplay("inline-block");
            }}>
          </img>
          <img className="rotate" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/IMG_20170322_171931.jpg"
            onClick={() => {
              props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/IMG_20170322_171931.jpg");
              props.setModalDisplay("inline-block");
            }}>
          </img>
          <img className="rotate" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/IMG_20161028_143047.jpg"
            onClick={() => {
              props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/IMG_20161028_143047.jpg");
              props.setModalDisplay("inline-block");
            }}>
          </img>
        </div>
        <div id="digitalsquares">
          <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/blue.png"
            onClick={() => {
              props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/blue.png");
              props.setModalDisplay("inline-block");
            }}>
          </img>
          <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/smile.png"
            onClick={() => {
              props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/smile.png");
              props.setModalDisplay("inline-block");
            }}>
          </img>
          <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/red.png"
            onClick={() => {
              props.setModalImg("https://huntertreadportfolio.s3-us-west-1.amazonaws.com/red.png");
              props.setModalDisplay("inline-block");
            }}>
          </img>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setNavigationView: render => dispatch(setNavigationView(render)),
    setModalImg: render => dispatch(setModalImg(render)),
    setModalDisplay: render => dispatch(setModalDisplay(render))
  };
};

export default connect(null, mapDispatchToProps)(Artwork);