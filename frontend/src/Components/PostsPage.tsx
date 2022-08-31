import React ,{useState, useEffect} from 'react';

interface PostUserModel {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface PostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: string;
    postedBy: PostUserModel;
    likedBy: PostUserModel[];
    dislikedBy: PostUserModel[];
}

interface PostModelReturn {
    results: PostModel[],
    next: string,
    previous: string,
    total: number,
}

function PostsPage(){

    const [data, setData] = useState<PostModelReturn>();

    useEffect(
        () => {
            fetch("http://localhost:3001/posts")
                .then(response => response.json())
                .then(data => setData(data));
        }, []
    );

    return (<>
        {data?.results.map((post) => {
            return (
                <div key={post.id}>
                    <h3>{post.postedBy.name}</h3>
                    <img src={post.imageUrl}/>
                    <h3>{post.message}</h3> 
                </div>)
        })
            
        }</>)
}
export default PostsPage;