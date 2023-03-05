import React from "react";

import { Container } from "./style";

type PropType = {
  children: React.ReactNode;
  sx: any;
};

function InputBox(props: PropType) {
  return <Container {...props}>{props.children}</Container>;
}

export default InputBox;
