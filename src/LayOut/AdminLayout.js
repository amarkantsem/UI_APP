import { BrowserRouter, Route, Routes, NavLink, Outlet, Navigate } from 'react-router-dom'
import Header from '../components/Header';
import React from 'react';
import SideNav from '../components/SideNav';

function AdminLayout() {
    let login = localStorage.getItem('user');
    return (
        <React.Fragment>
          <Header></Header>
          {/* <SideNav></SideNav> */}
            <div>
            <Outlet /> 
                {/* {login ? <Outlet /> : <Navigate to="/"></Navigate>} */}
            </div>
        </React.Fragment>)
}
export default AdminLayout;