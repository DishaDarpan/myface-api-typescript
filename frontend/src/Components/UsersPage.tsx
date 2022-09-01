import React, {useState, useEffect} from 'react';
import './UsersPage.scss'

interface UserPostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: string;
}

interface UserModel {
    id: number;
    name: string;
    username: string;
    profileImageUrl: string;
    coverImageUrl: string;
    email: string;
    posts: UserPostModel[];
    likes: UserPostModel[];
    dislikes: UserPostModel[];
}

interface userModelReturn {
    results: UserModel[],
    next: string,
    previous: string,
    total: number,
    }

function UsersPage(){

    const [data, setData] = useState<userModelReturn>();

    useEffect(
        () => {
            fetch("http://localhost:3001/users")
                .then(response => response.json())
                .then(data => setData(data));
        }, []
    );

    return (<div className='user-list'>
        {data?.results.map((user) => {
            return (<div className='user-card'>
                <a href={`/users/${user.id}`}>
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <h3>{user.username}</h3>
                    <img src={user.profileImageUrl}/>
                </div>
                </a>
                </div>)
        })
            
        }</div>)
}
export default UsersPage;