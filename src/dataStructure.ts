import { KeyboardEvent, MouseEvent } from "react";

export interface ButtonItem extends Item {
  type: "button";
  clickHandler: (e: KeyboardEvent | MouseEvent) => void;
  onKeyUp?: (e: KeyboardEvent) => void;
}

export interface AnchorItem extends Item {
  type: "anchor";
  href: string;
  target: string;
}

export type DropdownItemType = AnchorItem | ButtonItem;

interface Item {
  id: number;
  text: string;
}
