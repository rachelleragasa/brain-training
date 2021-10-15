import React, { useContext, useEffect, useState } from "react"

import Button from "../components/Button/Button"
import { GlobalContext } from "../contexts/globalContext";

const Play = () => {
    const { totalCorrect, setTotalCorrect, totalWrong, setTotalWrong } = useContext(GlobalContext);

    const [charSequence, setCharSequence] = useState('');
    const [charIndex, setCharIndex] = useState(null);

    let timeout = 0;

    const getRandomSequence = (length) => {
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';

        for (let i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }

        setCharSequence(result);
        return result;
    }

    const displayRandomSequence = () => {
        let sequence = getRandomSequence(15);
        console.log(sequence);

        const charElement = document.getElementById('display-character');

        for (let i = 0; i < sequence.length; i++) {
            timeout = setTimeout(() => {
                charElement.classList.remove('border-green-500', 'border-4');
                charElement.classList.remove('border-red-500', 'border-4');
                setCharIndex(i);
                charElement.textContent = sequence.charAt(i);
            }, 3000 * i);

        }
    }

    const validateCharPosition = (i, seq) => {
        let currentPosition = seq.charAt(i);
        let twoPreviousPositions = seq.charAt(i - 2);

        const charElement = document.getElementById('display-character');

        if (currentPosition === twoPreviousPositions) {
            charElement.classList.add('border-green-500', 'border-4');
            setTotalCorrect(totalCorrect + 1);
        } else {
            charElement.classList.add('border-red-500', 'border-4');
            setTotalWrong(totalWrong + 1);
        }

        if (totalWrong >= 2) {
            clearTimeout(timeout);
            console.log('inside totalWrong')
        }
        console.log(`incorrect: ${totalWrong}`);
        console.log(`correct: ${totalCorrect}`);
    }

    useEffect(() => {
        displayRandomSequence();
    },[]);

    return (
        <section>
            <div id="display-character" className="text-9xl text-center bg-purple-300 mb-5"></div>
            <Button text="Press here" handleClick={() => validateCharPosition(charIndex, charSequence)} className="bg-yellow-500 hover:bg-purple-300 hover:text-white" />
        </section>
    )
}

export default Play