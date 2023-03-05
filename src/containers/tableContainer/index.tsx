import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container } from "../../components/table/style";
import TableComponent from "../../components/table";
import Spinner from "../../components/spinner";

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
};

type anyType = any;

export default function CustomizedTables(props: PropType) {
  const { country, month, year } = props;
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
    const response = await axios.get(
      `https://calendarific.com/api/v2/holidays?&api_key=01aff00d5bc3c564a8deec0d89024e579d6ae36c&country=${props.country}&year=${props.year}`
    );

    return response?.data?.response?.holidays;
  }

  async function getHolidaysByYearAndMonth() {
    const response = await axios.get(
      `https://calendarific.com/api/v2/holidays?&api_key=01aff00d5bc3c564a8deec0d89024e579d6ae36c&country=${props.country}&year=${props.year}&month=${props.month}`
    );

    return response?.data?.response?.holidays;
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
    }
    if (country && year) {
      setIsLoading(true);
      getHolidaysByYear()
        .then((data) => {
          setHolidays(toHolidaysArr(data));
        })
        .finally(() => setIsLoading(false));
      return;
    }
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
