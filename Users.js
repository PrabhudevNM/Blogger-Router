import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const result = response.data;
        setUsers(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Listing users-{users.length}</h1>
      <ul>
        {users.map((ele) => {
          return (
            <li key={ele.id}>
              <Link to={`/usersdetails/${ele.id}`}>{ele.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
