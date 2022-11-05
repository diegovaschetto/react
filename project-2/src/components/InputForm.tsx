import { Button, Paper } from "@mui/material";
import React, { useCallback} from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";


export const InputForm = () => {
    const [currentSearch, setCurrentSearch] = useSearchParams()
    

    const setQuery = useCallback((query:string)=> {
        setCurrentSearch({search : query})
    }, [setCurrentSearch])

    const url = ()=>{
        return currentSearch.get("search")?.trim() || ""
    }

    
    
    const isDisabled = () => currentSearch.get("search")?.trim().length === 0

    return (
        <>
            <Paper  component="form" onSubmit={(e:React.FormEvent<HTMLFormElement>)=>e.preventDefault()} elevation={3}>
                <input
                    value={currentSearch.get("search") || ""}
                    onChange={(e)=>setQuery(e.target.value)}
                    type="text"
                />
                <Button disabled={isDisabled()}><Link role={"button"}  to={url()}>Cerca
                </Link></Button>
                
            </Paper>
        </>
    );
};
