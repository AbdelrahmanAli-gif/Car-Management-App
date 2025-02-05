import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const today = dayjs();

const DateInput = ({ name, control, label, rules, error }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ width: "35%", minWidth: 120, margin: 0 }}
            maxDate={today}
            label={label}
            value={field.value}
            onChange={field.onChange}
            slotProps={{
              textField: {
                size: "small",
                error: !!error,
                helperText: error?.message,
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.object,
  error: PropTypes.object,
};

export default DateInput;
