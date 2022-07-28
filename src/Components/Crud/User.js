import React, {useMemo, useState} from 'react';
import Thead from "./Thead";
import Tbody from "./Tbody";
import FilterAndSearch from "../FilterAndSearch/FilterAndSearch";
import Modal from "../Modal/Modal";
import AddUser from "../AddUser/AddUser";
import ButtonStyle from "../../UI/Button/ButtonStyle";

function User(props) {
    const [user,setUser]=useState([
        {
            id:3,
            firstName:"Umid",
            age:20,
            job:"Sotuvchi"
        },
        {
            id:2,
            firstName:"Kamoliddin",
            age:19,
            job:"Doctor"
        },
        {
            id:1,
            firstName:"Jaloliddin",
            age:21,
            job:"Student"
        },
    ])

    const [post,setPost]=useState({
       firstName:"",
       age:"",
       job:"",
   })

    const [filter,setFilter]=useState({sort:"",query:""})

    const [modal,setModal]=useState(false)

    const sortedUsers=useMemo(()=>{
        if(filter.sort){
            return [...user].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))

        }
        return user
    },[filter.sort,user])

    const sortAndSearchUsers=useMemo(()=>{
        return sortedUsers.filter(post=>post.firstName.toLowerCase().includes(filter.query.toLowerCase()))
    },[sortedUsers,filter.query])

    const addUser=(e)=>{
        e.preventDefault();
        setUser([...user,{...post,id:Date.now()}])
        setModal(false)
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
                            <div className="d-flex justify-content-end">
                                <ButtonStyle onClick={()=>setModal(!modal)} className=" w-50 btn btn-success">Add User</ButtonStyle>
                            </div>
                            <Modal modal={modal} setModal={setModal}>
                                <AddUser post={post} setPost={setPost} addUser={addUser}/>
                            </Modal>

                           <FilterAndSearch filter={filter} setFilter={setFilter}/>
                        </div>
                        <div className="card-footer">
                            {
                                sortAndSearchUsers.length ?
                                    <table className="table table-striped table-bordered text-center">
                                        <Thead/>
                                        <Tbody removeUser={removeUser} user={sortAndSearchUsers}/>
                                    </table>

                                    : <h6 className="text-center">Not Found</h6>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;