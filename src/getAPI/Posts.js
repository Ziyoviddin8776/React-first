import React from 'react';

function Posts({dataPost,removePost}) {
    return (
        <>
            {dataPost.map(val=>(
                <div className="col-md-4 my-2 " key={val.id}>
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="text-center">{val.title}</h4>
                        </div>
                        <div className="card-body">
                            <div>{val.body}</div>
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