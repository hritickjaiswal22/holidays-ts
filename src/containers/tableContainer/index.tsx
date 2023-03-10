import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container } from "../../components/table/style";
import TableComponent from "../../components/table";
import Spinner from "../../components/spinner";

import { baseUrl } from "../../utils/constants";

const headings = ["Description", "Holiday", "Date"];

const rows = [
  {
    desc: "This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headings.",
    holiday: "Holi",
    date: "8/3/2023",
  },
];

type PropType = {
  country: string;
  year: number;
  month: number;
  setError: (message: string) => void;
};

type anyType = any;

export default function CustomizedTables(props: PropType) {
  const { country, month, year, setError } = props;
  const [holidays, setHolidays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function toHolidaysArr(data: any) {
    return data.map((obj: anyType) => {
      return {
        desc: obj?.description,
        holiday: obj?.name,
        date: obj?.date?.iso,
      };
    });
  }

  async function getHolidaysByYear() {
    const res = await axios.get(
      `${baseUrl}/holiday/country/${props.country}/year/${props.year}`
    );

    return res?.data?.holidays;
  }

  async function getHolidaysByYearAndMonth() {
    const res = await axios.get(
      `${baseUrl}/holiday/country/${props.country}/year/${props.year}/month/${props.month}`
    );

    return res?.data?.holidays;
  }

  useEffect(() => {
    if (country && year && month) {
      setIsLoading(true);
      getHolidaysByYearAndMonth()
        .then((data) => {
          setHolidays(toHolidaysArr(data));
        })
        .finally(() => setIsLoading(false));
      return;
    } else if (country && year) {
      setIsLoading(true);
      getHolidaysByYear()
        .then((data) => {
          setHolidays(toHolidaysArr(data));
        })
        .finally(() => setIsLoading(false));
      return;
    } else setError("Please give valid inputs");
  }, [country, month, year]);

  return (
    <Container>
      {isLoading ? (
        <Spinner thickness={4} />
      ) : (
        <TableComponent headings={headings} rows={holidays} />
      )}
    </Container>
  );
}
