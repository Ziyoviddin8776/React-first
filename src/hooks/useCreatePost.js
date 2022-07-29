import {useMemo} from "react";


export const useSortPost=(user,sort)=>{
    const sortedUsers=useMemo(()=>{
        if(sort){
            return [...user].sort((a,b)=>a[sort].localeCompare(b[sort]))

        }
        return user
    },[sort,user])
    return sortedUsers;
}

export const usePosts=(user,sort,query)=>{
    const sortedUsers=useSortPost(user,sort)
    const sortAndSearchUsers=useMemo(()=>{
        return sortedUsers.filter(post=>post.firstName.toLowerCase().includes(query.toLowerCase()))
    },[sortedUsers,query])
    return sortAndSearchUsers;
}