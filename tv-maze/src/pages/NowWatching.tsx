import { Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../service/redux/store";
import { DetailResult } from "../components/DetailResult";
import { useEffect, useState } from "react";
import { callToApiDetails } from "../service/api.service";

export const NowWatching = () => {
    const watchingList = useSelector((state: RootState) => state.showsListReducer.watching);
    const watchingTrend = useSelector((state: RootState) => state.showsListReducer.watchingTrend);
    const [trendFilmToPrint, setTrendFilmToPrint] = useState<any>([]);
    const [trendValueToPrint, setTrendValueToPrint] = useState<any>([]);

    async function filterTrends() {
        let trend: any = [];
        for (const key in watchingTrend) {
            if ("default" in watchingTrend[key]) {
                continue;
            }

            trend = [...trend, ...Object.values(watchingTrend[key])];
        }
        let counterTrend: any = {};
        for (const film of trend) {
            await callToApiDetails(film).then((response) => {
                const { name } = response;
                if (counterTrend[name]) {
                    counterTrend[name] += 1;
                } else {
                    counterTrend[name] = 1;
                }
            });
        }

        setTrendFilmToPrint(Object.keys(counterTrend));
        setTrendValueToPrint(Object.values(counterTrend));
    }

    useEffect(() => {
        filterTrends();
    }, [watchingTrend]);

    return (
        <>
            <div className="flex flex-col items-center space-y-3 my-10 md:items-start">
                {trendFilmToPrint.map((current: any, index: number) => (
                    <p key={index}>
                        <span className="text-xl">{current}</span> lo stanno guardando in {trendValueToPrint[index]}{" "}
                        persone
                    </p>
                ))}
            </div>
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
