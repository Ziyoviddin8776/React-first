import React, {useState} from 'react';
import Thead from "./Thead";
import Tbody from "./Tbody";
import ButtonStyle from "../../UI/Button/ButtonStyle";
import InputStyle from "../../UI/Input/InputStyle";

function User(props) {
    const [user,setUser]=useState([
        {
            id:1,
            firstName:"Jaloliddin",
            age:21,
            job:"Student"
        },
        {
            id:2,
            firstName:"Kamoliddin",
            age:19,
            job:"Doctor"
        },
        {
            id:3,
            firstName:"Umid",
            age:20,
            job:"Sotuvchi"
        }
    ])

   const [post,setPost]=useState({
       firstName:"",
       age:"",
       job:"",
   })
    const addUser=(e)=>{
        e.preventDefault();
        setUser([...user,{...post,id:Date.now()}])
    }

    const removeUser=(post)=>{
        setUser(user.filter(s=>s.id!==post.id))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-3">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">Add User</h1>
                        </div>
                        <div className="card-body">
                            <form>
                                <InputStyle value={post.firstName} onChange={e=>setPost({...post,firstName:e.target.value})} placeholder="FirstName" type="text"/>
                                <InputStyle value={post.age} onChange={e=>setPost({...post,age:e.target.value})} placeholder="Age" type="number"/>
                                <InputStyle value={post.job} onChange={e=>setPost({...post,job:e.target.value})} placeholder="Job" type="text"/>
                                <ButtonStyle onClick={addUser} className=" btn btn-success w-100">Add User</ButtonStyle>
                            </form>
                        </div>
                        <div className="card-footer">
                            <table className="table table-striped table-bordered text-center">
                                <Thead/>
                                <Tbody removeUser={removeUser} user={user}/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;