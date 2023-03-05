import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const STypography = styled(Typography)`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: ${(props) => props.size || 1}rem;
  width: fit-content;
  margin: 2rem auto;
`;
