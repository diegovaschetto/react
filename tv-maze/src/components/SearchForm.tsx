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

export const SearchForm = (props: any) => {
    const { onChange, onSubmit, isDisabled } = props;
    return (
        <>
            <Paper component={"form"} elevation={0} className="flex justify-center mt-2" sx={{my:3, mt: {md:"75px"}}} noValidate onSubmit={onSubmit}>
                <FormControl  className="w-full md:w-2/4" variant="outlined">
                    <InputLabel htmlFor="search">Find show</InputLabel>
                    <OutlinedInput
                        id="search"
                        type={"text"}
                        onChange={onChange}
                        autoFocus={true}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton edge="end" type="submit" disabled={isDisabled}>
                                    <SearchIcon color={isDisabled ? "disabled" : "primary"} />
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
