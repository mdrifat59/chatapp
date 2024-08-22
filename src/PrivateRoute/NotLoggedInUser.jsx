import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function NotLoggedInUserRoute(){
    let user = useSelector((user)=>user.login.loggedIn)
    return user ? <Navigate to="/" /> : <Outlet/>;
}