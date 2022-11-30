import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export const SearchForm = (props: any) => {
    const { onChange, onSubmit, isDisabled } = props;
    return (
        <>
            <Paper component={"form"} elevation={0} className="flex justify-center mt-2" noValidate onSubmit={onSubmit}>
                <FormControl  className="w-full md:w-2/4" variant="outlined">
                    <InputLabel htmlFor="search">Cerca show</InputLabel>
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
                        label="Cerca show"
                    />
                </FormControl>
            </Paper>
        </>
    );
};
