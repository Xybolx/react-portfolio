import React, { useState, useEffect } from 'react';
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
        }
        if (result === "contact") {
            setIsContact(true);
        }
        if (result === "portfolio") {
            setIsPortfolio(true);
        }
        if (result === "next") {
            props.next();
        }
    };

    const { listen, stop, supported } = useSpeechRecognition({ onResult, onEnd });

    useEffect(() => {
        window.addEventListener(
            "mousedown",
            listen()
        )
        return window.removeEventListener("mousedown", null)
    }, [listen]);

    if (isAbout) {
        window.location = "/";
    }
    if (isContact) {
        window.location = "/contact";
    }
    if (isPortfolio) {
        window.location = "/portfolio";
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