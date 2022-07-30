import React from 'react';

function Posts({dataPost,removePost}) {
    return (
        <>
            {dataPost.map(val=>(
                <div className="col-md-4 my-2 " key={val.id}>
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="text-center">{val.id}.{val.title.slice(0,1).toUpperCase()+val.title.slice(1)}</h4>
                        </div>
                        <div className="card-body">
                            <div>{val.body.slice(0,1).toUpperCase()+val.body.slice(1)}</div>
                        </div>
                        <div className="card-footer text-end">
                            <button onClick={()=>removePost(val)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </>

    );
}

export default Posts;