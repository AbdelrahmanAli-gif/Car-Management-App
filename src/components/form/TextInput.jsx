import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const TextInput = ({ name, control, label, rules, error }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{ width: "35%", minWidth: 120 }}
          label={label}
          variant="outlined"
          size="small"
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.object,
  error: PropTypes.object,
};

export default TextInput;
