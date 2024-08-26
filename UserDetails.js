import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function UserDetails(){
    const [users,setUsers]=useState({})
    const [posts,setPosts]=useState([])
    const { id}= useParams()

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            const result=res.data
            setUsers(result)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[id])


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((res)=>{
            const result=res.data
            console.log(result)
            setPosts(result)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[id])

    return (
        <div>
            <h1> User Name:{users.name}</h1>
            <h2>Posts of a user</h2>
            <ul>
        {posts.map((ele) => {
          return (
            <li key={ele.id}>
              <Link to={`/post-of-a-user/${ele.id}`}>{ele.title}</Link>
            </li>
          );
        })}
      </ul>
        </div>
    )
}