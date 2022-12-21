import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import "./User.css";
const User = () => {
  const [users,setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
    .then(res =>{
      setUsers(res.data)
      setLoading(false)
    })
  },[])
  // console.log(users);
  return (
    <div>
      <h1 className="bg-custom-color fs-3 d-flex justify-content-center align-items-center rounded">
        USERS LIST
      </h1>
      {
        loading ?<>
        <div className="loading-hight w-100 d-flex  justify-content-center align-items-center"> <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></div>
        </> : <div>
      
    {
        users.map(user=>
          <Link to={`userInfo/${user?.id}`} key={user?.id} className=" underline-none">
        <div className="custom-color-users rounded mb-2">
        <div className="d-flex h-100 mx-3 align-items-center">
          <img
            className="profile-size"
            src={user?.avatar}
            alt=""
          />
          <h4 className="mx-3">{user?.profile?.firstName + " " + user.profile?.lastName}</h4>
        </div>
        </div>
      </Link>
        )
      }
        </div>
      }
    </div>
  );
};

export default User;
