import React, { useState, useEffect } from 'react';
import useSpeechRecognition from './useSpeechRecognition';

const SpeechRecognition = props => {
    const [value, setValue] = useState('');

    const [about, setAbout] = useState(false);

    const [contact, setContact] = useState(false);

    const [portfolio, setPortfolio] = useState(false);

    const onEnd = () => {
        stop();
    };

    const onResult = (result) => {
        setValue(result);
        if (result === "about") {
            setAbout(true);
        }
        if (result === "contact") {
            setContact(true);
        }
        if (result === "portfolio") {
            setPortfolio(true);
        }
    };

    useEffect(() => {
        if (about) {
            const aboutTimer = setTimeout(setAbout(false), 500);
            window.location = "/";
            return () => {
                clearTimeout(aboutTimer);
            };
        }
        if (contact) {
            const contactTimer = setTimeout(setContact(false), 500);
            window.location = "/contact";
            return () => {
                clearTimeout(contactTimer);
            };
        }
        if (portfolio) {
            const portfolioTimer = setTimeout(setPortfolio(false), 500);
            window.location = "/portfolio";
            return () => {
                clearTimeout(portfolioTimer);
            };
        }

    }, [about, contact, portfolio]);

    const { listen, stop, supported } = useSpeechRecognition({ onResult, onEnd });

    useEffect(() => {
        window.addEventListener("load", () => {
            listen();
        });
        return window.removeEventListener("load", () => {
            stop();
        });
    }, [listen, stop]);

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