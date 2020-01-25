import React, { Component } from "react"

const Navigation = ({ navigate }) => {
  return (
    <div>
      <button onClick={() => navigate("HOME")}>HOME</button>
      <button onClick={() => navigate("DIGITAL")}>DIGITAL</button>
      <button onClick={() => navigate("CONTACT")}>CONTACT</button>
    </div>
  )
}

export default Navigation