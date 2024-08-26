import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function PostOfAUser(){

    const [users,setUsers]=useState({})
    const [posts,setposts]=useState([])
    const [userId,setUserId]=useState()
    const [comments,setComments]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res)=>{
            const result=res.data
            //console.log(result)
            setUsers(result)
    
        })
        .catch(err=>console.log(err))
    },[userId])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

        .then((res)=>{
            const result=res.data
            //console.log(result)
            setposts(result)
            setUserId(res.data.userId)
        })
        .catch(err=>console.log(err))
    },[id])


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)

        .then((res)=>{
            const result=res.data
           // console.log(result)
            setComments(result)
        })
        .catch(err=>console.log(err))
    },[id])

    return(
        <div>
           <p>Name:{users.name}</p>
           <h3>Title:{posts.title}</h3>
           <h2>Body:{posts.body}</h2>
           <hr></hr>

           <ul>
        {comments.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.body}
            </li>
          );
        })}
      </ul>
        <hr></hr>

        <Link to={`/usersdetails/${userId}`}>More posts of Author:{users.name}</Link>
        </div>
    )
}