import React from "react";

import { Container } from "./style";

type PropType = {
  children: React.ReactNode;
  sx?: any;
};

function AlertBox(props: PropType) {
  return <Container {...props}>{props.children}</Container>;
}

export default AlertBox;
