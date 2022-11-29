import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { DetailResult } from "../components/DetailResult";

export const DetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    return (
        <>
            <Button onClick={() => navigate(-1)}>Home</Button>
            <DetailResult id={id!} />
        </>
    );
};
