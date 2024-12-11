import { createContext } from "react";
import { useContext } from "react";

export const userContext = createContext(undefined)

export const useUserContext = function(){
    const user = useContext(userContext);
    if(user === undefined){
        throw new Error("Unvailed Data")
    }
    return user
}