import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const STextField = styled(TextField)`
  width: 100%;
  max-width: 18.75rem;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
