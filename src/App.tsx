import React from "react";
import "./App.css";
import Dropdown from "./components/dropdown/Dropdown.component";

function App() {
  const itemList = [
    {
      text: "One",
      clickHandler: function () {
        alert(this.text);
      },
    },
    {
      text: "two",
      clickHandler: function () {
        alert(this.text);
      },
    },
    {
      text: "three",
      clickHandler: function () {
        alert(this.text);
      },
    },
  ];
  return (
    <div className="App">
      <Dropdown itemList={itemList} direction={"right"}></Dropdown> align to
      right
      <br />
      <br />
      <Dropdown itemList={itemList} direction={"left"}></Dropdown> align to left
      <br />
      <br />
      <Dropdown itemList={itemList} direction={"top"}></Dropdown> align to top
    </div>
  );
}

export default App;
