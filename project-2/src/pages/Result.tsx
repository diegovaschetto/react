import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {  callToApiDetails, ResultMapped } from "../api/allResults"
import { BackHome } from "../components/BackHome"

export const Result = () => {
    const {result} = useParams()
    const [resultData, setResultData] = useState<ResultMapped>()
    
    useEffect(()=>{
        callToApiDetails(result!).then((response)=>{
            setResultData(response)
        })
    },[])

    return(<><BackHome/>
    <Grid style={{marginTop:"100px"}} item >
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        width="100"
                        image={resultData?.image?.medium}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {resultData?.name}
                        </Typography>
                        <Typography gutterBottom variant="overline" component="div">
                            {resultData?.type}
                        </Typography>
                        <Typography gutterBottom component="p">
                            {resultData?.summary.replace(/<\/?[a-z]>/g, "")}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
    </>)
}