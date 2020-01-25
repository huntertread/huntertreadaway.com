import React, { Component } from "react"
import Navigation from "./Navigation.jsx"

class App extends Component {
  constructor() {
    super()
    this.state = {
      view: "HOME"
    }
    this.navigate = this.navigate.bind(this)
  }

  navigate(page) {
    this.setState({view: page})
  }

  render() {
    if (this.state.view === "HOME") {
      return(
        <div>
          <Navigation navigate={this.navigate} />
          <h1>HOME</h1>
          {/* <button onClick={() => this.navigate("DIGITAL")}>DIGITAL</button> */}
        </div>
      )
    } else if (this.state.view === "DIGITAL") {
      return (
        <div>
          <Navigation navigate={this.navigate} />
          <h1>DIGITAL</h1>
          {/* <button onClick={() => this.navigate("HOME")}>HOME</button> */}
        </div>
      )
    }
  }
}

export default App