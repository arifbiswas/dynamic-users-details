import React from 'react';
import { Outlet } from 'react-router-dom';
import User from '../Components/Users/User';

const Main = () => {
    return (
        <div>
        <div className='custom-grid gap-4'>
        <div className=''>
            <User></User>
        </div>
        <div className=''>
        <Outlet></Outlet>
        </div>
        </div>
           
        </div>
    );
};

export default Main;