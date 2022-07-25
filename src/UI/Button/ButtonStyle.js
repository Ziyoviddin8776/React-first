import React from 'react';

function ButtonStyle({children,...props}) {
    return (
        <button {...props}>
            {children}
        </button>
    );
}

export default ButtonStyle;