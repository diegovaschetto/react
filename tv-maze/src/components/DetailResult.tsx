import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { callToApiDetails, ResultMapped } from "../service/api.service";
import { RootState } from "../service/redux/store";

import { addToPreferList, removeToPreferlist} from "../service/firebase/firebase.db";
import { useSelector } from "react-redux";

interface PropsType {
    id: string;
}

export const DetailResult = ({ id }: PropsType) => {
    const [resultData, setResultData] = useState<ResultMapped>();
    const [keyShow, setKeyShow] = useState("");
    const [addToPrefer, setAddToPrefer] = useState(false);

    const currentUser = useContext(AuthContext);
    const { uid } = currentUser;

    let dom = new DOMParser().parseFromString(resultData?.summary!, "text/html");
    let summary = dom.body.textContent!;

    const showsList = useSelector((state: RootState) => {
        return state.showsListReducer.showsList;
    });

    useEffect(() => {
        callToApiDetails(id!).then((response) => {
            setResultData(response);
        });
    }, []);

    useEffect(() => {
        for (const key in showsList) {
            if (showsList[key] === Number(id)) {
                setAddToPrefer(true);
                setKeyShow(key);
            } else {
                setAddToPrefer(false);
            }
        }
    }, [showsList]);

    return (
        <>
            <Card
                sx={{
                    my: "30px",
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
                    {!addToPrefer && (
                        <Button
                            variant="contained"
                            sx={{ width: { xs: "80%", md: "50%" } }}
                            onClick={() => addToPreferList(uid, resultData?.id!)}
                        >
                            Add to favourite
                        </Button>
                    )}
                    {addToPrefer && (
                        <Button
                            sx={{ width: { xs: "80%", md: "50%" } }}
                            variant="contained"
                            onClick={() => removeToPreferlist(uid, keyShow!)}
                        >
                            Remove from favorite
                        </Button>
                    )}
                </Box>
            </Card>
        </>
    );
};
