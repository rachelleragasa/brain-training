import React, { useContext } from "react"

import { GlobalContext } from "../contexts/globalContext";

const Results = () => {
    const { playerName, totalWrong, totalCorrect } = useContext(GlobalContext);
    return (
        <>
            <h1 className="text-5xl font-bold text-blue-500 mb-5">{`Thanks ${playerName} The results are in...`}</h1>
            <div className="flex">
                <div className="w-1/2 bg-red-500 m-1 text-3xl text-center p-4">
                    <h2 className="text-white">Incorrect</h2>
                    <h3 className="text-5xl font-bold text-white">{totalWrong}</h3>
                </div>
                <div className="w-1/2 bg-green-500 m-1 text-3xl text-center p-4">
                    <h2 className="text-white">Correct</h2>
                    <h3 className="text-5xl font-bold text-white">{totalCorrect}</h3>
                </div>
            </div>
        </>
        )
}

export default Results