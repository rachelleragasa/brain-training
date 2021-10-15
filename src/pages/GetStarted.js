import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { GlobalContext } from "../contexts/globalContext"

const GetStarted = () => {
    const { playerName } = useContext(GlobalContext);

    return (
        <>
            <h1 className="text-5xl font-bold mb-5 text-blue-500">{`Hello ${playerName}!`}</h1>
            <div className="mb-5">
                <p className="text-xl">In this task, you will see letters.</p>
                <p className="text-xl">Each letter is shown for a few seconds. You need to decide if you saw the same letter
                    2 letters ago. This is called a n=2-back test.
                </p>
            </div>
            <div className="mb-5">
                <p className="text-xl">If you saw the same letter 2 letters ago, you press the button. If you did it correctly,
                    you see "green" colours around the letter.
                </p>
                <p className="text-xl">If you press the button when you should not press it, you will see "red" around the letter.</p>
            </div>
            <Link to="/play" className="bg-yellow-500 rounded-full p-4 w-full text-lg text-center hover:bg-purple-300 hover:text-white">Play now</Link>
        </>
    )
}

export default GetStarted