import { Link } from "react-router-dom"
import './navigation.scss';
import { useUser } from "../../utils/useUser";
export const Navigation = () => {
    const {isLoggedIn} = useUser();

    return (
        <ul className="nav">
            
            {isLoggedIn ? 
            <>
                <li><Link to='/user/settings'>User Settings</Link></li>
                <li><Link to='usersettings'>Log Out</Link></li>
            </> : <>
                <li><Link to='/user/signup'>Sign Up</Link></li>
                <li><Link to='/user/signin'>Sign In</Link></li>
            </>
            
            }
        </ul>
    )
}