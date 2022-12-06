import { useParams } from "react-router-dom";
import { DetailResult } from "../components/DetailResult";


export const DetailsPage = () => {
    const { id } = useParams();
    
    return (
        <>
            <DetailResult id={Number(id)} page={"details"}/>
        </>
    );
};
