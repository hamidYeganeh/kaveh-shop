import { ReactNode } from "react";

export interface IMegaMenu {
  show: boolean;
  onShow?: () => void;
  onHide?: () => void;
  children?: ReactNode;
}
