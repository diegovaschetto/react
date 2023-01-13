import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { callToApiDetails, ResultMapped } from "../service/api.service";
import { RootState } from "../service/redux/store";

import {
    addNowWatching,
    addToPreferList,
    removeNowWatching,
    removeToPreferlist,
} from "../service/firebase/firebase.db";
import { useSelector } from "react-redux";

interface PropsType {
    id: number;
    page?: string;
    watching?: number[];
    keyWatching?: string;
}

export const DetailResult = ({ id, page, watching, keyWatching }: PropsType) => {
    const [resultData, setResultData] = useState<ResultMapped>();
    const [keyShows, setKeyShows] = useState("");
    const [addToPrefer, setAddToPrefer] = useState(false);

    const currentUser = useContext(AuthContext);
    const { uid } = currentUser;

    let dom = new DOMParser().parseFromString(resultData?.summary!, "text/html");
    let summary = dom.body.textContent!;

    const showsList = useSelector((state: RootState) => {
        return state.showsListReducer?.showsList;
    });

    useEffect(() => {
        callToApiDetails(id).then((response) => {
            setResultData(response);
        });
    }, []);

    useEffect(() => {
        for (const key in showsList) {
            if (showsList[key] === Number(id)) {
                setAddToPrefer(true);
                setKeyShows(key);
                return;
            } else {
                setAddToPrefer(false);
            }
        }
    }, [showsList]);

    return (
        <>
            <Card
                sx={{
                    mx: "auto",
                    width: {
                        xs: "90%",
                        sm: "80%",
                        md: 1 / 3,
                    },
                }}
            >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {resultData?.name}
                    </Typography>
                    <CardMedia
                        component="img"
                        height="140"
                        width="100"
                        image={
                            resultData?.image?.medium
                                ? resultData?.image?.medium
                                : "https://placeholder.pics/svg/300/DEDEDE/555555/Not%20Found"
                        }
                    />
                    <Typography gutterBottom variant="overline" component="div">
                        {resultData?.type}
                    </Typography>
                    <Typography gutterBottom component="p">
                        {summary !== "null" ? summary : <p>Summary not avaible</p>}
                    </Typography>
                </CardContent>
                <Box sx={{ textAlign: "center", mb: "30px" }}>
                    {!addToPrefer && page === "details" && (
                        <Button
                            variant="contained"
                            sx={{ width: { xs: "80%", md: "50%" } }}
                            onClick={() => uid && addToPreferList(uid, resultData?.id!)}
                        >
                            Add to favourite
                        </Button>
                    )}
                    {addToPrefer && page === "details" && (
                        <Button
                            sx={{ width: { xs: "80%", md: "50%" } }}
                            variant="contained"
                            onClick={() => uid && removeToPreferlist(uid, keyShows)}
                        >
                            Remove from favorite
                        </Button>
                    )}
                    {watching && watching[0] !== Number(id) && (
                        <Button
                            sx={{ width: { xs: "80%", md: "50%" } }}
                            variant="contained"
                            className="!mt-3"
                            disabled={watching && watching.length === 1}
                            onClick={() => uid && addNowWatching(uid, resultData?.id!)}
                        >
                            Start to watch
                        </Button>
                    )}
                    {watching && watching[0] === Number(id) && (
                        <Button
                            sx={{ width: { xs: "80%", md: "50%" } }}
                            variant="contained"
                            className="!mt-3"
                            onClick={() => uid && keyWatching && removeNowWatching(uid, keyWatching)}
                        >
                            Remove from watch
                        </Button>
                    )}
                </Box>
            </Card>
        </>
    );
};
