import "../css/DrumMachine.css"

const MarkdownPreviewer = () => {

    const letters = {
        'Q': "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        'W': "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        'E': "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        'A': "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        'S': "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        'D': "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        'Z': "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        'X': "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        'C': "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    };

    const clickDrum = (key) => {  
        document.getElementById(key).play()
        document.getElementById("display").innerHTML = key
    }

    document.body.addEventListener("keydown", function (event) {
        clickDrum(event.key.toUpperCase())
    });


    return (
        <div className="app_block">
            <div id="drum-machine">
                <div >
                    { Object.keys(letters).map((key) => 
                    <DrumPad letter={key}  key={key} src={letters[key]} clickDrum={clickDrum} /> ) }
                </div>
                <div className="instructions" id="display">Click or Press Key</div>
            </div>
        </div>

    )
}

const DrumPad = ({ letter , src, clickDrum }) => { 
    return (
        
        <button className="drum-pad" id={'d_' + letter} onClick={() => clickDrum(letter)}> 
            <audio className="clip" src={src}  id={letter} controls>
                Your browser does not support the audio element.
            </audio>
            {letter[0]}
        </button>

    )
}

export default MarkdownPreviewer; 