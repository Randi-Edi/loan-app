import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IGetValidationError } from "~/typings";

export const InputError: FC<IGetValidationError> = ({ error }) => {
  return (
    <Box
      sx={{
        color: "error.main",
        display: "flex",
        alignItems: "center",
        mt: 1,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          textTransform: "none",
          "::first-letter": {
            textTransform: "uppercase",
          },
          fontWeight:"500",
          fontSize: "16px",
          lineHeight: "16px",
          ml: 1,
          py:1
        }}
      >
        {error}
      </Typography>
    </Box>
  );
};
