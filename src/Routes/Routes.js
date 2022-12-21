import { createBrowserRouter } from "react-router-dom";
import UserInfo from "../Components/UserInfo/UserInfo";
import User from "../Components/Users/User";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <UserInfo />,
                
            },
            {
                path : "/userInfo/:id",
                element : <UserInfo />,
                // loader : ({params})=> fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${params.id}`)
                
            },
        ]
    }
])