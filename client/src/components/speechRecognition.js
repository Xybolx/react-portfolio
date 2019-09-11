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
            props.getAbout();
        }
        if (result === "contact") {
            props.getContact();
        }
        if (result === "portfolio") {
            props.getPortfolio();
        }
    };

    const {
        listen,
        stop,
        supported
    } = useSpeechRecognition({ onResult, onEnd });


    useEffect(() => {
        window.addEventListener(
            "mousedown",
            listen()
        )
        return window.removeEventListener("mousedown", null)
    }, [listen]);

    if (props.isAbout) {
        window.location = "/";
    }
    if (props.isContact) {
        window.location = "/contact";
    }
    if (props.isPortfolio) {
        window.location = "/portfolio";
    }
    return (
        <>
            <form style={{ display: "none" }} id="speech-recognition-form">
                <h2>Speech Recognition</h2>
                {!supported && (
                    <p>Oh no, it looks like your browser doesn&#39;t support Speech Recognition.</p>
                )}
                {supported && (
                    <>
                        <p>
                            {`Click 'Listen' and start speaking.
               SpeechRecognition will provide a transcript of what you are saying.`
                            }
                        </p>
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