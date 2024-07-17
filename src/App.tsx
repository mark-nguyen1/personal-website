import { useState } from "react";
import NavBar from "./components/navigation-bar/NavBar";
import Profile from "./components/profile/Profile";
import "./App.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Profile></Profile>
      <div id="main"></div>
    </>
  );
}

export default App;
