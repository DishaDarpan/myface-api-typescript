import React, { useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom";



interface UserModel {
    id: number;
    name: string;
    username: string;
    profileImageUrl: string;
    coverImageUrl: string;
    email: string;
    posts: PostModel[];
    likes: PostModel[];
    dislikes: PostModel[];
}

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

function UserProfile() {
    const {userId} = useParams() as {userId: string};
    const [data, setData] = useState<UserModel>();

    useEffect(
        () => {
            fetch(`http://localhost:3001/users/${userId}`)
                .then(response => response.json())
                .then(data => setData(data));
        }, []
    );
console.log(data)
    return (<>
        {/* <a href={`/users/${data?.id}`}> */}
        <div key={data?.id}>
            <img src={data?.coverImageUrl} />
            <h3>{data?.name}</h3>
            <h3>{data?.username}</h3>
            <h3>{data?.email}</h3>
            <img src={data?.profileImageUrl} />
            <div>{data?.posts.map((post) => {
                return (
                    <div key={post.id}>
                        <h3>{post.createdAt}</h3>
                        <img src={post.imageUrl} />
                        <h3>{post.message}</h3>
                    </div>)
            })

            }</div>
        </div>
        {/* </a> */}
    </>)
}

export default UserProfile;