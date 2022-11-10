import { createContext, useState } from "react";
let IdContext = createContext();

const ContextMusicApi = ({ children }) => {
    const [getContextID, setContextID] = useState("632531170");
    let changeContextID = (e) => {
        setContextID(e);
    };
    const [getContextSearch, setContextSearch] = useState();
    let changeContextSearch = (e) => {
        setContextSearch(e);
    };
    return (
        <IdContext.Provider value={{
            getContextID,
            changeContextID,
            getContextSearch,
            changeContextSearch
        }}>
            {children}
        </IdContext.Provider>
    );
};

export { ContextMusicApi, IdContext };
