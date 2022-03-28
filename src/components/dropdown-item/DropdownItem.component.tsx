import { Item } from "../../dataStructure";
import "./DropdownItem.style.scss";

interface ItemProps {
  item: Item;
}
const DropdownItem = (props: ItemProps) => (
  <div className="dropDownItem" onClick={props.item.clickHandler}>
    {props.item.text}
  </div>
);

export default DropdownItem;
