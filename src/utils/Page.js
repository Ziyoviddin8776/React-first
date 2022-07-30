export const getPageCount=(totalCount,limit)=>{
    return Math.ceil(totalCount/limit)
}

export const getPageArray=(pageArr)=>{
    let res=[];
    for(let i=0;i<pageArr;i++){
        res.push(i+1)
    }
    return res
}