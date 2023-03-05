import { styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";

export const Container = styled(TableContainer)`
  max-width: 75rem;
  padding: 1rem;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const STable = styled(Table)`
  @media (max-width: 500px) {
    table-layout: fixed;
  }
`;
