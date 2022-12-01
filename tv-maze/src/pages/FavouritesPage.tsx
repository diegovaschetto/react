import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { DetailResult } from "../components/DetailResult";
import { RootState, store } from "../service/redux/store";

export const FavouritesPage = () => {
    const [keyArr, setKeyArr] = useState<any>([]);
    const showsList = useSelector((state: RootState) => {
        return state.showsListReducer.showsList;
    });

    useEffect(() => {
        let keys = [];
        for (const key in showsList) {
            if(key === "default"){
                setKeyArr(keys);
                return        
            }
            keys.push(showsList[key]);
        }
        setKeyArr(keys);
    }, [showsList]);

    const shows = keyArr.map((show: string, index: number) => <DetailResult key={index} id={show} />);
    return <>{shows}</>;
};
