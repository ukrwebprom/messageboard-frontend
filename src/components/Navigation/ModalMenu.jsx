import './navigation.scss';
import { useNavigate } from "react-router-dom";
import { useUser } from '../../utils/useUser';

export const ModalMenu = ({doClose}) => {
    const navigate = useNavigate();
    const {logMeOut} = useUser();
    const onLogOut = () => {
        doClose();
        logMeOut();
    }
    const onLink = url => {
        doClose();
        navigate(url);
    }
    return (
        <div className="backdrop" id="backdrop" onClick={doClose}>
            <div className="dropdownmenu" onClick={e => e.stopPropagation()}>
                        <ul>
                        <li onClick={() => onLink('/user/settings')}>User Settings</li>
                        <li onClick={onLogOut}>Log Out</li>
                        </ul>
            </div>
        </div>
    )
}