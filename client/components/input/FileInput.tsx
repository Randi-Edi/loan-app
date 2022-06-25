import { Box } from "@mui/material";
import { FC } from "react";
import { IFileInput } from "~/typings";
import { InputError } from "./InputError";

const FileInput: FC<IFileInput> = ({ touched, error, fieldName, styles, onChange }) => {
  return (
    <>
      <Box mt={styles?.mt} mb={styles?.mb}>
        <input name={fieldName} type="file" onChange={onChange} accept="image/*" multiple />
        {touched && error && <InputError error={error} />}
      </Box>
    </>
  );
};
export default FileInput;
