import React from "react";

import { STypography } from "./style";

type TypographyProps = {
  variant: string;
  size: number;
  children: React.ReactNode;
};

function Typography(props: TypographyProps) {
  return (
    <STypography variant={props.variant} size={props.size}>
      {props.children}
    </STypography>
  );
}

export default Typography;
