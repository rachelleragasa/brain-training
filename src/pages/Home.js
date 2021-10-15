import React, { useContext } from "react"
import { Link } from "react-router-dom"

import Input from "../components/Input/Input"
import { GlobalContext } from "../contexts/globalContext"

const Introduction = () => {
    const { playerName, setPlayerName } = useContext(GlobalContext);

    return (
        <>
            <h1 className="text-5xl font-bold mb-5 text-green-500 text-center">Let's play!</h1>
            <Input
            id="player-name"
            handleChange={(event) => setPlayerName(event.target.value)}
            value={playerName}
            label="Name"
            placeholder="Please enter your name"
            />
            <Link to="/get-started" className="bg-yellow-500 rounded-full p-4 w-full text-lg text-center hover:bg-purple-300 hover:text-white">Next</Link>
        </>
    )
}

export default Introduction