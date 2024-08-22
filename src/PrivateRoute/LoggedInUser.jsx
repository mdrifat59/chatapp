import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../page/Login";

export default function LoggedInUserRoute(){
    let user =useSelector((user)=>user.login.loggedIn)
    return user ? <Outlet/> : <Login/>
}