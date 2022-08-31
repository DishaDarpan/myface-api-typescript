import React ,{useState, useEffect} from 'react';
import {PostModel} from 'C:/Training1/MYFACE(REACT)/myface-api-typescript/src/models/api/postModel';

function PostsPage(){

    const [postList, setPostList] = useState<PostModel>()

    useEffect(() => {
        fetch("http://localhost:3001/posts").then(response => response.json()).then(data => setPostList(data));
    }, [])

    if(!postList){
        return <div>No Data Found!</div>
    }
    
    return (
        <h1>Posts Page</h1>
    )
}
export default PostsPage;