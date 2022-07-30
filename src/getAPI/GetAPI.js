import React, {useEffect, useState} from 'react';
import getAllPosts from "../API";
import Posts from "./Posts";
import Loading from "../UI/Loader/Loading";
import {useFetching} from "../hooks/useFetching";
import {getPageArray, getPageCount} from "../utils/Page";
import ButtonStyle from "../UI/Button/ButtonStyle";
import Pagination from "../UI/Pagination/Pagination";

function GetAPI(props) {
    const [dataPost,setDataPost]=useState([])
    const [totalPage,setTotalPage]=useState(0)
    const [limit,setLimit]=useState(10)
    const [page,setPage]=useState(1)


    const changePage=(page)=>{
        setPage(page)
    }

    const [getAPI,isLoading,postError]=useFetching(async()=>{
        const response=await getAllPosts.getAPI(limit,page)
        setDataPost(response.data)
        const totalCount=response.headers['x-total-count']
        setTotalPage(getPageCount(totalCount,limit))
    })

    useEffect(()=>{
        getAPI()
    },[page])

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
                <Pagination page={page} changePage={changePage} totalPage={totalPage}/>
            </div>
        </div>
    );
}

export default GetAPI;