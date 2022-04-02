import { useState } from "react";

import { MoreIcon } from "../more-icon/MoreIcon.component";
import DropdownPanel from "../dropdown-panel/DropdownPanel.component";

import "./Dropdown.style.scss";
import { DropdownItemType } from "../../dataStructure";

interface DropdownProps {
  itemList: DropdownItemType[];
  direction: string;
  tabIndex: number;
}

const Dropdown = (dropdownProps: DropdownProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleIsDropDownOpen = () => {
    setIsDropDownOpen((prevIsDropDownOpen) => !prevIsDropDownOpen);
  };
  const iconWrapperClass = dropdownProps.direction
    ? `icon-wrapper-conteiner ${dropdownProps.direction}`
    : "icon-wrapper-conteiner";

  return (
    <div className="dropdown-container">
      <div className={iconWrapperClass}>
        <div
          className="icon-container"
          onClick={toggleIsDropDownOpen}
          tabIndex={dropdownProps.tabIndex}
        >
          <div className="icon">
            <MoreIcon />
          </div>
        </div>
      </div>
      <DropdownPanel
        isDropDownOpen={isDropDownOpen}
        itemList={dropdownProps.itemList}
        direction={dropdownProps.direction}
      />
    </div>
  );
};

export default Dropdown;
