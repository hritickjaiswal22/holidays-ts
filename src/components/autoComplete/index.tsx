import React, { useState } from "react";

import { SAutocomplete, STextField } from "./style";
import { countries } from "../../utils/countries";

type PropType = {
  label: string;
  onChange: (event: object, newValue: any) => void;
  onInputChange: (event: object, newInputValue: any) => void;
  value: string;
  inputValue: string;
  options: Array<string>;
};

function AutoComplete(props: PropType) {
  return (
    <SAutocomplete
      disablePortal
      options={props.options}
      value={props.value}
      onChange={props.onChange}
      inputValue={props.inputValue}
      onInputChange={props.onInputChange}
      renderInput={(params) => <STextField {...params} label={props.label} />}
    />
  );
}

export default AutoComplete;
