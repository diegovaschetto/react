import { Button, Paper } from "@mui/material";
import React, { useCallback} from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";


export const InputForm = () => {
    const [currentSearch, setCurrentSearch] = useSearchParams()
    

    const setQuery = useCallback((query:string)=> {
        setCurrentSearch({search : query})
<<<<<<< HEAD
    },[setCurrentSearch])

    const url = ()=>{
        return currentSearch.get("search")?.trim() || ""}
=======
    }, [setCurrentSearch])

    const url = ()=>{
        return currentSearch.get("search")?.trim() || ""
    }
>>>>>>> a156ecbf8588bb04faa013e02704db099b83ea67

    
    
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
