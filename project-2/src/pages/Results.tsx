import { useState } from "react";
import { useParams } from "react-router-dom";
import { ResultsMapped } from "../api/allResults";
import { callToApi } from "../api/allResults";
import { AllResults } from "../components/AllResults";

export const Results = ()=>{

    const {results} = useParams()

    const [allResults, setAllResults] = useState<any>([]);
    callToApi(results!).then((mappedData:ResultsMapped[]) => setAllResults(mappedData));
    

    return(<>
    <AllResults allResults={allResults}/></>)
}