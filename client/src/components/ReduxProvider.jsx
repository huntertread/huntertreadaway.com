import App from "./App.jsx"
import Navigation from "./Navigation.jsx"
import Footer from "./Footer.jsx"
import React, { Component } from "react"
import { Provider } from "react-redux"
import { store } from "../../../redux/store.js"

const ReduxProvider = () => {
  return (
    <div id="mainWrapper">
    <Provider store={store}>
      <Navigation />
      <App />
      <Footer />
    </Provider>
    </div>
  );
}

export default ReduxProvider