import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const NumberInput = ({ name, control, label, rules, error }) => {
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
          type="number"
          size="small"
          inputMode="numeric"
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.object,
  error: PropTypes.object,
};

export default NumberInput;
