import React, { Component } from "react"
import Intro3d from "./Intro3d.jsx"
import MediaQuery from "react-responsive"

let personalNarrative = "Hi, my name is Hunter Treadaway and I’m a software engineer with experience creating fullstack web and mobile applications using React, Node and a variety of SQL and noSQL database management systems. My introduction to software engineering came during my previous role where I worked as a project manager over a variety of web-based development projects. I saw the passion my teams had for the applications they were creating and it inspired me to pursue software engineering myself. I believe my past experience gives me a unique perspective in this field, I’m able to communicate with non-technical colleagues and understand the business side of the industry. I understand the pressures developers face in the workplace and the massive amount of work that goes in to taking an application to market. I’m passionate about building and creating things and software engineering allows me to take my artistic predispositions and express myself in a more public, interactive platform. I’m organized, self-motivated and ready to take whatever steps are necessary to make my engineering dream, a reality."

const Home = () => {
  return (
    <div>
    <MediaQuery minDeviceWidth={1224}>
      <div id="intro">
        <Intro3d />
      </div>
    </MediaQuery>
    <MediaQuery minDeviceWidth={1224}>
    <div id="blurb">
      <div id="aboutme">
        <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/headshot.jpg"></img>
        <p>{personalNarrative}</p>
      </div>
    </div>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={550}>
    <div id="mobileblurb">
      <div id="mobileaboutme">
        <img src="https://huntertreadportfolio.s3-us-west-1.amazonaws.com/headshot.jpg"></img>
        <p>{personalNarrative}</p>
      </div>
    </div>
    </MediaQuery>
    <MediaQuery minDeviceWidth={1224}>
      <div id="contact">
        <div id="contactme">
            <label>NAME<br/><input type="text" /></label>
            <label>EMAIL<br/><input type="text" /></label>
            <label>MESSAGE<br/><textarea type="text" /></label>
            <button type="submit">SUBMIT</button>
        </div>
      </div>
    </MediaQuery>
    </div>
  )
}

export default Home;