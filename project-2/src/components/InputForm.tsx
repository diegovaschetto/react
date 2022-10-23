import { Paper } from "@mui/material";
import React, { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";


export const InputForm = () => {
    const [url, setUrl] = useState("")
    let staticUrl = `/${url}`

    const onSubmit =()=> {
        setUrl("")
    }

    return (
        <>
            <Paper  component="form" onSubmit={(e:React.FormEvent<HTMLFormElement>)=>e.preventDefault()} elevation={3}>
                <input
                    value={url}
                    onChange={(e) => {
                        setUrl(e.target.value);
                    }}
                    type="text"
                />
                <Link role={"button"} onClick={onSubmit} to={staticUrl}>Cerca
                </Link>
            </Paper>
        </>
    );
};
