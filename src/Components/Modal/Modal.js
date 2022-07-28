import React from 'react';
import classess from "./modal.module.css"
function Modal({children,modal,setModal}) {
    const modalClasses=[classess.myModal]

    if(modal){
        modalClasses.push(classess.active)
    }
    return (
        <div onClick={()=>setModal(false)} className={modalClasses.join(" ")}>
            <div onClick={e=>e.stopPropagation()} className={classess.myModalContent}>
                {children}
            </div>
        </div>
    );
}

export default Modal;