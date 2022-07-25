import React from 'react';
import ButtonStyle from "../../UI/Button/ButtonStyle";

function Tbody({user,removeUser}) {
    return (
        <tbody>
        {user.map((val,index)=>(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{val.firstName}</td>
                <td>{val.age}</td>
                <td>{val.job}</td>
                <td>
                    <ButtonStyle onClick={()=>removeUser(val)} className="btn btn-danger">Delete</ButtonStyle>
                </td>
            </tr>
        ))}
        </tbody>
    );
}

export default Tbody;