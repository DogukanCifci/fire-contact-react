import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "@mui/styled-engine-sc";

export const MyBox = styled(Box)`
  border: 3px solid red;
`;
export const MyTypography = styled(Typography)`
  margin-bottom: 20px;
`;

export const MyTextField = styled(TextField)`
  width: 300px;
  margin-top: 20px !important;
`;

export const NameBox = styled(MyBox)`
  position: relative;
  border: none;
`;
export const NumberBox = styled(MyBox)`
  position: relative;
  border: none;
`;

export const GenderBox = styled(MyBox)`
  position: relative;
  border: 1px solid gray;
  margin: 20px 0;
`;

export const MyButton = styled(Button)`
  margin-bottom: 10px !important;
`;
