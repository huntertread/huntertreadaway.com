import React, { Component } from "react"

const Artwork = () => {
  return (
    <div id="artworkpage">
      <div id="digitalcharacters">
        <img className="tall" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/GestationCrate.png"></img>
        <img className="tall" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/GrandmaMan.png"></img>
        <img className="tall" src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/Rage.png"></img>
      </div>
      <div id="digitalsquares">
        <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/blue.png"></img>
        <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/smile.png"></img>
        <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/red.png"></img>
      </div>
    </div>
  )
}

export default Artwork;