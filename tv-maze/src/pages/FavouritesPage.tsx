import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { DetailResult } from "../components/DetailResult";
import { RootState } from "../service/redux/store";

export const FavouritesPage = () => {
  const [idArr, setIdArr] = useState<number[]>([]);
  const showsList = useSelector((state: RootState) => {
    return state.showsListReducer.showsList;
  });

  useEffect(() => {
    let keys:number[] = [];
    for (const key in showsList) {
      if (key === "default") {
        return;
      }
      keys.push(showsList[key]!);
    }
    setIdArr(keys);
  }, [showsList]);

  const shows = idArr.map((show: number , index: number) => (
    <DetailResult key={index} page={"fav"} id={show} />
  ));
  return (
    <>
    {shows.length? <div className="py-10 space-y-5 pb-20">{shows}</div> :  <div
          className="p-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
          role="alert"
        >
          Nessun preferito aggiunto
        </div> }
      
    </>
  );
};
