import React from "react";
import { Stack  } from "@mui/system";
import { TextField } from "@mui/material";

interface propsType {
    action:(event: React.ChangeEvent<HTMLInputElement>) => void
}

class MuiTextField extends React.Component<propsType>{
    constructor(props:propsType){
        super(props)
    }
    render = () => {
        const {action} = this.props
        return (
            <Stack spacing= {4}>
                <Stack direction='row'>
                    <TextField onChange={action} label='type here..' variant="standard"/>
                </Stack>
            </Stack>
        )
    }
}

export default MuiTextField