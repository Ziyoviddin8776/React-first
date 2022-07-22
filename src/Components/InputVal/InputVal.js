import React, {useState} from 'react';

function InputVal(props) {
    const [inputVal,setInputVal]=useState("")


    return (
        <div className="col-md-4">
            <input className="form-control" value={inputVal} onChange={e=>{
                setInputVal(e.target.value)
            }} type="text"/>
            <h3>{inputVal}</h3>
        </div>
    );
}

export default InputVal;