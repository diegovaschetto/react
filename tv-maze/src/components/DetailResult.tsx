import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { callToApiDetails, ResultMapped } from "../service/api.service";
import { store } from "../service/redux/store";

import { addToPreferList, removeToPreferlist } from "../service/firebase/firebase.db";

interface PropsType {
    id: string;
}

export const DetailResult = ({ id }: PropsType) => {
    const [resultData, setResultData] = useState<ResultMapped>();
    const [keyShow, setKeyShow] = useState<string>();
    const [addToPrefer, setAddToPrefer] = useState(false);

    const currentUser = useContext(AuthContext);
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
                    setAddToPrefer(true);
                }
                setKeyShow(key);
            }
        }
    }, [addToPrefer]);

    const handleAddShow = () => {
        setAddToPrefer(true);
        addToPreferList(uid, resultData?.id!);
    };

    const handleRemoveShow = () => {
        setAddToPrefer(false);
        removeToPreferlist(uid, keyShow!);
    };

    return (
        <>
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
                        {!addToPrefer && <Button onClick={handleAddShow}>+ Add to Prefer List</Button>}
                        {addToPrefer && <Button onClick={handleRemoveShow}>Dismiss to Prefer List</Button>}
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
};
