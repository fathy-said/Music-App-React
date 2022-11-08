import { createContext, useState } from "react";
let IdContext = createContext();

const ContextApi = ({ children }) => {
    const [getContextID, setContextID] = useState("632531170");
    let changeContextID = (e) => {
        setContextID(e);
    };
    return (
        <IdContext.Provider value={{ getContextID, changeContextID }}>
            {children}
        </IdContext.Provider>
    );
};

export { ContextApi, IdContext };
