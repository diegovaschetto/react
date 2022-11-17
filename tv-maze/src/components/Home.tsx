import { AuthContext } from "./AuthProvider";

export const Home =()=> {
  return (

    <AuthContext.Consumer>
      {current=> (<p>{current.uid}</p>)}
    </AuthContext.Consumer>

  )
}
