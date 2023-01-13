import { Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../service/redux/store";
import { DetailResult } from "../components/DetailResult";

export const NowWatching = () => {
    const watchingList = useSelector((state: RootState) => state.showsListReducer.watching);

    return (
        <>
            {watchingList && "default" in watchingList ? (
                <Alert severity="info">Al momento non stai guardando nulla!</Alert>
            ) : (
                <DetailResult
                    id={Object.values(watchingList)[0]}
                    watching={Object.values(watchingList)}
                    keyWatching={Object.keys(watchingList)[0]}
                />
            )}
        </>
    );
};
