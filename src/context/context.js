import { useContext, createContext, Children, useState } from "react";

const getContext = createContext();

export const useTheContext = () => {
  const context = useContext(getContext);

  return context;
};


export function TheContext({children}){

   const [theFil, setTheFil] = useState(false);

   

    return(
        <getContext.Provider value={{}}>
            {children}
        </getContext.Provider>
    )
}
