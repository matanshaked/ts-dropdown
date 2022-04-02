import { DropdownItemType } from "../../dataStructure";
import "./DropdownItem.style.scss";

interface ItemProps {
  item: DropdownItemType;
}

const DropdownItem = (props: ItemProps) => {
  switch (props.item.type) {
    case "button":
      return (
        <div
          className="dropDownItem"
          onClick={props.item.clickHandler}
          tabIndex={4}
          onKeyUp={props.item.onKeyUp}
        >
          {props.item.text}
        </div>
      );
    case "anchor":
      return (
        <a
          className="dropDownItem"
          href={props.item.href}
          target={props.item.target}
        >
          {props.item.text}
        </a>
      );
  }
};

export default DropdownItem;
