import React, { Component } from "react"
import MediaQuery from "react-responsive"

const Projects = () => {
  return (
    <div id="projectspage">
      <MediaQuery maxDeviceWidth={1223} minDeviceWidth={100}>
        <p>MOBILE</p>
        <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/20141231_115614.jpg"></img>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1224} >
        <p>DESKTOP/TABLET</p>
      </MediaQuery>
    </div>
  )
}

export default Projects