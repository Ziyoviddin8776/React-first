import React from 'react';
import ButtonStyle from "../../UI/Button/ButtonStyle";
// import {CSSTransition, TransitionGroup} from "react-transition-group";

function Tbody({user,removeUser}) {
    if(!user.length){
        <h6 className="text-center">Not Found</h6>
    }
    return (
        <div>
            {/*<TransitionGroup>*/}
                {user.map((val,index)=>(
                    // <CSSTransition
                    //     key={val.id}
                    //     timeout={500}
                    //     classNames="item">
                        <div className="d-flex justify-content-between border p-2 my-2" key={val.id}>
                            <div>{index+1}</div>
                            <div>{val.firstName}</div>
                            <div>{val.job}</div>
                            <div>
                                <ButtonStyle onClick={()=>removeUser(val)} className="btn btn-danger">Delete</ButtonStyle>
                            </div>
                        </div>
                    // </CSSTransition>
                ))}
            {/*</TransitionGroup>*/}
        </div>
    );
}

export default Tbody;