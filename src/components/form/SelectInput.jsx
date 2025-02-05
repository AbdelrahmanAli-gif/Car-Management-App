import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const SelectInput = ({ name, control, label, options, rules, error }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormControl
          sx={{ width: "35%", minWidth: 120, margin: 0 }}
          size="small"
          error={!!error}
        >
          <InputLabel>{label}</InputLabel>
          <Select {...field} label={label}>
            {options.map((option, i) => (
              <MenuItem value={option} key={i}>
                {option}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  rules: PropTypes.object,
  error: PropTypes.object,
};

export default SelectInput;
