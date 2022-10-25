import { Link, useNavigate } from "react-router-dom"

export const BackHome =()=> {
    const navigate = useNavigate()
    return(<>
    <button onClick={()=>navigate(-1)}>Indietro</button>
    <Link to="/">Torna alla Home</Link></>)
}