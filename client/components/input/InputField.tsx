import { Box, InputAdornment, TextField } from "@mui/material";
import { FC } from "react";
import { IInputField } from "~/typings";
import { InputError } from "./InputError";
import EuroIcon from "@mui/icons-material/Euro";

const InputField: FC<IInputField> = ({ label, type, fieldName, touched, error, styles, isCurrencyInput, ...rest }) => {
  return (
    <>
      <Box mt={styles?.mt} mb={styles?.mb}>
        <TextField
          label={label}
          name={fieldName}
          type={type}
          {...rest}
          variant="standard"
          fullWidth
          InputProps={{
            startAdornment: isCurrencyInput && (
              <InputAdornment position="start" sx={{ fontSize: 22, fontWeight: 600, color: "#6434fc" }}>
                <EuroIcon sx={{ fontSize: 22 }} />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
          inputProps={{ style: { fontSize: 22, fontWeight: 600, color: "#6434fc" } }}
        />
        {touched && error && <InputError error={error} />}
      </Box>
    </>
  );
};
export default InputField;
