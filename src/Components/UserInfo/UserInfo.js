import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
const UserInfo = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const {id} = useParams();
  // console.log(id);
  useEffect(()=>{
    setLoading(true)
    axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
    .then(res=> {
      setUser(res.data)
      setLoading(false);
    })
  },[id])
  // console.log(user);

  return (
    <div>
     <h1 className="bg-custom-color fs-3 d-flex justify-content-center align-items-center rounded">
        USERS DETAILS
      </h1>
    {
      user.profile ?<>
      <div>
        {
          loading ? <div className="loading-hight w-100 d-flex  justify-content-center align-items-center"> <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></div> : <>

          <div className="d-flex justify-content-center flex-column align-items-center mt-5">
          <img
            className="custom-picture-size "
            src={user?.avatar}
            alt=""
          />
          <h3 className="mt-2 fs-4">{user?.profile?.username}</h3>
        </div>
        <div>
          {/* description  */}
          <p className="w-75 p-2 rounded custom-color-description mx-auto my-4">
            {user?.Bio}
          </p>
        </div>
        <div>
          {/* name  */}
          <div className="w-75 mx-auto mb-3">
            <label htmlFor="name"><small> Full Name</small></label>
            <input
              type="text"
              id="name"
              className="form-control bg-light"
              placeholder={user?.profile?.firstName + " " + user.profile?.lastName}
              disabled
            />
          </div>
          {/* Job title  */}
          <div className="w-75 mx-auto mb-3">
            <label htmlFor="jobTitle"><small> Job Title</small></label>
            <input
              type="text"
              id="jobTitle"
              className="form-control bg-light"
              placeholder={user?.jobTitle}
              disabled
            />
          </div>
          {/* Email  */}
          <div className="w-75 mx-auto mb-3">
            <label htmlFor="email" className="fs-6"> <small>Email</small></label>
            <input
              type="email"
              id="email"
              className="form-control bg-light"
              placeholder={user?.profile?.email}
              disabled
            />
          </div>
        </div>
          </>
        }
      </div>

      </> : <>
      <h3>No data show</h3>
      </>
    }
    </div>
  );
};

export default UserInfo;
