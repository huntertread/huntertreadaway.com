import React, { Component } from "react"
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { store } from "../../../redux/store.js";
import { selectNavigationView } from "../../../redux/navigation/navigation.selector.js"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Contact from "./Contact.jsx"
import Artwork from "./Artwork.jsx"

class App extends Component {
  constructor() {
    super()
  }

  render() {
    if (this.props.selectNavigationView === "HOME") {
      return (
        <div>
          <Home />
        </div>
      )
    } else if (this.props.selectNavigationView === "ARTWORK") {
      return (
        <div>
          <Artwork />
        </div>
      )
    } else if (this.props.selectNavigationView === "ABOUT") {
      return (
        <div>
          <About />
        </div>
      )
    } else if (this.props.selectNavigationView === "CONTACT") {
      return (
        <div>
          <Contact />
        </div>
      )
    } else {
      return (
        <div>
          <h1>navigation is broken</h1>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    selectNavigationView: selectNavigationView(state),
  };
};

export default connect(mapStateToProps, null)(App);