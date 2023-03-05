import React from "react";

import { SButton } from "./style";

type PropType = {
  children: React.ReactNode;
  onClick: (event: any) => void;
};

function Button(props: PropType) {
  return (
    <SButton variant="contained" onClick={props.onClick}>
      {props.children}
    </SButton>
  );
}

export default Button;
