import React, { createContext, useState } from "react"

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [playerName, setPlayerName] = useState('');
    let [totalCorrect, setTotalCorrect] = useState(0);
    let [totalWrong, setTotalWrong] = useState(0);

    return (
        <GlobalContext.Provider value={{playerName, setPlayerName, totalCorrect, setTotalCorrect, totalWrong, setTotalWrong}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider