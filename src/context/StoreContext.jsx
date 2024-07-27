import { createContext } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null); 

const StoreContextProvider = (props) => {

    const contextVaue = {
           food_list
    }

    return (
        <StoreContext.Provider value={contextVaue}>
                  {props.children}           
        </StoreContext.Provider>
    )

}