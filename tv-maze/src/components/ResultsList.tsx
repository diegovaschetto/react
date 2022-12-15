import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ResultsMapped } from "../service/api.service";
import { ShowsList } from "../service/redux/showsList.slice";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface PropsType {
  allResults: ResultsMapped[];
  storeKey: Partial<ShowsList>;
}

export const ResultsList = ({ allResults, storeKey }: PropsType) => {
  const listOfResults = allResults.map((show: ResultsMapped, index: number) => {
    let favoriteIcon = <FavoriteBorderIcon />;
    for (const key in storeKey) {
      if (storeKey[key] === show.id) favoriteIcon = <FavoriteIcon />;
    }
    const detailsSegment = show.id.toString();
    return (
      <Grid item xs={10} sm={6} md={3} key={index}>
        <Card variant="outlined">
          <CardActionArea>
            <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography sx={{ display: "inline" }} gutterBottom variant="h5" component="div">
                {show.name}
              </Typography>
              <Tooltip title="Added to Prefer" arrow>
                {favoriteIcon}
              </Tooltip>
            </CardContent>
            <CardMedia
              component="img"
              image={
                show.image.medium ? show.image.medium : "https://placeholder.pics/svg/300/DEDEDE/555555/Not%20Found"
              }
            />
          </CardActionArea>
          <Link to={`/details/${detailsSegment}`}>
            <CardActions>
              <Button size="small" color="primary" role={"button"}>
                More Details
              </Button>
            </CardActions>
          </Link>
        </Card>
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
        sx={{ my: 2 }}
      >
        {listOfResults}
      </Grid>
    </>
  );
};
