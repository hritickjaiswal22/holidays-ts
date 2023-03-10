import React from "react";
import Collapse from "@mui/material/Collapse";

import { SAlert } from "./style";

type alertProps = {
  type: string;
  show: boolean;
  children: React.ReactNode;
};

function Alert(props: alertProps) {
  const { children, show, type } = props;

  return (
    <Collapse in={show}>
      <SAlert severity={type}>{children}</SAlert>
    </Collapse>
  );
}

export default Alert;
