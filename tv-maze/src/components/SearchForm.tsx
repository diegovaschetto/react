import { Button, Paper, TextField } from "@mui/material";

export const SearchForm = (props: any) => {
    const { onChange, onSubmit, isDisabled, inputSearch } = props;
    return (
        <>
            <Paper component={"form"} noValidate onSubmit={onSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={inputSearch}
                    onChange={onChange}
                />
                <Button variant="contained" type="submit" disabled={isDisabled}>
                    Cerca
                </Button>
            </Paper>
        </>
    );
};
