import React from 'react';

function SelectStyle({options,defaultValue,value,onChange,...props}) {
    return (
        <select onChange={e=>onChange(e.target.value)} value={value} {...props}>
            <option disabled>{defaultValue}</option>
            {options.map(opt=>(
                <option key={opt.value} value={opt.value} >{opt.name}</option>
            ))}
        </select>
    );
}

export default SelectStyle;