import React from 'react';

function InputStyle({...props}) {
    return (
        <input className="form-control my-2" {...props}/>
    );
}

export default InputStyle;