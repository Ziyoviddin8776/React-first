import React, {useEffect, useState} from 'react';
import getAllPosts from "../API";
import Posts from "./Posts";
import Loading from "../UI/Loader/Loading";
import {useFetching} from "../hooks/useFetching";

function GetAPI(props) {
    const [dataPost,setDataPost]=useState([])

    const [getAPI,isLoading,postError]=useFetching(async()=>{
        const response=await getAllPosts.getAPI()
        setDataPost(response.data)
    })

    useEffect(()=>{
        getAPI()
    },[])

    const removePost=(postId)=>{
        const newData=dataPost.filter(val=> val.id!==postId.id)
        setDataPost(newData)
    }

    return (
        <div className="container my-5">
            <div className="row">
                {postError &&
                    <p>{postError}</p>
                }
                {
                    isLoading
                    ? <Loading/>
                        : <Posts dataPost={dataPost} removePost={removePost}/>
                }
            </div>
        </div>
    );
}

export default GetAPI;