import React from "react";
import { headerText } from "./Constants";
import { Row } from "@/design-system";
import { Icon } from "../Icon";

export type HeaderProps = {
  currentPage: string;
};

export const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <div className="flex flex-row bg-accent300 px-20 py-4 justify-between content-center">
      <h3 className="text-neutral0">{headerText}</h3>
      <Icon size={"small"} variant={"dhivasLogo"} />
      <h3 className="text-neutral0">{currentPage}</h3>
    </div>
  );
};
