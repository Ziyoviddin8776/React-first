import React, {useState} from 'react';
import ShowHide from "../ShowHide/ShowHide";
import InputVal from "../InputVal/InputVal";

function IncDenc(props) {
    const [count,setCount]=useState(0)

    const plus=()=>{
        setCount(prev=>prev+1)
    }
    const minus=()=>{
        setCount(prev=>prev-1)
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-4">
                    <h1 className="text-center">{count}</h1>
                    <div className="d-flex justify-content-between">
                        <button onClick={minus} className="btn btn-danger">Minus</button>
                        <button onClick={plus} className="btn btn-success">Plus</button>
                    </div>
                </div>
                <ShowHide/>
                <InputVal/>
            </div>
        </div>
    );
}

export default IncDenc;