import React from "react";
import { Item } from "./dataStructure";
import "./App.css";
import Dropdown from "./components/dropdown/Dropdown.component";

function App() {
  let itemList: Item[];
  itemList = [
    {
      type: "button",
      text: "One",
      clickHandler: function () {
        console.log("One");
      },
    },
    {
      type: "button",
      text: "two",
      clickHandler: function () {
        console.log("two");
      },
    },
    {
      type: "anchor",
      text: "three",
      href: "https://www.w3schools.com/css/css_dropdowns.asp",
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
