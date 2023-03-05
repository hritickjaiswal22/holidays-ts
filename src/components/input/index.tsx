import React from "react";

import { STextField } from "./style";

type PropType = {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
};

function Input(props: PropType) {
  return (
    <STextField
      variant="outlined"
      value={props.value}
      label={props.label}
      onChange={props.onChange}
    />
  );
}

export default Input;
