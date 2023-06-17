import { useUser } from "./useUser"
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const {authToken} = useUser();
    return authToken? <Outlet/> : <Navigate to='/intro' />;
}

export const RestrictedRoute = () => {
    const {authToken} = useUser();
    return authToken? <Navigate to='/' /> : <Outlet/>;
}