import { useState } from "react";
import "./App.css";

import Typography from "./components/typography";
import InputContainer from "./containers/inputContainer";
import TableContainer from "./containers/tableContainer";
import { extract } from "./utils/extractString";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(0);

  function submitHandler(country: string, year: number, month: string) {
    setSelectedCountry(extract(country));
    setSelectedYear(year);
    setSelectedMonth(Number(extract(month)));
  }

  return (
    <div className="App">
      <Typography size={4} variant="h1">
        Holidays
      </Typography>
      <InputContainer onSubmit={submitHandler} />
      <TableContainer
        country={selectedCountry}
        year={selectedYear}
        month={selectedMonth}
      />
    </div>
  );
}

export default App;
