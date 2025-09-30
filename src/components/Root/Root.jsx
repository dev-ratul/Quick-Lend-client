import React from 'react';
import Nabvar from '../navbar/Nabvar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Nabvar> </Nabvar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;