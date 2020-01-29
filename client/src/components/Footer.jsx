import React, { Component } from "react"
import { connect } from "react-redux";

import { setNavigationView } from"../../../redux/navigation/navigation.action.js"

class Footer extends Component {
  constructor() {
    super()
    this.goToTop = this.goToTop.bind(this)
  }

  goToTop() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  };

  render() {
    return (
      <div id="footer">
        <div id="footernav">
          <button className="navigation" onClick={() => {this.props.setNavigationView("HOME"); this.goToTop()}}>HOME</button>
          <button className="navigation" onClick={() => {this.props.setNavigationView("PROJECTS"); this.goToTop()}}>PROJECTS</button>
          <button className="navigation" onClick={() => {this.props.setNavigationView("ARTWORK"); this.goToTop()}}>ARTWORK</button>
        </div>
        <div id="footerexternallinks">
          <a target="_blank" href="https://www.linkedin.com/in/huntertread/">linkedIn</a>
          <a target="_blank" href="https://github.com/huntertread">gitHub</a>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNavigationView: render => dispatch(setNavigationView(render))
  };
};

export default connect(null, mapDispatchToProps)(Footer);