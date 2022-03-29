import { Item } from "../../dataStructure";
import "./DropdownItem.style.scss";

interface ItemProps {
  item: Item;
}

const DropdownItem = (props: ItemProps) => {
  switch (props.item.type) {
    case "button":
      return (
        <div className="dropDownItem" onClick={props.item.clickHandler}>
          {props.item.text}
        </div>
      );
    case "anchor":
      return (
        <a className="dropDownItem" href={props.item.href}>
          {props.item.text}
        </a>
      );
  }
};

export default DropdownItem;
