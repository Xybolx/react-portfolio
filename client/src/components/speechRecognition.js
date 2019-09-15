import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import useSpeechRecognition from './useSpeechRecognition';

const SpeechRecognition = props => {
    const [value, setValue] = useState('');
    const [isAbout, setIsAbout] = useState(false);
    const [isContact, setIsContact] = useState(false);
    const [isPortfolio, setIsPortfolio] = useState(false);

    const onEnd = () => {
        stop();
    };

    const onResult = (result) => {
        setValue(result);
        if (result === "about") {
            setIsAbout(true);
            setIsContact(false);
            setIsPortfolio(false);
        }
        if (result === "contact") {
            setIsContact(true);
            setIsAbout(false);
            setIsPortfolio(false);
        }
        if (result === "portfolio") {
            setIsPortfolio(true);
            setIsContact(false);
            setIsAbout(false);
        }
    };

    const { listen, stop, supported } = useSpeechRecognition({ onResult, onEnd });

    useEffect(() => {
        window.addEventListener("load", () => {
            listen();
        });
        return window.removeEventListener("load", () => {
            stop();
        });
    }, [listen, stop]);

    if (isAbout) {
        return <Redirect to="/" />
    }
    if (isContact) {
        return <Redirect to="/contact" />
    }
    if (isPortfolio) {
        return <Redirect to="/portfolio" />
    }
    return (
        <>
            <form style={{ display: "none" }} id="speech-recognition-form">
                {!supported && (
                    <p>Oh no, it looks like your browser doesn&#39;t support Speech Recognition.</p>
                )}
                {supported && (
                    <>
                        <textarea
                            id="transcript"
                            name="transcript"
                            placeholder="Waiting to take notes ..."
                            value={value}
                            rows={3}
                            disabled
                        />
                    </>
                )}
            </form>
        </>
    );
};

export default SpeechRecognition;