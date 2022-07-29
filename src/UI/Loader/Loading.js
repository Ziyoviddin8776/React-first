import React from 'react';
import classes from "./loading.module.css"

function Loading(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className={classes.loading}>

            </div>
        </div>
    );
}

export default Loading;