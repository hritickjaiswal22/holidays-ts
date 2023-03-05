import React, { useState } from "react";

import Container from "../../components/inputBox";
import AutoComplete from "../../components/autoComplete";
import Input from "../../components/input";
import Button from "../../components/button";

import { countries } from "../../utils/countries";
import { months } from "../../utils/months";

type PropType = {
  onSubmit: (country: string, year: number, month: string) => void;
};

function InputContainer(props: PropType) {
  const d = new Date();

  const [countryValue, setCountryValue] = useState("India - IN");
  const [countryInputValue, setCountryInputValue] = useState("India - IN");

  const monthIndex = d.getMonth();
  const [monthValue, setMonthValue] = useState(months[monthIndex]);
  const [monthInputValue, setMonthInputValue] = useState(months[monthIndex]);

  const [yearValue, setYearValue] = useState(d.getFullYear());

  function countryChange(event: any, newValue: string) {
    setCountryValue(newValue ? newValue : "");
  }

  function countryInputChange(event: any, newInputValue: string) {
    setCountryInputValue(newInputValue ? newInputValue : "");
  }

  function monthChange(event: any, newValue: string) {
    setMonthValue(newValue ? newValue : "");
  }

  function monthInputChange(event: any, newInputValue: string) {
    setMonthInputValue(newInputValue ? newInputValue : "");
  }

  function inputChangeHandler(event: any) {
    setYearValue(Number(event.target.value));
  }

  function submitHandler() {
    props.onSubmit(countryValue, yearValue, monthValue);
  }

  return (
    <>
      <Container sx={null}>
        <AutoComplete
          label="Countries"
          onChange={countryChange}
          onInputChange={countryInputChange}
          value={countryValue}
          inputValue={countryInputValue}
          options={countries}
        />
        <AutoComplete
          label="Months"
          onChange={monthChange}
          onInputChange={monthInputChange}
          value={monthValue}
          inputValue={monthInputValue}
          options={months}
        />
        <Input label="Year" value={yearValue} onChange={inputChangeHandler} />
      </Container>
      <Container sx={{ justifyContent: "center" }}>
        <Button onClick={submitHandler}>Submit</Button>
      </Container>
    </>
  );
}

export default InputContainer;
