import { DropdownItemType } from "./dataStructure";
import "./App.css";
import Dropdown from "./components/dropdown/Dropdown.component";

function App() {
  let itemList: DropdownItemType[];
  itemList = [
    {
      id: 1,
      type: "button",
      text: "One",
      clickHandler: function () {
        console.log("One");
      },
    },
    {
      id: 2,
      type: "button",
      text: "two",
      clickHandler: function (e) {
        console.log("two");
      },
      onKeyUp: function (e) {
        if (e.code === "Enter") {
          e.preventDefault();
          console.log("two");
        }
      },
    },
    {
      id: 3,
      type: "anchor",
      text: "three",
      href: "https://www.w3schools.com/css/css_dropdowns.asp",
      target: "_blank",
    },
  ];
  return (
    <div className="App">
      <Dropdown tabIndex={1} itemList={itemList} direction={"right"}></Dropdown>{" "}
      align to right
      <br />
      <br />
      <Dropdown
        tabIndex={2}
        itemList={itemList}
        direction={"left"}
      ></Dropdown>{" "}
      align to left
      <br />
      <br />
      <Dropdown
        tabIndex={3}
        itemList={itemList}
        direction={"top"}
      ></Dropdown>{" "}
      align to top
    </div>
  );
}

export default App;
