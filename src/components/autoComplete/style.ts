import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const STextField = styled(TextField)``;

export const SAutocomplete = styled(Autocomplete)`
  width: 100%;
  max-width: 18.75rem;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
