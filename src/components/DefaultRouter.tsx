import { Outlet } from "react-router-dom"
import MyAppBar from "./NavBar"

export const DefaultRouter=()=>{
    return(
        <>
        <MyAppBar/>
        <Outlet/>
        </>
    )
}