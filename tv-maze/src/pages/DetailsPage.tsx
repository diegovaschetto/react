import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailResult } from "../components/DetailResult";
import { RootState } from "../service/redux/store";


export const DetailsPage = () => {
    const { id } = useParams();
    const [idArr, setIdArr] = useState<number[]>([]);

    const watchingList = useSelector((state: RootState) => {
        return state.showsListReducer.watching;
      });
    
      useEffect(() => {
        let keys:number[] = [];
        for (const key in watchingList) {
          if (key === "default") {
            setIdArr([])
            return;
          }
          keys.push(watchingList[key]!);
        }
        setIdArr(keys);
      }, [watchingList]);

    return (
        <>
            <DetailResult watching={idArr} id={Number(id)} page={"details"} keyWatching={Object.keys(watchingList)[0]}/>
        </>
    );
};
