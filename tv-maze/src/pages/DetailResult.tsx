import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { callToApiDetails, ResultMapped } from "../service/api.service";
import { store } from "../service/redux/store";

import { addToPreferList, removeToPreferlist } from "../service/firebase/firebase.db";

export const DetailResult = () => {
    const { id } = useParams();
    const [resultData, setResultData] = useState<ResultMapped>();
    const currentUser = useContext(AuthContext);
    const [addToPrefer, setAddToPrefer] = useState(false);
    const [keyShow, setKeyShow] = useState("");
    const navigate = useNavigate();

    const { uid } = currentUser;

    useEffect(() => {
        callToApiDetails(id!).then((response) => {
            setResultData(response);
        });
    }, []);

    useEffect(() => {
        const reduxStore = store.getState();
        const { showsList } = reduxStore.showsListReducer;
        for (const key in showsList) {
            if (showsList[key] === Number(id)) {
                if (!keyShow) {
                    setAddToPrefer(true)
                }
                setKeyShow(key);
            }
        }
    }, [addToPrefer]);

    return (
        <>
            <Button onClick={() => navigate(-1)}>Home</Button>
            <Grid style={{ marginTop: "100px" }} item>
                <Card>
                    <CardMedia component="img" height="140" width="100" image={resultData?.image?.medium} />
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
                        {!addToPrefer && (
                            <Button
                                onClick={() => {
                                    setAddToPrefer(true);
                                    addToPreferList(uid, resultData?.id!);
                                }}
                            >
                                + Add to Prefer List
                            </Button>
                        )}
                        {addToPrefer && (
                            <Button
                                onClick={() => {
                                    setAddToPrefer(false);
                                    removeToPreferlist(uid, keyShow);
                                }}
                            >
                                Dismiss to Prefer List
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
};
