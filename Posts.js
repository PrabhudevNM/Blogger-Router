import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Posts(){
    const [posts,setPosts]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>{
            const result=res.data
            console.log(result)
            setPosts(result)
        })
            .catch((err)=>{
                console.log(err)
            })

    },[id])


    return(
        <div>
            {posts.title}
            <ul>
        {posts.map((ele) => {
          return (
            <li key={ele.id}>
              <Link to={`/post-of-a-user/${ele.id}`}>{ele.title}</Link>
            </li>
          )
        })}
      </ul>
        </div>
        
    )
}