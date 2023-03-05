import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Container = styled(Box)`
  padding: 1rem;
  max-width: 75rem;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
