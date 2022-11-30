import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ResultsMapped } from "../service/api.service";

export const ResultsList = (props: any) => {
  const { allResults } = props;

  const listOfResults = allResults.map((show: ResultsMapped, key: number) => {
    const detailsSegment = show.id.toString();
    return (
      <Grid item xs={10} sm={6} md={3}>
        <Link to={`./${detailsSegment}`} key={key}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia component="img" image={show.image.medium} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {show.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" role={"button"}>
                Dettagli Show
              </Button>
            </CardActions>
          </Card>
        </Link>
      </Grid>
    );
  });
  return (
    <>
      <Grid
        container
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{my:2}}
      >
        {listOfResults}
      </Grid>
    </>
  );
};
