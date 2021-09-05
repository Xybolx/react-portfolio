import React, { useState } from "react";

const Beach = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    const [mAdded, setMAdded] = useState(false);

    const toggleWaves = () => {
        const waves = document.getElementById('waves');
        switch (true) {
            case isPlaying:
                setIsPlaying(false);
                waves.pause();
                break;
            case !isPlaying:
                setIsPlaying(true);
                waves.volume = .50;
                waves.loop = true;
                waves.play();
                break;
            default:
                break;
        }
    };

    const playSax = () => {
        const sax = document.getElementById('sax');
        sax.volume = .50;
        setMAdded(true);
        sax.play()
            .then(() => setMAdded(false))
            .catch(err => console.log(err));
    };

        return (
            <div>
                <br />
                <div className="jumbotron jumbotron-fluid">
                    <h1>Tempest Beach</h1>
                    <h2 style={{ color: "red" }}>Private! Keep Out!</h2>
                    <button className={ isPlaying ? "btn btn-danger" : "btn btn-success"} onClick={ toggleWaves }><i className="fas fa-water"></i> { isPlaying ? "Stop Waves" : "Start Waves" }</button>
                    <audio id="waves" src="waves.mp3"></audio>
                    <audio id="sax" src="sax.mp3"></audio>
                </div>
                <button className={ !mAdded ? "btn btn-warning mb-3" : "btn btn-success mb-3"} onClick={ playSax }><i className="far fa-hand-paper"></i> Add Suntan Oil</button>
                <img style={{ height: "auto", width: 500 }} className="img-fluid" src="beach.gif" alt="" />
            </div>
        );
    };

export default Beach;