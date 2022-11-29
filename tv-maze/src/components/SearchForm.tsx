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
            <Paper component={"form"} className="w-full" noValidate onSubmit={onSubmit}>
                <FormControl  className="mx-auto" variant="outlined">
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
