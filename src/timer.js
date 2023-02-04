 import React from 'react';

function TimerConponent(){
    const [ time, setTime ]  = React.useState(0);

    function PlusTime(){
        setTime(time+1)
    }
    function ReduceTime(){
        setTime(time-1)
    }

    return(
        <div>
            <h3> {time}초</h3>
            <button onClick={PlusTime}>1초씩 늘어나요</button>
            <button onClick={ReduceTime}>1초씩 줄어들어요</button>
        </div>
    )
}


export default TimerConponent;