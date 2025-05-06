
import { createContext, useState , useContext } from "react";
const UserConext = createContext(undefined);

export const UserProvider = ({children})=>{
    const [user]= useState({
        name: "Munawar Abbas",
        email: "golden3@gmail.com",
        dob : "20-09-2004"
    });
     return <UserConext.Provider value={{user}}>
         {children}
     </UserConext.Provider>
};
export const UseUser = ()=> useContext(UserConext);
