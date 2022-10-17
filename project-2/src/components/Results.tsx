import { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Grid } from "@mui/material";
import Container from '@mui/material/Container';

interface propsType {
    respJSON: singleResult[];
    action: (id: number) => void;
}

interface singleResult {
    show: {
        id: number;
        name: string;
        url: string;
        image: {
            medium: string;
        };
    };
}

class Results extends Component<propsType> {
    constructor(props: propsType) {
        super(props);
    }
    render = () => {
        const { respJSON, action } = this.props;
        const singleResult = respJSON.map((current: singleResult, index: number) => (
            <Card sx={{ minWidth: '20%' }} key={index}>
                <CardActionArea>
                    <CardMedia component="img" height="140" image={current.show.image.medium} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {current.show.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <a href={current.show.url}>Visit the Website of the show</a>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        onClick={() => {
                            action(current.show.id);
                        }}
                        variant="outlined"
                    >
                        More Details
                    </Button>
                </CardActions>
            </Card>
        ));
        return (
            <>
            <Container maxWidth="xl">
                <Grid container   direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ flexWrap: 'wrap' }}
                    rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {singleResult}
                </Grid>
            </Container>
            </>
        );
    };
}

export default Results;
