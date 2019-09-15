import React, { useState, useEffect } from 'react';
import useSpeechRecognition from './useSpeechRecognition';

const SpeechRecognition = props => {
    const [value, setValue] = useState('');

    const onEnd = () => {
        stop();
    };

    const onResult = (result) => {
        setValue(result);
        if (result === "about") {
            window.location = "/";
        }
        if (result === "contact") {
           window.location = "/contact";
        }
        if (result === "portfolio") {
            window.location = "/portfolio"
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