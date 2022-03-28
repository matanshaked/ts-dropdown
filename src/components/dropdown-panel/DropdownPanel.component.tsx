import { Item } from "../../dataStructure";
import DropdownItem from "../dropdown-item/DropdownItem.component";

import "./DropdownPanel.style.scss";

interface PanelProps {
  isDropDownOpen: boolean;
  itemList: Item[];
  direction: string;
}

const DropdownPanel = (panelProps: PanelProps) => {
  const dropDownPanelClass = panelProps.direction
    ? `dropDownPanel ${panelProps.direction}`
    : "dropDownPanel";
  return (
    <div className={dropDownPanelClass}>
      {panelProps.isDropDownOpen &&
        panelProps.itemList.map((item, index) => (
          <DropdownItem item={item} key={index} />
        ))}
    </div>
  );
};

export default DropdownPanel;
