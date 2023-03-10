import { useState } from "react";
import "./App.css";

import Typography from "./components/typography";
import InputContainer from "./containers/inputContainer";
import TableContainer from "./containers/tableContainer";
import AlertContainer from "./containers/alertContainer";
import { extract } from "./utils/extractString";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(0);

  const [error, setError] = useState("");

  function submitHandler(country: string, year: number, month: string) {
    setError("");

    if (Number(year) <= 0) {
      setError("The year should be greater than zero");
      return;
    }

    if (Number(year) > 2100) {
      setError("Holidays beyond the year 2100 are not available as of yet 😔");
      return;
    }

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
      <AlertContainer error={error} />
      <TableContainer
        country={selectedCountry}
        year={selectedYear}
        month={selectedMonth}
        setError={setError}
      />
    </div>
  );
}

export default App;
