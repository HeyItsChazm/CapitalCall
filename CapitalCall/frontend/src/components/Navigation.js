import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Welcome</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/newcall">New Call</NavLink>
       </div>
    );
}
export default Navigation;
