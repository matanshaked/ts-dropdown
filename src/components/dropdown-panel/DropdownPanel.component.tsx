import { DropdownItemType } from "../../dataStructure";
import DropdownItem from "../dropdown-item/DropdownItem.component";

import "./DropdownPanel.style.scss";

interface PanelProps {
  isDropDownOpen: boolean;
  itemList: DropdownItemType[];
  direction: string;
}

const DropdownPanel = (panelProps: PanelProps) => {
  const dropDownPanelClass = panelProps.direction
    ? `dropDownPanel ${panelProps.direction}`
    : "dropDownPanel";
  return (
    <div className={dropDownPanelClass}>
      {panelProps.isDropDownOpen &&
        panelProps.itemList.map((item) => (
          <DropdownItem item={item} key={item.id} />
        ))}
    </div>
  );
};

export default DropdownPanel;
