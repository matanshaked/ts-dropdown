import { MouseEventHandler } from "react";

export type ButtonItem = {
  type: "button";
  text: string;
  clickHandler: MouseEventHandler<HTMLElement>;
};

export type AnchorItem = {
  type: "anchor";
  text: string;
  href: string;
};

export type Item = AnchorItem | ButtonItem;
