import React, {useState} from 'react';

function ShowHide(props) {
    const [toggle,setToggle]=useState(true)
    const uzgar=()=>{
        setToggle(!toggle)
    }
    return (
        <div className="col-md-4">
            <div className="d-flex justify-content-between">
                <button onClick={uzgar} className="btn btn-primary">
                    {toggle ? "Show" : "Hide"}
                </button>
                {toggle ? <div>Ko'rindi</div> : ""}
            </div>
        </div>
    );
}

export default ShowHide;