import React from "react";
import {Button} from "@mui/material"


interface propsType {
    action:() => void
}

class MuiButton extends React.Component<propsType>{
    constructor(props:propsType){
        super(props)
    }
    render = () => {
        const {action} = this.props
        return (
            <>
            <Button onClick={action} variant="outlined">Search</Button>
            </>
        )
    }
}

export default MuiButton