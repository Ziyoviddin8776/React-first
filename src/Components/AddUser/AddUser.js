import React from 'react';
import InputStyle from "../../UI/Input/InputStyle";
import ButtonStyle from "../../UI/Button/ButtonStyle";

function AddUser({post,setPost,addUser}) {
    return (
        <form>
            <InputStyle value={post.firstName} onChange={e=>setPost({...post,firstName:e.target.value})} placeholder="FirstName" type="text"/>
            <InputStyle value={post.age} onChange={e=>setPost({...post,age:e.target.value})} placeholder="Age" type="number"/>
            <InputStyle value={post.job} onChange={e=>setPost({...post,job:e.target.value})} placeholder="Job" type="text"/>
            <ButtonStyle onClick={addUser} className=" btn btn-success w-100">Add User</ButtonStyle>
        </form>
    );
}

export default AddUser;