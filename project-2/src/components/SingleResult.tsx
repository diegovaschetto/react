import { Component } from "react";


interface propsType{
    respJSON: any
}

class SingleResult extends Component<propsType>{
    constructor(props:propsType) {
        super(props)
    }
 render =() => {
     const {respJSON}= this.props
    return(
        <>
        <p>{respJSON.url}</p>
        </>
    )
 }
}

export default SingleResult