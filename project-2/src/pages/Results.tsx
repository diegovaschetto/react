import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ResultsMapped } from "../api/allResults";
import { callToApi } from "../api/allResults";
import { AllResults } from "../components/AllResults";
import { BackHome } from "../components/BackHome";

export const Results = ()=>{

    const {results} = useParams()

    const [allResults, setAllResults] = useState<any>([]);
    useEffect(()=> {
        callToApi(results!).then((mappedData:ResultsMapped[]) => setAllResults(mappedData));
    }
    ,[])
    

    return(<>
    <BackHome/>
    <AllResults allResults={allResults}/></>)
}