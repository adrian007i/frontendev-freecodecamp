import { connect } from "react-redux";
import "../css/Clock.css";
import { breakTime, sessionTime, current, sessionType,breakType, play,reset } from "../actions/ClockAction";
import { useEffect, useState } from "react";

// maps the search field to the properties of the component
const mapStateToProps = state => ({
    breakTime: state.clockReducer.break,
    sessionTime: state.clockReducer.session,
    type: state.clockReducer.type,
    current: state.clockReducer.current,
    play: state.clockReducer.play
});

// allows us to use the onSearchChange function
const matchDispatchToProps = dispatch => ({
    setSessionTime: (value) => dispatch(sessionTime(value)),
    setBreakTime: (value) => dispatch(breakTime(value)),
    setCurrent: (value) => dispatch(current(value)),
    setBreakType: () => dispatch(breakType()),
    setSessionType: () => dispatch(sessionType()),
    setPlay: () => dispatch(play()),
    resetState: () => dispatch(reset())
});

const Clock = (props) => {
    const { breakTime, sessionTime, current, type, play } = props;
    const { setSessionTime, setBreakTime, setCurrent, setSessionType,setBreakType, setPlay, resetState } = props; 
    let  [timer, setTimer] =useState(null);
    let  [color, setColor] =useState("");

    useEffect(() => {
        if (type === "Session") setSessionType();
        if (type === "Break") setBreakType(); 
        
    }, [sessionTime, breakTime]);

    useEffect(()=>{
        pause_play(); 
    },[play])

    // checks on every change of current value
    useEffect(()=>{
        if (type === "Session" && current === 0 ) setBreakType();
        if (type === "Break" && current === 0 ) setSessionType(); 

        if(current === 0){
            document.getElementById("beep").play();
            setColor("");
        }
        if(current === 59)
            setColor("red"); 

    },[current])

    const pause_play = () => { 
        if(play){
            setTimer((timer) => (setInterval(()=>{ 
                setCurrent(); 
                
            },1000)));
        }else if(timer){ 
            clearInterval(timer)
        }
    }

    const changeTime = (event) => {
        if (play) return; 
        const types = event.target.id.split("-");

        if (types[0] === "break") {
            if (types[1] === "increment") setBreakTime(Math.min(breakTime + 1, 60));
            else setBreakTime(Math.max(breakTime - 1, 1));

        } else {
            if (types[1] === "increment") setSessionTime(Math.min(sessionTime + 1, 60));
            else setSessionTime(Math.max(sessionTime - 1, 1));
        }
    }

    const resetTimer = () =>{
        resetState(); 
        if(timer)
            clearInterval(timer)
    }

    const minutes = Math.floor(current / 60);
    const seconds = current - minutes * 60;

    return (

        <div className="app_block"> 
            <div id="clock">
                <h2>25 + 5 Clock</h2>
                <br /><br />
                <div id="controls">
                    <div id="break_length">
                        <span id="break-label">Break</span>
                        <br />

                        <button id="break-increment" className="btn change" onClick={changeTime}>&#8593;</button>
                        <button id="break-decrement" className="btn change" onClick={changeTime}>&#8595;</button>
                        <span id="break-length">{breakTime}</span>
                    </div>
                    <div id="session_length">
                        <span id="session-label" >Session</span>

                        <br />
                        <button id="session-increment" className="btn change" onClick={changeTime}>&#8593;</button>
                        <button id="session-decrement" className="btn change" onClick={changeTime}>&#8595;</button>
                        <span id="session-length">{sessionTime}</span>
                    </div>
                </div>
                <br />

                <div id="clockBox">
                    <div id="timer-label" className={color}><small>{type}</small></div>
                    {/* <b><div id="time-left" className={color}>{minutes < 10 ? "0" : ""}{minutes}:{seconds < 10  ? "0" : ""}{seconds}</div></b> */}
                    
                    <b><div id='time-left'>{minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:{seconds < 10 ? ("0" + seconds).slice(-2) : seconds}</div></b>
                    {/* <b><div id="time-left">{current}</div></b> */}
                </div>
                <br />
                <button className="btn" id="start_stop" onClick={setPlay}>Play/Pause</button>
                <button className="btn" id="reset" onClick={resetTimer} >Reset</button>
                <audio id="beep" style={{display:"none"}} preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
                </div>

        </div>
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(Clock);