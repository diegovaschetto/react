import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ResultsMapped } from "../service/api.service";

export const ResultsList = (props: any) => {
  const { allResults } = props;

  const listOfResults = allResults.map((show: ResultsMapped, key: number) => {
    const detailsSegment = show.id.toString();
    return (
        <Grid item xs={10} sm={10}>
            <Link to={`./${detailsSegment}`} key={key}>
          <CardActionArea>
            <CardMedia component="img" image={show.image.medium} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {show.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" role={"button"}>
              Dettagli Show
            </Button>
          </CardActions>
      </Link>
        </Grid>
    );
  });
  return (
    <>
      <Grid container flexDirection="column" justifyContent="center" alignItems="center">
        {listOfResults}
      </Grid>
    </>
  );
};
