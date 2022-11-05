import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ResultsMapped } from "../api/allResults";

type PropType = {
    allResults: ResultsMapped[]
}

export const AllResults = (prop: PropType ) => {
    const listOfResults = prop.allResults.map((show: ResultsMapped, key: number) => {
        const detailsSegment= show.id.toString(); 
        return (
                <Link to={detailsSegment} key={key}>
            <Grid style={{marginTop:"100px"}} item >
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        width="100"
                        image={show.image.medium}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {show.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            </Link>
        );
    });
    return (
        <>
            <Grid style={{marginTop:"200px"}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4, lg: 2 }}>
                {listOfResults}
            </Grid>
        </>
    );
};
