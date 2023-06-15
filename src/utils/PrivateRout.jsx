import { useUser } from "./useUser"
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const {isLoggedIn} = useUser();
    return isLoggedIn? <Outlet/> : <Navigate to='/user/signin' />;
}

export const PublicRoute = () => {
    const {isLoggedIn} = useUser();
    return isLoggedIn? <Navigate to='/' /> : <Outlet/>;
}