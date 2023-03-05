import React from "react";

import { SCircularProgress } from "./style";

type PropType = {
  thickness: number;
};

function Spinner(props: PropType) {
  const { thickness = 3.6 } = props;
  return <SCircularProgress thickness={thickness} />;
}

export default Spinner;
