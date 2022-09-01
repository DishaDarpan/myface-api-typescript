import React ,{useState, useEffect} from 'react';
import './PostsPage.scss'

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

    return (<div className='post-list'>
        {data?.results.map((post) => {
            return (
                <div className="post-card" key={post.id}>
                    <h3>{post.postedBy.name}</h3>
                    <img src={post.imageUrl}/>
                    <h4>{post.message}</h4>
                    <p>{post.createdAt}</p>
                    <div className="post-react-buttons">
                        <button className="like-button button">&#128077;</button>
                        <button className="dislike-button button">&#128078;</button>
                    </div>
                </div>)
        })
            
        }</div>)
}
export default PostsPage;