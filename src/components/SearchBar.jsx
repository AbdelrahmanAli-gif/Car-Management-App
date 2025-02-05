import { useDispatch } from "react-redux";
import { filterCars } from "../slices/carSlice";
import { TextField } from "@mui/material";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const carsDispatch = useDispatch();

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      carsDispatch(filterCars(query));
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, carsDispatch]);

  return (
    <div className="w-full sm:w-2/3 md:w-1/3 flex items-center justify-center overflow-hidden rounded-full border-1">
      <FontAwesomeIcon className="border-r p-2.5" size="lg" icon={faSearch} />
      <TextField
        sx={{
          width: "90%",
          minWidth: 120,
          "& .MuiInputBase-input": {
            padding: "2px 10px",
          },
          "& .MuiInputBase-root": {
            fontSize: "1.25rem",
          },
        }}
        slotProps={{
          input: {
            disableUnderline: true,
          },
        }}
        variant="standard"
        size="small"
        placeholder="Search cars.."
        value={query}
        onChange={(e) => handleQueryChange(e)}
      />
    </div>
  );
};

export default SearchBar;
