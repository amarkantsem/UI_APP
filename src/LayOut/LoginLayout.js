import { BrowserRouter, Route, Routes, NavLink, Outlet } from 'react-router-dom'

const LoginLayout = () => (

    <div>
        header or logo
        <div>
            <Outlet />
        </div>
        footer login
    </div>
);

export default LoginLayout;