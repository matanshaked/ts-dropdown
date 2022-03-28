import { MouseEventHandler } from "react";

export interface Item {
  text: string;
  clickHandler: MouseEventHandler;
}
