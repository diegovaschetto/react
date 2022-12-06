import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

interface PropsType {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isDisabled: () => boolean;
}

export const SearchForm = (props: PropsType) => {
  const { onChange, onSubmit, isDisabled } = props;
  return (
    <>
      <Paper
        component={"form"}
        elevation={0}
        className="flex justify-center py-15"
        noValidate
        onSubmit={onSubmit}
      >
        <FormControl className="w-full md:w-2/4" variant="outlined">
          <InputLabel htmlFor="search">Find show</InputLabel>
          <OutlinedInput
            id="search"
            type={"text"}
            onChange={onChange}
            autoFocus={true}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end" type="submit" disabled={isDisabled()}>
                  <SearchIcon color={isDisabled() ? "disabled" : "primary"} />
                </IconButton>
              </InputAdornment>
            }
            label="Find show"
          />
        </FormControl>
      </Paper>
    </>
  );
};
