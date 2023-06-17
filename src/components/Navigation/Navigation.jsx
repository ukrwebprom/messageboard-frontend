import { Link } from "react-router-dom"
import './navigation.scss';
import { useUser } from "../../utils/useUser";
import { RiMapPinUserFill } from 'react-icons/ri';
import { useEffect, useState, useRef } from "react";
import { ModalMenu } from "./ModalMenu";

export const Navigation = () => {
    const {authToken, userName} = useUser();
    const [showMenu, setShowMenu] = useState(false);
    const closeMenuListener = useRef(null);

    const toggleMenu = () => {
        setShowMenu(c => !c);
        console.log('close')
    }

    return (
        <ul className="nav">
            
            {authToken ? 
            <>
                <li><span className="username">{userName}</span></li>
                <li>
                    <>
                    <RiMapPinUserFill size={25} onClick={toggleMenu} />
                    {showMenu && <ModalMenu doClose={toggleMenu} />}
                    </>
                </li>
            </> : <>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/signin'>Sign In</Link></li>
            </>
            
            }
        </ul>
    )
}