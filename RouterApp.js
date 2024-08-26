import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from "./Home"
import Users from './Users'
import Posts from "./Posts"
import UserDetails from './UserDetails'
import PostOfAUser from './Post-of-a-user'

export default function RouterApp(){

    return(
        <BrowserRouter>
        <div>
            <Link to="/">HOME</Link> |
            <Link to="/users">USERS</Link> |        
            <Link to="/posts">POSTS</Link> 
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/posts" element={<Posts />}/>
            <Route path="/users" element={<Users />}/>
            <Route path="/usersdetails/:id" element={<UserDetails />}/>
            <Route path="/post-of-a-user/:id" element={<PostOfAUser/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    )
}